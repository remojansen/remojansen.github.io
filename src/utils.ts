/**
 * App-specific utility functions
 */

/**
 * Cached mobile device detection result (only checked on initial load)
 */
let isMobileDeviceCached: boolean | null = null;

/**
 * Detect if the user is on a mobile/tablet device.
 * Checks for iOS/Android user agents OR screen width < 1080px.
 * Result is cached on first call (initial load only).
 */
export function isMobileDevice(): boolean {
	if (isMobileDeviceCached === null) {
		const mobileUserAgent =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			);
		const smallScreen = window.innerWidth < 1080;
		isMobileDeviceCached = mobileUserAgent || smallScreen;
	}
	return isMobileDeviceCached;
}
