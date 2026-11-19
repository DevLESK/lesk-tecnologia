"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = __dirname;
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".ico":"image/x-icon"};
const port = Number(process.env.PORT || 3000);
http.createServer((req,res)=>{
  let url;
  try { url = new URL(req.url, "http://localhost"); } catch { res.writeHead(400).end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root, "." + (pathname === "/" ? "/index.html" : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.stat(file,(err,stat)=>{
    if(err || !stat.isFile()){res.writeHead(404).end("Not found");return;}
    res.setHeader("Content-Type",types[path.extname(file).toLowerCase()] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  });
}).listen(port,"0.0.0.0",()=>console.log("INOVA GLASS listening on "+port));
