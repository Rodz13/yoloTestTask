global.window.matchMedia = (query) => ({
	matches: false,
	media: query,
	onchange: null,
	addListener: () => {}, // deprecated
	removeListener: () => {}, // deprecated
	addEventListener: () => {},
	removeEventListener: () => {},
	dispatchEvent: () => {},
});
