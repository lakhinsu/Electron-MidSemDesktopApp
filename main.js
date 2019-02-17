const electron=require('electron');
const url=require('url');
const path=require('path');
const {app,BrowserWindow}=electron;
app.on('ready',function(){
    mainwindow = new BrowserWindow({
        fullscreenable:true,
        hasShadow:true,
        transparent:true,
    });
    mainwindow.setMenu(null);
    mainwindow.loadURL(`file://${__dirname}/mainscreen.html`);
    mainwindow.setResizable(false);
}
);