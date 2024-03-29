const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow} = electron;
let mainwindow;

app.on('ready', function () {
    mainwindow = new BrowserWindow({});
    mainwindow.$ = mainwindow.jQuery = require('jquery');
    mainwindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
});