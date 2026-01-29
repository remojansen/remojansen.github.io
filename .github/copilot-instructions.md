# Copilot Instructions

A WebGL-powered retro terminal (CRT effects) personal website featuring a shell emulator with built-in games, CV viewer, and media playback. Inspired by cool-retro-term.

## Architecture Overview

```
src/index.ts              → App entry: Three.js scene, audio, TerminalText/Frame setup
src/terminal/
  XTermAdapter.ts         → Bridges xterm.js (input/state) ↔ TerminalText (CRT renderer)
  ShellEmulator.ts        → Virtual shell: command registry, file system, prompt handling
  *.ts                    → Individual command modules (games, cv, rss, etc.)
```

**Data flow:** User input → XTermAdapter → ShellEmulator.runCommand() → CommandHandler → TerminalIO.write() → xterm buffer → TerminalText renderer

## Command Naming Convention

Commands are registered with specific prefixes that determine how they're invoked:

| Registration | User types | Example |
|-------------|-----------|---------|
| `registerCommand("./mycommand", handler)` | `./mycommand` or `./Programs/mycommand` | Games, cv, rss |
| `registerCommand("mycommand", handler)` | `mycommand` | help, clear, ls, cd, cat, ffplay, mpg123 |

**Rule:** Programs in the virtual filesystem use `./` prefix. Built-in shell commands don't.

## Virtual Filesystem Structure

```
~ (root)
├── Documents/
│   ├── license.txt    (async content from fetch)
│   └── mvp.txt
├── Music/
│   ├── arcade.mp3
│   └── chill.mp3
├── Videos/
│   └── interview.mp4
└── Programs/
    ├── cv, rss, pong, snake, blocks, matrix, donut
    ├── space-invaders, arkanoid, flappybird, chess
    └── minesweeper, life, memory
```

**Adding files to filesystem** in `ShellEmulator.ts` → `initFileSystem()`:
```typescript
virtualFileSystem.set("Programs/mycommand", {
  name: "mycommand",
  isDirectory: false,
  size: 4096,
  permissions: "-rwxr-xr-x",  // x = executable, appears in Programs/
  modified: "Jan 29 00:00",
  parent: "Programs",
  // Optional: for readable files (cat command)
  content: async () => {
    const res = await fetch("assets/content/myfile.txt");
    return await res.text();
  },
});
```

## TerminalIO Interface - Complete Reference

```typescript
interface TerminalIO {
  write(text: string): void;      // No newline - use for partial output
  writeln(text: string): void;    // Adds \r\n - use for lines
  clear(): void;                  // Clears screen, resets buffer
  
  // Interactive commands (games) - all optional, use ?. operator
  setKeyHandler?(handler: KeyHandler): void;
  clearKeyHandler?(): void;
  hideCursor?(): void;
  showCursor?(): void;
  getSize?(): { cols: number; rows: number };
  
  // Media playback
  playVideo?(url: string): Promise<void>;
  stopVideo?(): void;
  getVideoElement?(): HTMLVideoElement | null;
  
  // Audio (background music loops)
  startGameMusic?(): void;
  stopGameMusic?(): void;
}
```

**CRITICAL:** Always use optional chaining (`?.`) for optional methods. They may be undefined.

## Adding New Commands - Complete Example

### 1. Create command file

```typescript
// src/terminal/mycommand.ts
import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

export async function myCommand(ctx: CommandContext): Promise<void> {
  // ctx.args[0] = command name, ctx.args[1+] = arguments
  // ctx.command = full command string
  
  ctx.terminal.writeln("Hello from mycommand!");
}
```

### 2. Register in ShellEmulator.ts

```typescript
// Add import at top with other command imports
import { myCommand } from "./mycommand";

// Add registration at bottom with other registerCommand calls
registerCommand("./mycommand", myCommand);
```

### 3. Add to virtual filesystem (in initFileSystem())

```typescript
virtualFileSystem.set("Programs/mycommand", {
  name: "mycommand",
  isDirectory: false,
  size: 4096,
  permissions: "-rwxr-xr-x",
  modified: "Jan 29 00:00",
  parent: "Programs",
});
```

## Interactive Commands (Games) - Complete Pattern

```typescript
export async function gameCommand(ctx: CommandContext): Promise<void> {
  // 1. Validate terminal supports game input
  if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
    ctx.terminal.writeln("game: error - terminal does not support game input");
    return;
  }

  // 2. Start game music (optional)
  ctx.terminal.startGameMusic?.();
  
  // 3. Hide cursor
  ctx.terminal.hideCursor?.();
  
  // 4. Game state
  let running = true;
  const state = { /* game state */ };
  
  // 5. Key handler - handles BOTH keydown AND keyup
  const keyHandler: KeyHandler = (
    key: string,        // "ArrowUp", "a", "Escape", etc.
    keyCode: number,    // Legacy keyCode
    eventType: "keydown" | "keyup",
    ctrlKey?: boolean
  ) => {
    // IMPORTANT: Filter by eventType - you get both!
    if (eventType !== "keydown") return;
    
    // Handle input
    if (key === "q" || key === "Q") {
      running = false;
    }
  };
  
  ctx.terminal.setKeyHandler(keyHandler);
  
  // 6. Game loop
  const FRAME_DELAY = 50; // ~20 FPS
  let isFirstFrame = true;
  
  while (running) {
    // Only clear on first frame, then use cursor positioning
    if (isFirstFrame) {
      ctx.terminal.clear();
      isFirstFrame = false;
    }
    
    // Move cursor home for efficient redraw (no flicker)
    ctx.terminal.write("\x1b[H");
    
    // Render frame using writeln() for each line
    ctx.terminal.writeln("Game content here");
    
    await sleep(FRAME_DELAY);
  }
  
  // 7. CLEANUP - ALWAYS do this, use try/finally if needed
  ctx.terminal.clearKeyHandler?.();
  ctx.terminal.stopGameMusic?.();
  ctx.terminal.showCursor?.();
  ctx.terminal.clear();
}
```

