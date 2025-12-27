/**
 * Chess - Classic chess game with AI opponent
 */

import type { CommandContext, KeyHandler } from "./ShellEmulator";
import { sleep } from "./ShellEmulator";

// ============================================
// Sound Effects using Web Audio API
// ============================================

let audioContext: AudioContext | null = null;
let backgroundMusic: HTMLAudioElement | null = null;

function getAudioContext(): AudioContext {
	if (!audioContext) {
		audioContext = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
	}
	return audioContext;
}

/**
 * Start background music for chess
 */
function startChessMusic(): void {
	try {
		if (backgroundMusic) {
			backgroundMusic.pause();
			backgroundMusic = null;
		}
		backgroundMusic = new Audio("assets/audio/chill-game.mp3");
		backgroundMusic.loop = true;
		backgroundMusic.volume = 0.3;
		backgroundMusic.play().catch(() => {
			// Autoplay blocked, will start on first interaction
		});
	} catch {
		// Audio not available
	}
}

/**
 * Stop background music
 */
function stopChessMusic(): void {
	if (backgroundMusic) {
		backgroundMusic.pause();
		backgroundMusic.currentTime = 0;
		backgroundMusic = null;
	}
}

/**
 * Play move sound
 */
function playMoveSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(300, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);

		gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.1);
	} catch {
		// Audio not available
	}
}

/**
 * Play capture sound
 */
function playCaptureSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.type = "sawtooth";
		oscillator.frequency.setValueAtTime(400, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.15);

		gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 0.15);
	} catch {
		// Audio not available
	}
}

/**
 * Play check sound
 */
function playCheckSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [600, 500, 600];

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "square";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
			gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + i * 0.1 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.1);

			oscillator.start(ctx.currentTime + i * 0.1);
			oscillator.stop(ctx.currentTime + i * 0.1 + 0.1);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play checkmate/win sound
 */
function playCheckmateSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [523.25, 659.25, 783.99, 1046.50];

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
			gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.15 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.2);

			oscillator.start(ctx.currentTime + i * 0.15);
			oscillator.stop(ctx.currentTime + i * 0.15 + 0.2);
		});
	} catch {
		// Audio not available
	}
}

/**
 * Play game over/lose sound
 */
function playLoseSound(): void {
	try {
		const ctx = getAudioContext();
		const notes = [400, 350, 300, 250];

		notes.forEach((freq, i) => {
			const oscillator = ctx.createOscillator();
			const gainNode = ctx.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(ctx.destination);

			oscillator.type = "sawtooth";
			oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.2);

			gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.2);
			gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + i * 0.2 + 0.02);
			gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.2 + 0.25);

			oscillator.start(ctx.currentTime + i * 0.2);
			oscillator.stop(ctx.currentTime + i * 0.2 + 0.25);
		});
	} catch {
		// Audio not available
	}
}

// ============================================
// Chess Types and Constants
// ============================================

type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
type PieceColor = "white" | "black";

interface Piece {
	type: PieceType;
	color: PieceColor;
	hasMoved: boolean;
}

interface Position {
	row: number;
	col: number;
}

interface Move {
	from: Position;
	to: Position;
	piece: Piece;
	captured?: Piece;
	isEnPassant?: boolean;
	isCastling?: "kingside" | "queenside";
	promotion?: PieceType;
}

interface ChessState {
	board: (Piece | null)[][];
	currentTurn: PieceColor;
	selectedPos: Position | null;
	cursorPos: Position;
	validMoves: Position[];
	lastMove: Move | null;
	enPassantTarget: Position | null;
	isCheck: boolean;
	isCheckmate: boolean;
	isStalemate: boolean;
	gameOver: boolean;
	winner: PieceColor | "draw" | null;
	running: boolean;
	paused: boolean;
	thinking: boolean;
	playerColor: PieceColor;
	moveHistory: string[];
}

// Unicode chess pieces
const PIECE_SYMBOLS: Record<PieceColor, Record<PieceType, string>> = {
	white: {
		king: "♔",
		queen: "♕",
		rook: "♖",
		bishop: "♗",
		knight: "♘",
		pawn: "♙",
	},
	black: {
		king: "♚",
		queen: "♛",
		rook: "♜",
		bishop: "♝",
		knight: "♞",
		pawn: "♟",
	},
};

