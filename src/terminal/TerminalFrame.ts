/**
 * TerminalFrame - Three.js implementation of the CRT frame
 * Ported from TerminalFrame.qml
 */

import * as THREE from "three";
import {
	terminalFrameFragmentShader,
	terminalFrameVertexShader,
} from "../shaders/terminalFrame";
import { colorToVec4, hexToColor, lint, mixColors } from "../utils";

// Hardcoded defaults from the original QML source
// Using "Monochrome Green" theme from ApplicationSettings.qml
const DEFAULTS = {
	// Colors
	staticFrameColor: "#ffffff",
	backgroundColor: "#000000",
	fontColor: "#0ccc68", // Monochrome Green theme

	// Settings
	ambientLight: 0.4, // Range 0-1 (matches TerminalText)
	screenCurvature: 0.1, // Range 0-1 (matches TerminalText)
	screenCurvatureSize: 1.0,
	frameMargin: 30, // pixels - frame border size
	windowScaling: 1.0,
};

export class TerminalFrame {
	public mesh: THREE.Mesh;
	private material: THREE.ShaderMaterial;
	private devicePixelRatio: number;
	private uniforms: {
		screenCurvature: { value: number };
		screenShadowCoeff: { value: number };
		frameShadowCoeff: { value: number };
		frameColor: { value: THREE.Vector4 };
		margin: { value: THREE.Vector2 };
		resolution: { value: THREE.Vector2 };
	};

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.devicePixelRatio = window.devicePixelRatio || 1;

		// Calculate derived values from defaults
		const staticFrameColor = hexToColor(DEFAULTS.staticFrameColor);
		const backgroundColor = hexToColor(DEFAULTS.backgroundColor);
		const fontColor = hexToColor(DEFAULTS.fontColor);

		// _lightColor = mix(_fontColor, _backgroundColor, 0.2)
		const lightColor = mixColors(fontColor, backgroundColor, 0.2);

		// _ambientLight = lint(0.2, 0.8, appSettings.ambientLight)
		const ambientLight = lint(0.2, 0.8, DEFAULTS.ambientLight);

		// frameColor = mix(_staticFrameColor, _lightColor, _ambientLight)
		const frameColor = mixColors(staticFrameColor, lightColor, ambientLight);

		// Screen curvature - MUST match TerminalText.screenCurvature
		const screenCurvature =
			DEFAULTS.screenCurvature * DEFAULTS.screenCurvatureSize;

		// Shadow coefficients
		const screenShadowCoeff = lint(20.0, 10.0, ambientLight);
		const frameShadowCoeff = lint(20.0, 10.0, ambientLight);

		// Margin normalized to screen size
		// QML: margin: Qt.size(appSettings.frameMargin / width * appSettings.windowScaling,
		//                      appSettings.frameMargin / height * appSettings.windowScaling)
		const margin = new THREE.Vector2(
			(DEFAULTS.frameMargin / width) * DEFAULTS.windowScaling,
			(DEFAULTS.frameMargin / height) * DEFAULTS.windowScaling,
		);

		// Setup uniforms
		this.uniforms = {
			screenCurvature: { value: screenCurvature },
			screenShadowCoeff: { value: screenShadowCoeff },
			frameShadowCoeff: { value: frameShadowCoeff },
			frameColor: { value: new THREE.Vector4(...colorToVec4(frameColor)) },
			margin: { value: margin },
			resolution: { value: new THREE.Vector2(width, height) },
		};

		// Create shader material
		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: terminalFrameVertexShader,
			fragmentShader: terminalFrameFragmentShader,
			transparent: true,
			side: THREE.DoubleSide,
			// Blend mode for proper frame overlay
			blending: THREE.NormalBlending,
		});

		// Create a plane geometry that fills the screen
		// Using 2x2 plane with orthographic camera
		const geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(geometry, this.material);
	}

	/**
	 * Update the frame size (call on window resize)
	 */
	updateSize(width: number, height: number): void {
		this.width = width;
		this.height = height;
		// Update device pixel ratio in case it changed (e.g., moving between displays)
		this.devicePixelRatio = window.devicePixelRatio || 1;
		this.uniforms.margin.value.set(
			(DEFAULTS.frameMargin / width) * DEFAULTS.windowScaling,
			(DEFAULTS.frameMargin / height) * DEFAULTS.windowScaling,
		);
		// Update resolution for aspect ratio correction in curvature calculation
		this.uniforms.resolution.value.set(width, height);
	}

	/**
	 * Set the screen curvature amount
	 * @param curvature Value from 0 (flat) to 1 (maximum curvature)
	 */
	setScreenCurvature(curvature: number): void {
		this.uniforms.screenCurvature.value =
			curvature * DEFAULTS.screenCurvatureSize;
	}

	/**
	 * Dispose of resources
	 */
	dispose(): void {
		this.material.dispose();
		(this.mesh.geometry as THREE.BufferGeometry).dispose();
	}
}
