import {Server} from "ws";

const wss = new Server({ port: 5555 });

console.log("started server on port", 5555);

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});
