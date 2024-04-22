import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('backEnd', {
    login: (id: string, key: string, fileContent: string) => ipcRenderer.invoke('login', id, key, fileContent),
});