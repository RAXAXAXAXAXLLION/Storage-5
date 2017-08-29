obj={}
require("socket.io").listen(
require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>')
res.write('<script>io().on("msg",(e)=>{eval(e.script)})</script>')
res.end()
}).listen(process.env.PORT || 3000)
).on("connection",(w)=>{
w.i=Math.floor(Math.random()*Math.pow(10,10))
obj[w.i]={x:32,y:32}
w.emit('msg',{script:'k=[]'})
w.emit('msg',{script:'document.body.style.margin="0"'})
w.emit('msg',{script:'onkeyup=onkeydown=(e)=>{k[e.keyCode]=e.type=="keydown"}'})
w.emit('msg',{script:'setInterval(()=>{for(i=0;i<400;i++){if(k[i]){io().emit(i)}}},1)'})
w.emit('msg',{script:'c=document.createElement("canvas")'})
w.emit('msg',{script:'document.body.appendChild(c)'})
w.emit('msg',{script:'ctx=c.getContext("2d")'})
w.on('37',()=>{obj[w.i].x-=1})
w.on('38',()=>{obj[w.i].y-=1})
w.on('39',()=>{obj[w.i].x+=1})
w.on('40',()=>{obj[w.i].y+=1})
setInterval(()=>{
w.emit('msg',{script:'c.width=innerWidth'})
w.emit('msg',{script:'c.height=innerHeight'})
for(i in obj){
w.emit('msg',{script:'ctx.fillRect('+obj[i].x-obj[w.i].x+'-c.width-16,'+obj[i].y-obj[w.i].y+'-c.height-16,32,32)'})
}},1)
})
