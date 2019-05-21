const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3001
});




wss.on('connection', function (ws) {
    console.log(`监测到服务器连接`);
    ws.on('message', function (message) {
        console.log(`服务器收到: ${message}`);

        ws.send(`服务器说:hello已收你的信息: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });

    })


});