// Piece values for AI evaluation
const PIECE_VALUES: Record<PieceType, number> = {
	pawn: 100,
	knight: 320,
	bishop: 330,
	rook: 500,
	queen: 900,
	king: 20000,
};

// Position bonuses for pieces (encourages good positioning)
const PAWN_TABLE = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[50, 50, 50, 50, 50, 50, 50, 50],
	[10, 10, 20, 30, 30, 20, 10, 10],
	[5, 5, 10, 25, 25, 10, 5, 5],
	[0, 0, 0, 20, 20, 0, 0, 0],
	[5, -5, -10, 0, 0, -10, -5, 5],
	[5, 10, 10, -20, -20, 10, 10, 5],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

const KNIGHT_TABLE = [
	[-50, -40, -30, -30, -30, -30, -40, -50],
	[-40, -20, 0, 0, 0, 0, -20, -40],
	[-30, 0, 10, 15, 15, 10, 0, -30],
	[-30, 5, 15, 20, 20, 15, 5, -30],
	[-30, 0, 15, 20, 20, 15, 0, -30],
	[-30, 5, 10, 15, 15, 10, 5, -30],
	[-40, -20, 0, 5, 5, 0, -20, -40],
	[-50, -40, -30, -30, -30, -30, -40, -50],
];

const BISHOP_TABLE = [
	[-20, -10, -10, -10, -10, -10, -10, -20],
	[-10, 0, 0, 0, 0, 0, 0, -10],
	[-10, 0, 5, 10, 10, 5, 0, -10],
	[-10, 5, 5, 10, 10, 5, 5, -10],
	[-10, 0, 10, 10, 10, 10, 0, -10],
	[-10, 10, 10, 10, 10, 10, 10, -10],
	[-10, 5, 0, 0, 0, 0, 5, -10],
	[-20, -10, -10, -10, -10, -10, -10, -20],
];

const KING_TABLE = [
	[-30, -40, -40, -50, -50, -40, -40, -30],
	[-30, -40, -40, -50, -50, -40, -40, -30],
	[-30, -40, -40, -50, -50, -40, -40, -30],
	[-30, -40, -40, -50, -50, -40, -40, -30],
	[-20, -30, -30, -40, -40, -30, -30, -20],
	[-10, -20, -20, -20, -20, -20, -20, -10],
	[20, 20, 0, 0, 0, 0, 20, 20],
	[20, 30, 10, 0, 0, 10, 30, 20],
];

// ============================================
// Board Initialization
// ============================================

function createInitialBoard(): (Piece | null)[][] {
	const board: (Piece | null)[][] = [];

	for (let row = 0; row < 8; row++) {
		board[row] = [];
		for (let col = 0; col < 8; col++) {
			board[row][col] = null;
		}
	}

	// Set up black pieces (top)
	const backRow: PieceType[] = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
	for (let col = 0; col < 8; col++) {
		board[0][col] = { type: backRow[col], color: "black", hasMoved: false };
		board[1][col] = { type: "pawn", color: "black", hasMoved: false };
	}

	// Set up white pieces (bottom)
	for (let col = 0; col < 8; col++) {
		board[6][col] = { type: "pawn", color: "white", hasMoved: false };
		board[7][col] = { type: backRow[col], color: "white", hasMoved: false };
	}

	return board;
}

// ============================================
// Move Generation and Validation
// ============================================

