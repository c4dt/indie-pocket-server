import {Server} from "ws";

const wss = new Server({ port: 5678 });

console.log("started server on port", 5678);

wss.on('connection', function connection(ws) {
    console.log("connected");
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

wss.on("error", (err)=>{
    console.log("error:", err);
});
