import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// following the quick start guide here: https://www.electronjs.org/docs/latest/tutorial/quick-start

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(`${__dirname}/../public/index.html`);
};

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