function isValidPosition(row: number, col: number): boolean {
	return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function cloneBoard(board: (Piece | null)[][]): (Piece | null)[][] {
	return board.map(row => row.map(piece => piece ? { ...piece } : null));
}

function getPawnMoves(board: (Piece | null)[][], pos: Position, piece: Piece, enPassantTarget: Position | null): Position[] {
	const moves: Position[] = [];
	const direction = piece.color === "white" ? -1 : 1;
	const startRow = piece.color === "white" ? 6 : 1;

	// Forward move
	const newRow = pos.row + direction;
	if (isValidPosition(newRow, pos.col) && !board[newRow][pos.col]) {
		moves.push({ row: newRow, col: pos.col });

		// Double move from starting position
		if (pos.row === startRow) {
			const doubleRow = pos.row + 2 * direction;
			if (!board[doubleRow][pos.col]) {
				moves.push({ row: doubleRow, col: pos.col });
			}
		}
	}

	// Captures (including en passant)
	for (const colOffset of [-1, 1]) {
		const captureCol = pos.col + colOffset;
		if (isValidPosition(newRow, captureCol)) {
			const target = board[newRow][captureCol];
			if (target && target.color !== piece.color) {
				moves.push({ row: newRow, col: captureCol });
			}
			// En passant
			if (enPassantTarget && enPassantTarget.row === newRow && enPassantTarget.col === captureCol) {
				moves.push({ row: newRow, col: captureCol });
			}
		}
	}

	return moves;
}

function getKnightMoves(board: (Piece | null)[][], pos: Position, piece: Piece): Position[] {
	const moves: Position[] = [];
	const offsets = [
		[-2, -1], [-2, 1], [-1, -2], [-1, 2],
		[1, -2], [1, 2], [2, -1], [2, 1]
	];

	for (const [rowOff, colOff] of offsets) {
		const newRow = pos.row + rowOff;
		const newCol = pos.col + colOff;
		if (isValidPosition(newRow, newCol)) {
			const target = board[newRow][newCol];
			if (!target || target.color !== piece.color) {
				moves.push({ row: newRow, col: newCol });
			}
		}
	}

	return moves;
}

function getSlidingMoves(board: (Piece | null)[][], pos: Position, piece: Piece, directions: [number, number][]): Position[] {
	const moves: Position[] = [];

	for (const [rowDir, colDir] of directions) {
		let newRow = pos.row + rowDir;
		let newCol = pos.col + colDir;

		while (isValidPosition(newRow, newCol)) {
			const target = board[newRow][newCol];
			if (!target) {
				moves.push({ row: newRow, col: newCol });
			} else {
				if (target.color !== piece.color) {
					moves.push({ row: newRow, col: newCol });
				}
				break;
			}
			newRow += rowDir;
			newCol += colDir;
		}
	}

	return moves;
}

function getBishopMoves(board: (Piece | null)[][], pos: Position, piece: Piece): Position[] {
	return getSlidingMoves(board, pos, piece, [[-1, -1], [-1, 1], [1, -1], [1, 1]]);
}

function getRookMoves(board: (Piece | null)[][], pos: Position, piece: Piece): Position[] {
	return getSlidingMoves(board, pos, piece, [[-1, 0], [1, 0], [0, -1], [0, 1]]);
}

function getQueenMoves(board: (Piece | null)[][], pos: Position, piece: Piece): Position[] {
	return [
		...getBishopMoves(board, pos, piece),
		...getRookMoves(board, pos, piece)
	];
}

function getKingMoves(board: (Piece | null)[][], pos: Position, piece: Piece, canCastle: boolean = true): Position[] {
	const moves: Position[] = [];

	// Normal king moves
	for (let rowOff = -1; rowOff <= 1; rowOff++) {
		for (let colOff = -1; colOff <= 1; colOff++) {
			if (rowOff === 0 && colOff === 0) continue;
			const newRow = pos.row + rowOff;
			const newCol = pos.col + colOff;
			if (isValidPosition(newRow, newCol)) {
				const target = board[newRow][newCol];
				if (!target || target.color !== piece.color) {
					moves.push({ row: newRow, col: newCol });
				}
			}
		}
	}

	// Castling
	if (canCastle && !piece.hasMoved) {
		const row = piece.color === "white" ? 7 : 0;

		// Kingside castling
		const kingsideRook = board[row][7];
		if (kingsideRook && kingsideRook.type === "rook" && !kingsideRook.hasMoved) {
			if (!board[row][5] && !board[row][6]) {
				// Check if king passes through check
				if (!isSquareAttacked(board, { row, col: 4 }, piece.color) &&
					!isSquareAttacked(board, { row, col: 5 }, piece.color) &&
					!isSquareAttacked(board, { row, col: 6 }, piece.color)) {
					moves.push({ row, col: 6 });
				}
			}
		}

		// Queenside castling
		const queensideRook = board[row][0];
		if (queensideRook && queensideRook.type === "rook" && !queensideRook.hasMoved) {
			if (!board[row][1] && !board[row][2] && !board[row][3]) {
				// Check if king passes through check
				if (!isSquareAttacked(board, { row, col: 4 }, piece.color) &&
					!isSquareAttacked(board, { row, col: 3 }, piece.color) &&
					!isSquareAttacked(board, { row, col: 2 }, piece.color)) {
					moves.push({ row, col: 2 });
				}
			}
		}
	}

	return moves;
}

function getPieceMoves(board: (Piece | null)[][], pos: Position, enPassantTarget: Position | null, includeCastling: boolean = true): Position[] {
	const piece = board[pos.row][pos.col];
	if (!piece) return [];

	switch (piece.type) {
		case "pawn":
			return getPawnMoves(board, pos, piece, enPassantTarget);
		case "knight":
			return getKnightMoves(board, pos, piece);
		case "bishop":
			return getBishopMoves(board, pos, piece);
		case "rook":
			return getRookMoves(board, pos, piece);
		case "queen":
			return getQueenMoves(board, pos, piece);
		case "king":
			return getKingMoves(board, pos, piece, includeCastling);
		default:
			return [];
	}
}

function isSquareAttacked(board: (Piece | null)[][], pos: Position, byColor: PieceColor): boolean {
	const enemyColor = byColor === "white" ? "black" : "white";

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];
			if (piece && piece.color === enemyColor) {
				const moves = getPieceMoves(board, { row, col }, null, false);
				if (moves.some(m => m.row === pos.row && m.col === pos.col)) {
					return true;
				}
			}
		}
	}
	return false;
}

