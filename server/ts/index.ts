import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { login, saveData } from './preload/main.js';
import { hexToText, textToHex } from './utils/convert.js';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.  

if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1250,
        height: 770,
        webPreferences: {
            preload: path.join(__dirname, './preload/preload.js')
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, './../../../../client/html/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

app.on('ready', () => {
    createWindow();

    ipcMain.handle('login', (_, id: string, key: string, fileContent: string) => login(id, key, fileContent));
    ipcMain.handle('saveData', (_, id: string, key: string, data: string) => saveData(id, key, data));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    // Clear in-memory storage or session storage
    // Your logic to clear data goes here
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});