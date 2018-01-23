const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

//global reference of the window object
let win

function createWindow() {
    //Create browser window
    win = new BrowserWindow({width:800,height:600})
    //load the index.html of the app
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //Open the DevTools
    // win.webContents.openDevTools()

    //Emitted when the window is closed.
    win.on('closed', () => {
        //dereference the window object.
        win = null
    })
}

//method called when electron finished initialization is
//to create browser windows.
app.on('ready', createWindow)


//Quit when all windows are closed.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
})

// In this file, can include the rest of app's specific main process
// code. Can also put them in separate files and require them here.