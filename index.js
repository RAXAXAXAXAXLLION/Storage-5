require("http").createServer((i,o)=>{o.write("Hello world!");o.end()}).listen("80")
