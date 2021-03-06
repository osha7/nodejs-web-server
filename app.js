// https://www.youtube.com/watch?v=VShtPwEkDD0&ab_channel=WebDevSimplified

const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    // res.write('Hello Node')
    // res.end()
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log('Something Went Wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

//  in terminal: node app.js 