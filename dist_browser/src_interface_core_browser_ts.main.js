/*! For license information please see src_interface_core_browser_ts.main.js.LICENSE.txt */
;(self.webpackChunksuside = self.webpackChunksuside || []).push([
	['src_interface_core_browser_ts'],
	{
		'./src/interface/core/browser.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			eval(
				"__webpack_require__.r(__webpack_exports__);\n/*\r\n * Tweaks for Browser\r\n */\r\n// Prevent showing browser's context menu\r\nwindow.addEventListener('contextmenu', e => e.preventDefault());\r\n// Disable Brwoser's Ctrl+P shortcut\r\nwindow.addEventListener('keydown', e => {\r\n    if (e.ctrlKey && ['p', 's', 'o'].includes(e.key)) {\r\n        e.preventDefault();\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://suside/./src/interface/core/browser.ts?",
			)
		},
	},
])
