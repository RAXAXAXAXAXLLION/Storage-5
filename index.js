net=require("express")()
net.get('/',(req,res)=>{
res.send("Hello world!")
})
net.listen(process.env.port||3000)