function findKing(board: (Piece | null)[][], color: PieceColor): Position | null {
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];
			if (piece && piece.type === "king" && piece.color === color) {
				return { row, col };
			}
		}
	}
	return null;
}

function isInCheck(board: (Piece | null)[][], color: PieceColor): boolean {
	const kingPos = findKing(board, color);
	if (!kingPos) return false;
	return isSquareAttacked(board, kingPos, color);
}

function makeMove(board: (Piece | null)[][], from: Position, to: Position, enPassantTarget: Position | null): { newBoard: (Piece | null)[][], captured: Piece | null, newEnPassant: Position | null } {
	const newBoard = cloneBoard(board);
	const piece = newBoard[from.row][from.col];
	if (!piece) return { newBoard, captured: null, newEnPassant: null };

	let captured = newBoard[to.row][to.col];
	let newEnPassant: Position | null = null;

	// Handle en passant capture
	if (piece.type === "pawn" && enPassantTarget && to.row === enPassantTarget.row && to.col === enPassantTarget.col) {
		const capturedPawnRow = piece.color === "white" ? to.row + 1 : to.row - 1;
		captured = newBoard[capturedPawnRow][to.col];
		newBoard[capturedPawnRow][to.col] = null;
	}

	// Set en passant target for double pawn move
	if (piece.type === "pawn" && Math.abs(to.row - from.row) === 2) {
		newEnPassant = { row: (from.row + to.row) / 2, col: from.col };
	}

	// Handle castling
	if (piece.type === "king" && Math.abs(to.col - from.col) === 2) {
		const isKingside = to.col > from.col;
		const rookFromCol = isKingside ? 7 : 0;
		const rookToCol = isKingside ? 5 : 3;
		const rook = newBoard[from.row][rookFromCol];
		if (rook) {
			rook.hasMoved = true;
			newBoard[from.row][rookToCol] = rook;
			newBoard[from.row][rookFromCol] = null;
		}
	}

	// Handle pawn promotion (auto-promote to queen)
	if (piece.type === "pawn" && (to.row === 0 || to.row === 7)) {
		piece.type = "queen";
	}

	piece.hasMoved = true;
	newBoard[to.row][to.col] = piece;
	newBoard[from.row][from.col] = null;

	return { newBoard, captured, newEnPassant };
}

