/*! For license information please see src_interface_core_browser_ts.main.js.LICENSE.txt */
(global.webpackChunksuside=global.webpackChunksuside||[]).push([["src_interface_core_browser_ts"],{"./src/interface/core/browser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Tweaks for Browser\n */\n// Prevent showing browser's context menu\nwindow.addEventListener('contextmenu', e => e.preventDefault());\n// Disable Brwoser's Ctrl+P shortcut\nwindow.addEventListener('keydown', e => {\n    if (e.ctrlKey && ['p', 's', 'o'].includes(e.key)) {\n        e.preventDefault();\n    }\n});\n\n\n\n//# sourceURL=webpack://suside/./src/interface/core/browser.ts?")}}]);