## KeyHandler Gotchas

```typescript
const keyHandler: KeyHandler = (key, keyCode, eventType, ctrlKey) => {
  // ❌ WRONG - processes keyup too, causes double actions
  if (key === "ArrowUp") { moveUp(); }
  
  // ✅ CORRECT - only process keydown
  if (eventType === "keydown" && key === "ArrowUp") { moveUp(); }
  
  // For games needing key state (held keys):
  if (key === "ArrowUp") {
    keys.up = (eventType === "keydown");
  }
};
```

## Sound Effects Pattern (Web Audio API)

```typescript
let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    )();
  }
  return audioContext;
}

function playSound(): void {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  } catch {
    // Audio not available - silently ignore
  }
}
```

## High Scores Persistence

```typescript
// Load
let highScore = 0;
try {
  const saved = localStorage.getItem("mygame_high_score");
  if (saved) highScore = parseInt(saved, 10);
} catch {
  // localStorage unavailable
}

// Save
try {
  localStorage.setItem("mygame_high_score", score.toString());
} catch {
  // Ignore errors
}
```

## Paged Content with @@@ Delimiter

Files can use `@@@` markers to create pauses when displayed with `cat`:

```
First section of text
@@@
Second section (appears after 500ms)
@@@
Third section (appears after another 500ms)
```

The `cat` command in ShellEmulator automatically handles this.

## ANSI Escape Codes Used

| Code | Effect | Usage |
|------|--------|-------|
| `\x1b[H` | Move cursor to home (0,0) | Efficient screen updates |
| `\x1b[2J` | Clear entire screen | Full screen clear |
| `\r\n` | Carriage return + newline | Line endings (writeln adds this) |

## Mobile Device Handling

The site blocks mobile users (screen < 1080px or mobile user agent). Check `src/utils.ts`:

```typescript
import { isMobileDevice } from "../utils";

// In XTermAdapter, all input is blocked if isMobileDevice() returns true
```

**Don't add mobile support** - the CRT shader experience requires a physical keyboard.

## Common Mistakes to Avoid

1. **Forgetting cleanup:** Always call `clearKeyHandler()`, `showCursor()`, `stopGameMusic()` on exit
2. **Not filtering eventType:** KeyHandler receives both keydown AND keyup
3. **Using write() for lines:** Use `writeln()` for lines, `write()` for partial output
4. **Missing optional chaining:** TerminalIO methods like `hideCursor` are optional
5. **Hardcoded dimensions:** Use `ctx.terminal.getSize?.()` for responsive layouts
6. **Not registering command:** Must add import AND registerCommand() in ShellEmulator.ts
7. **Wrong command prefix:** Programs use `./mycommand`, builtins use `mycommand`

## Build & Development

```bash
npm run dev              # Watch mode + local server on :8080
npm run build            # Production build to dist/ (minified IIFE)
npm run lint-and-format  # Biome check with auto-fix
```

## Code Style

- **Formatter:** Biome with tabs, double quotes
- **Exports:** Named exports for commands (`export async function snakeCommand`)
- **Types:** Import from ShellEmulator: `CommandContext`, `KeyHandler`, `TerminalIO`
- **Error handling:** Always wrap audio/localStorage in try-catch
- **Async:** Commands can be async, use `sleep()` from ShellEmulator for delays

## External Dependencies

| Package | Purpose |
|---------|---------|
| `cool-retro-term-renderer` | CRT shader effects (TerminalText, TerminalFrame) |
| `@xterm/xterm` | Terminal emulation (hidden, manages buffer state) |
| `three` | WebGL scene, audio via `THREE.Audio` |

## File Reference

| File | Contains |
|------|----------|
| `src/index.ts` | Three.js scene setup, audio controller, main initialization |
| `src/terminal/ShellEmulator.ts` | Command registry, virtual filesystem, runCommand(), all imports |
| `src/terminal/XTermAdapter.ts` | Keyboard handling, xterm↔renderer bridge, boot sequence |
| `src/terminal/snake.ts` | Good example: game loop, sound effects, high scores |
| `src/terminal/cv.ts` | Good example: async data loading, formatted output |
| `src/terminal/rss.ts` | Good example: interactive list navigation without game loop |
| `src/utils.ts` | Mobile device detection |
| `assets/content/` | Static content: cv.json, bios.txt, license.txt |
