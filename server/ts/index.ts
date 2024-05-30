import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { login } from './utils/login.js';

import Cipher from './tools/cipher/main.js';
import { hexToText, textToHex } from './utils/convert.js';
import { normalizeData } from './utils/data.js';

async function test() {
    const ciphered = await Cipher.encrypt(textToHex(normalizeData("1(X,,X)2(X,,X)3(X,,X)4!<0~0>!5(X,,X)6(X,,X)7(X,,X)8")), "omgThisIsSoCoolKeyomgThisIsSoCoolKey", "nameomega");
    const deciphered = await Cipher.decrypt(ciphered, "omgThisIsSoCoolKeyomgThisIsSoCoolKey", "nameomega");
    console.log(ciphered, hexToText(ciphered));
    console.log(deciphered, hexToText(deciphered));
}
test();

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
            preload: path.join(__dirname, './../js/preload/preload.js')
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname + './../../../../client/html/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

app.on('ready', () => {
    createWindow();

    ipcMain.handle('login', (_, id: string, key: string, fileContent: string) => login(id, key, fileContent));
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