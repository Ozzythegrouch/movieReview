const express = require('express');
const path = require('path')

const server = express();

server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'))})
    
server.listen(8080, () => {
    console.log('The server is running at PORT 8080')
})