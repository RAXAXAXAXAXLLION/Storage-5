require("http").createServer((req,res)=>{
res.write("Hello world!")
res.end()
}).listen("80")
