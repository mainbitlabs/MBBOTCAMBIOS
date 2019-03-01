//Instalación: npm install
//El package.json contiene todo lo necesario. 
//Ejecutar: npm start
const { app, BrowserWindow } = require('electron')

// Mantenga una referencia global del objeto ventana, si no lo hace, la ventana
// se cerrará automáticamente cuando el objeto de JavaScript se obtenga.
let win

function createWindow() {
    // Crea la ventana del navegador.
    win = new BrowserWindow({ width: 800, height: 600 })

    // y cargar el index.html de la aplicación.
    win.loadFile('index.html')

    // Abre las herramientas de desarrollo.
    win.webContents.openDevTools()

    // Se emite cuando la ventana está cerrada.
    win.on('closed', () => {
        // Normalmente almacenarías ventanas en un array si tu aplicación admitera múltiples ventanas,
        // en este caso deberías eliminar el elemento correspondiente.
        win = null
    })
}

// Este método será llamado cuando Electron haya terminado
// de iniciar y este listo para crear ventanas de navegador
// Algunas API solo se pueden usar después de este evento.
app.on('ready', createWindow)

// Salir cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
    // En macOS es común que en sus aplicaciones y su barra de menú
    // permanezcan activos hasta que el usuario la cierre explícitamente con Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la aplicación cuando
    // se da clic en el icono del dock y no hay otras ventanas abiertas.
    if (win === null) {
        createWindow()
    }
})

// En este archivo puede incluir el resto del proceso principal de su aplicación.
// También puede ponerlos en archivos separados y solicitarlos aquí.