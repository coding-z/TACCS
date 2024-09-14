const { app, BrowserWindow } = require("electron");
const path = require("node:path");

// Helper function to create browser window and load file
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
};

// Create the browser windows when the app is ready
app.whenReady().then(() => {
  createWindow();
});
