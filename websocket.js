const webSocketServer = require("ws");

const wss = new webSocketServer.Server({port: 8081})



wss.on("connection", ws => {
    console.log("New Client Connected: ")
    
    ws.on("message", data => {
        ws.broadcast = function broadcast(msg) {
            console.log(msg);
            ws.clients.forEach(function each(client) {
                client.send(msg);
             });
         };
        console.log(data.toString())
        ws.broadcast = function broadcast(msg) {
            console.log(msg);
            ws.clients.forEach(function each(client) {
                client.send(msg);
             });
         };
        wss.broadcast(`A chatroom user has said ${data.toString()}`)
    });
    

    wss.on("close", () => {
        console.log("the client has connected");
        wss.broadcast = function broadcast(msg) {
            console.log(msg);
            wss.clients.forEach(function each(client) {
                client.send(msg);
             });
         };
        wss.broadcast("A new user has connected")
    });

    wss.onerror = function () {
       console.log("Error Occured") 
    }
})



console.log("Websocket server running on port 8081")