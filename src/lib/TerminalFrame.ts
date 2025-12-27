/**
 * TerminalFrame - Three.js implementation of the CRT frame
 * Renders the CRT bezel/frame overlay with vignette and shadow effects
 */

import * as THREE from "three";
import {
	terminalFrameFragmentShader,
	terminalFrameVertexShader,
} from "./shaders/terminalFrame";
import { colorToVec4, hexToColor, lint, mixColors } from "./utils";

// Hardcoded defaults from the original QML source
const DEFAULTS = {
	staticFrameColor: "#ffffff",
	backgroundColor: "#000000",
	fontColor: "#0ccc68",
	ambientLight: 0.4,
	screenCurvature: 0.1,
	screenCurvatureSize: 1.0,
	frameMargin: 30,
	windowScaling: 1.0,
};

export class TerminalFrame {
	public mesh: THREE.Mesh;
	private material: THREE.ShaderMaterial;
	private uniforms: {
		screenCurvature: { value: number };
		screenShadowCoeff: { value: number };
		frameShadowCoeff: { value: number };
		frameColor: { value: THREE.Vector4 };
		margin: { value: THREE.Vector2 };
		resolution: { value: THREE.Vector2 };
	};

	constructor(width: number, height: number) {
		const staticFrameColor = hexToColor(DEFAULTS.staticFrameColor);
		const backgroundColor = hexToColor(DEFAULTS.backgroundColor);
		const fontColor = hexToColor(DEFAULTS.fontColor);

		const lightColor = mixColors(fontColor, backgroundColor, 0.2);
		const ambientLight = lint(0.2, 0.8, DEFAULTS.ambientLight);
		const frameColor = mixColors(staticFrameColor, lightColor, ambientLight);

		const screenCurvature =
			DEFAULTS.screenCurvature * DEFAULTS.screenCurvatureSize;

		const screenShadowCoeff = lint(20.0, 10.0, ambientLight);
		const frameShadowCoeff = lint(20.0, 10.0, ambientLight);

		const margin = new THREE.Vector2(
			(DEFAULTS.frameMargin / width) * DEFAULTS.windowScaling,
			(DEFAULTS.frameMargin / height) * DEFAULTS.windowScaling,
		);

		this.uniforms = {
			screenCurvature: { value: screenCurvature },
			screenShadowCoeff: { value: screenShadowCoeff },
			frameShadowCoeff: { value: frameShadowCoeff },
			frameColor: { value: new THREE.Vector4(...colorToVec4(frameColor)) },
			margin: { value: margin },
			resolution: { value: new THREE.Vector2(width, height) },
		};

		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: terminalFrameVertexShader,
			fragmentShader: terminalFrameFragmentShader,
			transparent: true,
			side: THREE.DoubleSide,
			blending: THREE.NormalBlending,
		});

		const geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(geometry, this.material);
	}

	/**
	 * Update the frame size (call on window resize)
	 */
	updateSize(width: number, height: number): void {
		this.uniforms.margin.value.set(
			(DEFAULTS.frameMargin / width) * DEFAULTS.windowScaling,
			(DEFAULTS.frameMargin / height) * DEFAULTS.windowScaling,
		);
		this.uniforms.resolution.value.set(width, height);
	}

	/**
	 * Set the screen curvature amount
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
