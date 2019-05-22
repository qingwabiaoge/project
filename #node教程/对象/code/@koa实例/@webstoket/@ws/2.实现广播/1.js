const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3002 });


wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // Broadcast to everyone else.
        console.log(`[SERVER] Received: ${message}`);
        wss.clients.forEach(function each(client) {
            //不广播自己且客户端打开的
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});