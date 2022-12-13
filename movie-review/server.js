const express = require('express');
const path = require('path')
const server = express();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const authRouter = require("./server/routers/authRouter");
const { Server } = require('http');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

require('dotenv').config()

//middleware
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.use(cors({
    origin: "http://localhost:3000",
    credentials: "true"
}))

server.use(express.json())

server.use("auth",authRouter)

server.listen(8080, () => {
    console.log('The server is running at PORT 8080')
})

// Routes
server.use('/api', require('./server/routers/index'))

// register and login routes

server.use("/auth",require("./server/routers/usersAuth"))

// dashboard route

server.use("/dashboard", require("./server/routers/dashboard"))

server.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'))
})

server.get('/movie/:page', async(req,res) => {
    const {page} = req.params
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=62956ed23993c886e904e9b2d0a63fb4&page=${page}`,{
        method: 'GET',
        headers: {
            'language': 'en-us',
            page
        }
    });  
    const data = await response.json();
    res.json(data.results)
})

server.get('/movieUpcoming', async(req,res) => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=62956ed23993c886e904e9b2d0a63fb4&language=en-US&page=1',{
        method: 'GET',
        headers: {
            'language': 'en-us',
        }
    });  
    const dataUpcomingMovies= await response.json();
    res.json(dataUpcomingMovies.results)
})

server.get('/movieDailyPopular', async(req,res) => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=62956ed23993c886e904e9b2d0a63fb4&language=en-US&page=1',{
        method: 'GET',
        headers: {
            'language': 'en-us',
        }
    });  
    const dataDailyPopular= await response.json();
    res.json(dataDailyPopular.results)
})


server.get('/tvShowsPopular', async(req,res) => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=62956ed23993c886e904e9b2d0a63fb4&language=en-US&page=1', {
        method: 'GET',
        headers: {

        }
    })
    const dataPopTvShows = await response.json();
    res.json(dataPopTvShows.results)
})

server.get('/tvShowsTopRated', async(req,res) => {
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=62956ed23993c886e904e9b2d0a63fb4&language=en-US&page=1', {
        meethod: 'GET',
        headers: {

        }
    }) 
    const dataTopRated = await response.json();
    res.json(dataTopRated.results)
})

server.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find((user) => user.username == username && user.password == password)
    if(user) {
        // generate the json web token
        const token = jwt.sign({username: user.username}, 'SECRETKEY')
        res.json({success: true, token: token})
    } else {
        // response with not authenticated
        res.json({success: false, message:'Not Authenticated'})
    }
})