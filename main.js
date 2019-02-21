const electron=require('electron');
const url=require('url');
const path=require('path');
const {app,BrowserWindow}=electron;
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app.asar', 'Papers'));
module.paths.push(path.resolve('Papers'));
module.paths.push(path.resolve('../Papers'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app', 'Papers'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app.asar', 'Papers'))
app.on('ready',function(){
    mainwindow = new BrowserWindow({
        hasShadow:true,
        transparent:true,
    });
    mainwindow.setMenu(null);
    mainwindow.loadURL(`file://${__dirname}/mainscreen.html`);
    mainwindow.setResizable(false);

 
    /*win = new BrowserWindow({
        webPreferences: {
          plugins: true,
        }
      });
    win.loadURL(`file://${__dirname}/pdf.html`);*/
}
);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

