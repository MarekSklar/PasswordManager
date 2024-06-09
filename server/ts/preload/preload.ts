import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('backEnd', {
    login: (id: string, key: string, fileContent: string) => ipcRenderer.invoke('login', id, key, fileContent),
    saveData: (id: string, key: string, data: string) => ipcRenderer.invoke('saveData', id, key, data),
});