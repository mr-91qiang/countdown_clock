const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        x: 100,
        y: 100,
        // transparent: true,
        frame:false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })
    // win.setIgnoreMouseEvents(true)
    ipcMain.handle('ping', () => 'pong'),
    win.loadFile('index.html')
}

// 准备好时打开窗口
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


// 获取可执行文件位置
const ex=process.execPath;

// 定义事件，渲染进程中直接使用

// 开启 开机自启动
ipcMain.on('openAutoStart',()=>{
    console.log('updateExe',ex)
        app.setLoginItemSettings({
            openAtLogin: true,
            path: ex,
            args: []
        });
});
