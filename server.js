const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Estado inicial del marcador
let marcador = {
    jugador1: 'Jugador 1',
    jugador2: 'Jugador 2',
    puntuacion1: 0,
    puntuacion2: 0,
    fase: 'Cuartos de final',
    formato: 'Best of 3'
};

// Cuando un cliente se conecta
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    
    // Enviar estado actual al nuevo cliente
    socket.emit('estadoInicial', marcador);
    
    // Escuchar actualizaciones desde el controlador
    socket.on('actualizar', (datos) => {
        marcador = { ...marcador, ...datos };
        // Reenviar a TODOS los clientes (incluido el overlay)
        io.emit('estadoActualizado', marcador);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`ScoreGrid corriendo en http://localhost:${PORT}`);
    console.log(`Overlay: http://localhost:${PORT}/overlay.html`);
    console.log(`Panel de control: http://localhost:${PORT}/controller.html`);
});