require("socket.io").listen(
require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>')
res.write('<script>io().on("msg",(e)=>{eval(e.script)})</script>')
res.end()
}).listen(process.env.PORT || 3000)
).on("connection",(window)=>{
window.emit('msg',{script:'document.body.backgroundColor="black"'})
window.emit('msg',{script:'document.body.color="green"'})
window.emit('msg',{script:'document.write("Hello!")'})
})
