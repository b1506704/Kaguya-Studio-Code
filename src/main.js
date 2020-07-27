const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { ipcMain } = require ('electron');
const BrowserWindow = electron.BrowserWindow;
require('electron-reload');
let loginWindow;
let dashboardWindow;
function createWindow() {
  loginWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    fullscreenable: false,
    fullscreen: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }

  });
  
  loginWindow.once('ready-to-show',()=>{    
    loginWindow.show();
  })
  loginWindow.loadURL(
    isDev ?
    'http://localhost:3000' :
    
    `file://${path.join(__dirname, '../build/index.html')}`
  );
  // loginWindow.loadURL(url.format({
  //   pathname: path.join(__dirname,'./renderers/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  //   }));
  loginWindow.on('closed', () => {
      loginWindow = null;
  });
  dashboardWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    fullscreenable: true,
    fullscreen: false,
    transparent: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  dashboardWindow.maximize();
  dashboardWindow.once('ready-to-show',()=>{
    dashboardWindow.show();
  })
  dashboardWindow.loadURL(url.format({
    pathname: path.join(__dirname,'./renderers/dashboard.html'),
    protocol: 'file:',
    slashes: true
    })
  );
  ipcMain.on('request-user-info',(event,arg)=>{
    dashboardWindow.webContents.send('get-user-data',arg);
  });
  dashboardWindow.on('closed', () => {
    dashboardWindow = null;
  });
  
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (loginWindow === null) {
    createWindow();
  }
});

