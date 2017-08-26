obj={}
require("socket.io").listen(
require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>')
res.write('<script>io().on("msg",(e)=>{eval(e.script)})</script>')
res.end()
}).listen(process.env.PORT || 3000)
).on("connection",(window)=>{
window.id=Math.floor(Math.random()*Math.pow(10,10))
obj[window.id]={x:32,y:32}
window.emit('msg',{script:'k=[]'})
window.emit('msg',{script:'document.body.style.margin="0"'})
window.emit('msg',{script:'onkeyup=onkeydown=(e)=>{k[e.keyCode]=e.type="keydown"}'})
window.emit('msg',{script:'setInterval(()=>{for(i=0;i<400;i++){if(k[i]){io().emit(i)}}},1)'})
window.emit('msg',{script:'c=document.createElement("canvas")'})
window.emit('msg',{script:'document.body.appendChild(c)'})
window.emit('msg',{script:'ctx=c.getContext("2d")'})
window.on('37',()=>{obj[window.id].x-=1})
window.on('38',()=>{obj[window.id].y-=1})
window.on('39',()=>{obj[window.id].x+=1})
window.on('40',()=>{obj[window.id].y+=1})
setInterval(()=>{
window.emit('msg',{script:'console.clear()'})
for(i in obj){
window.emit('msg',{script:'console.log("'+obj[i].x+'")'})
}},500)
})