function getLegalMoves(board: (Piece | null)[][], pos: Position, enPassantTarget: Position | null): Position[] {
	const piece = board[pos.row][pos.col];
	if (!piece) return [];

	const pseudoMoves = getPieceMoves(board, pos, enPassantTarget);
	const legalMoves: Position[] = [];

	for (const move of pseudoMoves) {
		const { newBoard } = makeMove(board, pos, move, enPassantTarget);
		if (!isInCheck(newBoard, piece.color)) {
			legalMoves.push(move);
		}
	}

	return legalMoves;
}

function getAllLegalMoves(board: (Piece | null)[][], color: PieceColor, enPassantTarget: Position | null): { from: Position, to: Position }[] {
	const moves: { from: Position, to: Position }[] = [];

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];
			if (piece && piece.color === color) {
				const from = { row, col };
				const legalMoves = getLegalMoves(board, from, enPassantTarget);
				for (const to of legalMoves) {
					moves.push({ from, to });
				}
			}
		}
	}

	return moves;
}

function isCheckmate(board: (Piece | null)[][], color: PieceColor, enPassantTarget: Position | null): boolean {
	if (!isInCheck(board, color)) return false;
	return getAllLegalMoves(board, color, enPassantTarget).length === 0;
}

function isStalemate(board: (Piece | null)[][], color: PieceColor, enPassantTarget: Position | null): boolean {
	if (isInCheck(board, color)) return false;
	return getAllLegalMoves(board, color, enPassantTarget).length === 0;
}

// ============================================
// AI (Minimax with Alpha-Beta Pruning)
// ============================================

function getPositionBonus(piece: Piece, row: number, col: number): number {
	// Flip row for black pieces
	const adjustedRow = piece.color === "white" ? row : 7 - row;

	switch (piece.type) {
		case "pawn":
			return PAWN_TABLE[adjustedRow][col];
		case "knight":
			return KNIGHT_TABLE[adjustedRow][col];
		case "bishop":
			return BISHOP_TABLE[adjustedRow][col];
		case "king":
			return KING_TABLE[adjustedRow][col];
		default:
			return 0;
	}
}

function evaluateBoard(board: (Piece | null)[][], color: PieceColor): number {
	let score = 0;

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];
			if (piece) {
				const value = PIECE_VALUES[piece.type] + getPositionBonus(piece, row, col);
				if (piece.color === color) {
					score += value;
				} else {
					score -= value;
				}
			}
		}
	}

	return score;
}

function minimax(
	board: (Piece | null)[][],
	depth: number,
	alpha: number,
	beta: number,
	isMaximizing: boolean,
	aiColor: PieceColor,
	enPassantTarget: Position | null
): number {
	const currentColor = isMaximizing ? aiColor : (aiColor === "white" ? "black" : "white");

	if (isCheckmate(board, currentColor, enPassantTarget)) {
		return isMaximizing ? -100000 + depth : 100000 - depth;
	}

	if (isStalemate(board, currentColor, enPassantTarget)) {
		return 0;
	}

	if (depth === 0) {
		return evaluateBoard(board, aiColor);
	}

	const moves = getAllLegalMoves(board, currentColor, enPassantTarget);

	if (isMaximizing) {
		let maxEval = -Infinity;
		for (const move of moves) {
			const { newBoard, newEnPassant } = makeMove(board, move.from, move.to, enPassantTarget);
			const evalScore = minimax(newBoard, depth - 1, alpha, beta, false, aiColor, newEnPassant);
			maxEval = Math.max(maxEval, evalScore);
			alpha = Math.max(alpha, evalScore);
			if (beta <= alpha) break;
		}
		return maxEval;
	} else {
		let minEval = Infinity;
		for (const move of moves) {
			const { newBoard, newEnPassant } = makeMove(board, move.from, move.to, enPassantTarget);
			const evalScore = minimax(newBoard, depth - 1, alpha, beta, true, aiColor, newEnPassant);
			minEval = Math.min(minEval, evalScore);
			beta = Math.min(beta, evalScore);
			if (beta <= alpha) break;
		}
		return minEval;
	}
}

