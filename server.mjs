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
dotenv.config();
const SEC_PORT = "7001";
const NODE_ENV_PORT = process.env.PORT || process.env.NODE_ENV;
const domainUrl = process.env.DOMAINURL_DEV;
const TELEGRAM_MASTERGROUPCHATID = process.env.TELEGRAM_MASTERGROUPCHATID;
const TOTAL_BATCH_SERVER = process.env.TOTAL_BATCH_SERVER || 10;
const PORT = NODE_ENV_PORT || SEC_PORT;
const { __dirname } = fileDirName(import.meta);

// where '/dist/admin' is the final built directory
const staticRoot = __dirname + "/public/";
// List of servers
const app = express();
// const app1 = express();

const server = http.createServer(app);
// const server1 = http.createServer(app1);

const port = JSON.stringify(parseInt(PORT));

// Compression middleware
app.use(compression());
// app1.use(compression());
app.set("port", port);
// app1.set("port", parseInt(port) + 1);
/* other middleware */

/* place any backend routes you have here */

/* end of backend routes */
app.use(function (req, res, next) {
  let mes = `New Main App Request to the Domain: ${domainUrl} on Server PORT : ${domainUrl+req.url}`;
  let now = new Date(Date.now())
  mes+=`\nAt: ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}`;
  bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
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
let serverDeployment = [];
// app.listen wont work as it creates a new app!!
server.listen(app.get("port"), function () {
  let mes = `\t========\t\Available Server Running\n[Domain: ${domainUrl}] on [Server PORT: ${app.get(
    "port"
  )}]\n[URL:${domainUrl}:${app.get("port")}]`;
  let now = new Date(Date.now())
  mes+=`\n\n\nSent At: ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}`;

  serverDeployment.unshift(mes);
  bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
  console.log(mes);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });
  io.on("connection", (socket) => {
    const socketcontroller = new SocketController();
    socketcontroller.init(socket);
    socket.on("fetchContactRequest", () =>
      socketcontroller.getContacts(socket)
    );
    socket.on("getZinderSupportBot", () =>
      socketcontroller.getContacts(socket)
    );
    socket.on("new_message", () => socketcontroller.newMessage(socket));
  });
});

