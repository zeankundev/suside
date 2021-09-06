/*! For license information please see dist_browser_plugins_remote-plugin_package_json.main.js.LICENSE.txt */
;(global.webpackChunksuside = global.webpackChunksuside || []).push([
	['dist_browser_plugins_remote-plugin_package_json'],
	{
		'./dist_browser_plugins/remote-plugin/package.json': module => {
			'use strict'
			eval(
				'module.exports = JSON.parse("{\\"name\\":\\"Remote\\",\\"id\\":\\"remote-plugin\\",\\"description\\":\\"Remote Live Coding\\",\\"author\\":\\"Marc Espín Sanz\\",\\"version\\":\\"0.2.1\\",\\"main\\":\\"index.js\\",\\"mainSrc\\":\\"index.js\\",\\"mainDev\\":\\"dist/index.js\\",\\"scripts\\":{\\"build\\":\\"gvsdk -p . -t plugin -m release -pm web\\",\\"watch\\":\\"gvsdk -p . -t plugin -m dev -pm web\\"},\\"dependencies\\":{\\"dayjs\\":\\"^1.8.36\\",\\"random-color-rgb\\":\\"^1.1.1\\",\\"shortid\\":\\"^2.2.15\\",\\"simple-encryptor\\":\\"^4.0.0\\",\\"strong-cryptor\\":\\"^2.2.0\\"},\\"devDependencies\\":{\\"@gveditor/sdk\\":\\"^0.5.4\\"}}");\n\n//# sourceURL=webpack://suside/./dist_browser_plugins/remote-plugin/package.json?',
			)
		},
	},
])