function getBestMove(board: (Piece | null)[][], aiColor: PieceColor, enPassantTarget: Position | null, depth: number = 3): { from: Position, to: Position } | null {
	const moves = getAllLegalMoves(board, aiColor, enPassantTarget);
	if (moves.length === 0) return null;

	let bestMove = moves[0];
	let bestScore = -Infinity;

	for (const move of moves) {
		const { newBoard, newEnPassant } = makeMove(board, move.from, move.to, enPassantTarget);
		const score = minimax(newBoard, depth - 1, -Infinity, Infinity, false, aiColor, newEnPassant);

		if (score > bestScore) {
			bestScore = score;
			bestMove = move;
		}
	}

	return bestMove;
}

// ============================================
// Rendering
// ============================================

function posToNotation(pos: Position): string {
	return `${String.fromCharCode(97 + pos.col)}${8 - pos.row}`;
}

function renderChess(ctx: CommandContext, state: ChessState, isFirstFrame: boolean): void {
	const lines: string[] = [];

	// Header
	const title = "CHESS";
	const headerWidth = 40;
	const titlePadding = Math.floor((headerWidth - title.length) / 2);
	const titlePaddingRight = headerWidth - title.length - titlePadding;
	lines.push(`╔${"═".repeat(headerWidth)}╗`);
	lines.push(`║${" ".repeat(titlePadding)}${title}${" ".repeat(titlePaddingRight)}║`);
	lines.push(`╚${"═".repeat(headerWidth)}╝`);

	// Game info
	const turnStr = state.gameOver ? "Game Over" : `Turn: ${state.currentTurn === "white" ? "White (You)" : "Black (AI)"}`;
	const statusStr = state.isCheck ? " CHECK!" : "";
	lines.push(`${turnStr}${statusStr}`);
	lines.push("");

	// Column labels
	lines.push("     a   b   c   d   e   f   g   h");
	lines.push("   ┌───┬───┬───┬───┬───┬───┬───┬───┐");

	// Board
	for (let row = 0; row < 8; row++) {
		let line = ` ${8 - row} │`;

		for (let col = 0; col < 8; col++) {
			const piece = state.board[row][col];
			const isSelected = state.selectedPos && state.selectedPos.row === row && state.selectedPos.col === col;
			const isCursor = state.cursorPos.row === row && state.cursorPos.col === col;
			const isValidMove = state.validMoves.some(m => m.row === row && m.col === col);
			const isLastMove = state.lastMove && (
				(state.lastMove.from.row === row && state.lastMove.from.col === col) ||
				(state.lastMove.to.row === row && state.lastMove.to.col === col)
			);

			let cellContent: string;
			if (piece) {
				cellContent = PIECE_SYMBOLS[piece.color][piece.type];
			} else if (isValidMove) {
				cellContent = "·";
			} else {
				cellContent = " ";
			}

			// Apply visual indicators
			let cell: string;
			if (isCursor && isSelected) {
				cell = `[${cellContent}]`;
			} else if (isCursor) {
				cell = `<${cellContent}>`;
			} else if (isSelected) {
				cell = `(${cellContent})`;
			} else if (isLastMove) {
				cell = `•${cellContent}•`;
			} else {
				cell = ` ${cellContent} `;
			}

			line += cell + "│";
		}

		line += ` ${8 - row}`;
		lines.push(line);

		if (row < 7) {
			lines.push("   ├───┼───┼───┼───┼───┼───┼───┼───┤");
		}
	}

	lines.push("   └───┴───┴───┴───┴───┴───┴───┴───┘");
	lines.push("     a   b   c   d   e   f   g   h");
	lines.push("");

	// Status messages
	if (state.thinking) {
		lines.push("  AI is thinking...");
	} else if (state.gameOver) {
		if (state.isCheckmate) {
			if (state.winner === state.playerColor) {
				lines.push("  CHECKMATE! You win!");
			} else {
				lines.push("  CHECKMATE! AI wins!");
			}
		} else if (state.isStalemate) {
			lines.push("  STALEMATE! It's a draw.");
		}
		lines.push("  Press R to restart, Q to quit");
	} else if (state.paused) {
		lines.push("  PAUSED - Press P to continue");
	} else {
		lines.push("  ↑↓←→ = Move cursor  |  SPACE = Select/Move");
		lines.push("  P = Pause  |  Q = Quit");
	}

	// Move history (last 5 moves)
	if (state.moveHistory.length > 0) {
		lines.push("");
		const recentMoves = state.moveHistory.slice(-5);
		lines.push(`  Recent: ${recentMoves.join(", ")}`);
	}

	if (isFirstFrame) {
		ctx.terminal.clear();
	}

	ctx.terminal.write("\x1b[H");

	for (const line of lines) {
		ctx.terminal.writeln(line);
	}
}

