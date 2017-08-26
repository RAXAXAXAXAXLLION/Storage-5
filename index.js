require("http").createServer((req,res)=>{
res.write("Hello world!")
res.end()
}).listen(process.env.PORT || 3000)
