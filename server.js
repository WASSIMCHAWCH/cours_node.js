const http = require ('http')

const server = http.createServer((req,res)=>{
    if (req.url=='/home'){
        res.statusCode=200
        res.write('welcome to home page')
    }else if (req.url=='/about'){
        res.statusCode=200
        res.write('welcome to about page')
    }else {
        res.statusCode=404
        res.write('not found')
    }
res.end()
})

server.listen(5000,()=>{console.log("server running")})
