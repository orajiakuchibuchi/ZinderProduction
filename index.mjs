import dotenv from "dotenv";
import express from "express";
import request from "request";
import compression from "compression";
import bot from "./app/service/telegram.service.mjs";
dotenv.config();
const domainUrl = process.env.DOMAINURL_DEV;
const DOMAINURL_DEV_PORT = process.env.DOMAINURL_DEV_PORT;
const DOMAINURL_DEV_PORT_2 = process.env.DOMAINURL_DEV_PORT_2;
const domainUrlprod = process.env.DOMAINURL;
const TELEGRAM_MASTERGROUPCHATID = process.env.TELEGRAM_MASTERGROUPCHATID;
const PORT = process.env.LOAD_BALANCERF_PORT || process.env.LOAD_BALANCERF_NODE_ENV || '7001';
const lbServer = express();
const servers = [domainUrl+':'+DOMAINURL_DEV_PORT,domainUrl+':'+DOMAINURL_DEV_PORT_2];
const serverConnections = [0,0,0];
let current = 0;
const handler = (req, res) => {
  const server = servers[current];
  current >= servers.length-1 ? current=0 : current++;
  serverConnections[current]++;
  let mes = `New Main App Request\n[URL: ${req.url}]\n[Server : ${server+req.url}]`;
  let now = new Date(Date.now())
  mes+=`At: ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}`;
  bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
  return req.pipe(request({url: server+req.url})).pipe(res);
}
lbServer.use((req, res)=>handler(req,res));
lbServer.set('port', PORT);
// Compression middleware
lbServer.use(compression());
/* other middleware */
// app.listen wont work as it creates a new app!!
lbServer.listen(lbServer.get('port'), function() {
  let mes = `\t========\t\nMain App Running\n[Port: ${lbServer.get(
    "port"
  )}]\n[Dev URL:${domainUrl}:${lbServer.get("port")}]
  \n[Prod URL:${domainUrlprod}]`;
  let now = new Date(Date.now())
  mes+=`\n\n\nSent At: ${now.toLocaleTimeString()}, ${now.toLocaleDateString()}`;

  bot.sendMessage(TELEGRAM_MASTERGROUPCHATID, mes);
    console.log(mes);
});
