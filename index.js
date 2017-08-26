require("socket.io").listen(
require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script>alert("Mhuajajajaj!!!")</script>')
res.end()
}).listen(process.env.PORT || 3000)
).on("connection",(window)=>{

})