// ============================================
// Game Command
// ============================================

export async function chessCommand(ctx: CommandContext): Promise<void> {
	if (!ctx.terminal.setKeyHandler || !ctx.terminal.clearKeyHandler) {
		ctx.terminal.writeln("chess: error - terminal does not support game input");
		ctx.terminal.writeln("This game requires keyboard input capture.");
		return;
	}

	// Start chess-specific background music
	startChessMusic();

	if (ctx.terminal.hideCursor) {
		ctx.terminal.hideCursor();
	}

	const state: ChessState = {
		board: createInitialBoard(),
		currentTurn: "white",
		selectedPos: null,
		cursorPos: { row: 6, col: 4 }, // Start at e2
		validMoves: [],
		lastMove: null,
		enPassantTarget: null,
		isCheck: false,
		isCheckmate: false,
		isStalemate: false,
		gameOver: false,
		winner: null,
		running: true,
		paused: false,
		thinking: false,
		playerColor: "white",
		moveHistory: [],
	};

	const resetGame = () => {
		state.board = createInitialBoard();
		state.currentTurn = "white";
		state.selectedPos = null;
		state.cursorPos = { row: 6, col: 4 };
		state.validMoves = [];
		state.lastMove = null;
		state.enPassantTarget = null;
		state.isCheck = false;
		state.isCheckmate = false;
		state.isStalemate = false;
		state.gameOver = false;
		state.winner = null;
		state.thinking = false;
		state.moveHistory = [];
	};

	const keyHandler: KeyHandler = (
		key: string,
		keyCode: number,
		eventType: "keydown" | "keyup",
	) => {
		if (eventType !== "keydown") return;

		// Quit
		if (key === "q" || key === "Q" || keyCode === 81) {
			state.running = false;
			return;
		}

		// Restart
		if ((key === "r" || key === "R" || keyCode === 82) && state.gameOver) {
			resetGame();
			return;
		}

		// Pause
		if (key === "p" || key === "P" || keyCode === 80) {
			if (!state.gameOver) {
				state.paused = !state.paused;
			}
			return;
		}

		if (state.paused || state.gameOver || state.thinking || state.currentTurn !== state.playerColor) return;

		// Cursor movement
		if (key === "ArrowUp" || key === "w" || key === "W" || keyCode === 38 || keyCode === 87) {
			state.cursorPos.row = Math.max(0, state.cursorPos.row - 1);
		}
		if (key === "ArrowDown" || key === "s" || key === "S" || keyCode === 40 || keyCode === 83) {
			state.cursorPos.row = Math.min(7, state.cursorPos.row + 1);
		}
		if (key === "ArrowLeft" || key === "a" || key === "A" || keyCode === 37 || keyCode === 65) {
			state.cursorPos.col = Math.max(0, state.cursorPos.col - 1);
		}
		if (key === "ArrowRight" || key === "d" || key === "D" || keyCode === 39 || keyCode === 68) {
			state.cursorPos.col = Math.min(7, state.cursorPos.col + 1);
		}

		// Select/Move
		if (key === " " || keyCode === 32 || key === "Enter" || keyCode === 13) {
			const { row, col } = state.cursorPos;
			const piece = state.board[row][col];

			if (state.selectedPos) {
				// Try to move
				const isValidMove = state.validMoves.some(m => m.row === row && m.col === col);

				if (isValidMove) {
					// Execute move
					const from = state.selectedPos;
					const to = { row, col };
					const captured = state.board[to.row][to.col];

					const { newBoard, newEnPassant } = makeMove(state.board, from, to, state.enPassantTarget);
					state.board = newBoard;
					state.enPassantTarget = newEnPassant;

					// Record move
					const movingPiece = state.board[to.row][to.col];
					const pieceSymbol = movingPiece && movingPiece.type !== "pawn"
						? movingPiece.type.charAt(0).toUpperCase()
						: "";
					const captureSymbol = captured ? "x" : "";
					state.moveHistory.push(`${pieceSymbol}${captureSymbol}${posToNotation(to)}`);

					state.lastMove = {
						from,
						to,
						piece: movingPiece!,
						captured: captured || undefined,
					};

					// Play sound
					if (captured) {
						playCaptureSound();
					} else {
						playMoveSound();
					}

					// Switch turns
					state.currentTurn = "black";
					state.selectedPos = null;
					state.validMoves = [];

					// Check game state
					state.isCheck = isInCheck(state.board, state.currentTurn);
					if (state.isCheck) {
						playCheckSound();
					}

					if (isCheckmate(state.board, state.currentTurn, state.enPassantTarget)) {
						state.isCheckmate = true;
						state.gameOver = true;
						state.winner = state.playerColor;
						playCheckmateSound();
					} else if (isStalemate(state.board, state.currentTurn, state.enPassantTarget)) {
						state.isStalemate = true;
						state.gameOver = true;
						state.winner = "draw";
					}
				} else if (piece && piece.color === state.playerColor) {
					// Select different piece
					state.selectedPos = { row, col };
					state.validMoves = getLegalMoves(state.board, state.selectedPos, state.enPassantTarget);
				} else {
					// Deselect
					state.selectedPos = null;
					state.validMoves = [];
				}
			} else {
				// Select piece
				if (piece && piece.color === state.playerColor) {
					state.selectedPos = { row, col };
					state.validMoves = getLegalMoves(state.board, state.selectedPos, state.enPassantTarget);
				}
			}
		}

		// Escape to deselect
		if (key === "Escape" || keyCode === 27) {
			state.selectedPos = null;
			state.validMoves = [];
		}
	};

	ctx.terminal.setKeyHandler(keyHandler);
	ctx.terminal.clear();

	let isFirstFrame = true;

	while (state.running) {
		// AI turn
		if (!state.paused && !state.gameOver && state.currentTurn !== state.playerColor) {
			state.thinking = true;
			renderChess(ctx, state, isFirstFrame);
			isFirstFrame = false;

			// Give a small delay so the "thinking" message shows
			await sleep(100);

			const aiMove = getBestMove(state.board, "black", state.enPassantTarget, 3);

			if (aiMove) {
				const captured = state.board[aiMove.to.row][aiMove.to.col];
				const { newBoard, newEnPassant } = makeMove(state.board, aiMove.from, aiMove.to, state.enPassantTarget);
				state.board = newBoard;
				state.enPassantTarget = newEnPassant;

				const movingPiece = state.board[aiMove.to.row][aiMove.to.col];
				const pieceSymbol = movingPiece && movingPiece.type !== "pawn"
					? movingPiece.type.charAt(0).toUpperCase()
					: "";
				const captureSymbol = captured ? "x" : "";
				state.moveHistory.push(`${pieceSymbol}${captureSymbol}${posToNotation(aiMove.to)}`);

				state.lastMove = {
					from: aiMove.from,
					to: aiMove.to,
					piece: movingPiece!,
					captured: captured || undefined,
				};

				if (captured) {
					playCaptureSound();
				} else {
					playMoveSound();
				}

				state.currentTurn = "white";

				state.isCheck = isInCheck(state.board, state.currentTurn);
				if (state.isCheck) {
					playCheckSound();
				}

				if (isCheckmate(state.board, state.currentTurn, state.enPassantTarget)) {
					state.isCheckmate = true;
					state.gameOver = true;
					state.winner = "black";
					playLoseSound();
				} else if (isStalemate(state.board, state.currentTurn, state.enPassantTarget)) {
					state.isStalemate = true;
					state.gameOver = true;
					state.winner = "draw";
				}
			}

			state.thinking = false;
		}

		renderChess(ctx, state, isFirstFrame);
		isFirstFrame = false;

		await sleep(50);
	}

	ctx.terminal.clearKeyHandler();
	// Stop chess background music
	stopChessMusic();
	if (ctx.terminal.showCursor) {
		ctx.terminal.showCursor();
	}
	ctx.terminal.clear();
	ctx.terminal.writeln("Thanks for playing Chess!");
	ctx.terminal.writeln("");
}
