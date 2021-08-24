import { ipcMain, BrowserWindow } from 'electron'
import * as isDev from 'electron-is-dev'
import * as url from 'url'
import * as path from 'path'
import WindowHandler from './window_handler'
import MenusHandler from './menus_handler'

const debugWindows = []

interface CustomBrowserWindow extends BrowserWindow {
	sessionID?: String
}

/*
 * Creates a debug window with an unique ID
 */
ipcMain.handle('create-debug-window', async (_, sessionID) => {
	return new Promise(res => {
		const window: CustomBrowserWindow = new BrowserWindow({
			webPreferences: {
				nativeWindowOpen: true,
				nodeIntegrationInWorker: true,
				nodeIntegration: true,
				webSecurity: false,
				enableRemoteModule: false,
				additionalArguments: ['--mode', 'debug', '--windowID', 'sessionID'],
				preload: path.join(__dirname, 'preload.js'),
			},
			frame: process.platform !== 'win32',
			minHeight: 320,
			minWidth: 320,
			width: 600,
			height: 600,
			backgroundColor: '#191919',
			title: 'Suside',
			show: true,
		})

		window.sessionID = sessionID

		if (isDev) {
			window.loadURL('http://localhost:9000')
		} else {
			window.loadURL(
				url.format({
					pathname: path.join(process.resourcesPath, 'app.asar', 'dist_ui', 'index.html'),
					protocol: 'file:',
					slashes: true,
				}),
			)
		}

		MenusHandler(window)

		debugWindows.push(window)
	})
})

/*
 * Closes a debug window by it's ID
 */
ipcMain.handle('close-debug-window', async (_, sessionID) => {
	debugWindows.find(window => {
		if (window.sessionID === sessionID) {
			window.close()
		}
	})
})

/*
 * Reloads a debug window by it's ID
 */
ipcMain.handle('reload-debug-window', async (_, sessionID) => {
	debugWindows.find(window => {
		if (window.sessionID === sessionID) {
			window.reload()
		}
	})
})
