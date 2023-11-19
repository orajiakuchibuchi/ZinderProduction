// Doc : https://www.npmjs.com/package/json-server
// Doc 2: https://github.com/passageidentity/example-node/blob/main/02-Login-With-Profile/index.js

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import compression from "compression";
import { Server } from "socket.io";
import fileDirName from "./file-dir-name.mjs";
import crons from "./app/cron/index.mjs";
import bot from "./app/service/telegram.service.mjs";
import { SocketService } from "./app/service/socket.service.mjs";
import { SocketController } from "./app/controller/socket.controller.mjs";
import { TelegramController } from "./app/controller/telegram.controller.mjs";
dotenv.config();
const TELEGRAM_MASTERGROUPCHATID = process.env.TELEGRAM_MASTERGROUPCHATID;
const PORT = process.env.PORT || process.env.NODE_ENV;
const { __dirname } = fileDirName(import.meta);
// where '/dist/admin' is the final built directory
const staticRoot = __dirname + "/public/";
// List of servers
const app = express();
const port = JSON.stringify(parseInt(PORT));
app.set("port", port);
const server = http.createServer(app);
// Compression middleware
app.use(compression());
/* other middleware */

/* place any backend routes you have here */

/* end of backend routes */
app.use(function (req, res, next) {
  //if the request is not html then move along
  var accept = req.accepts("html", "json", "xml");
  if (accept !== "html") {
    return next();
  }

  // if the request has a '.' assume that it's for a file, move along
  var ext = path.extname(req.path);
  if (ext !== "") {
    return next();
  }

  fs.createReadStream(staticRoot + "index.html").pipe(res);
});

app.use(express.static(staticRoot));
export function start_server() {
  // app.listen wont work as it creates a new app!!
  server.listen(app.get("port"), function () {
    let now = new Date(Date.now());
    let mes = `Starting server at ${now.toLocaleTimeString()}, ${now.toLocaleDateString()} port ${app.get("port")}`;
    bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
    mes = `Establishing Socket Server at ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}.`;
    bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
    const io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });
    io.on("connection", (socket) => {
      now = new Date(Date.now());
      mes = `New client connection at ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}.`;
      bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
      const socketcontroller = new SocketController();
      const telegramService = new TelegramController();
      telegramService._listenMessage();

      socketcontroller.init(socket);
      socket.on("new_message", () => socketcontroller.newMessage(socket));
      socket.on("update-on-connect-" + socket.id, (data) =>
        socketcontroller.updateOnConnect(socket, data)
      );
      socket.on("notify-browser-captured-" + socket.id, (data) =>
        socketcontroller.connectionBrowserCaptured(socket, data)
      );
    });
  });
}
