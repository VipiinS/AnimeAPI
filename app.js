require('dotenv')
require('express-async-errors')
const express = require('express')
const app = express();

const animeRouter = require('./routes/anime')

//middlewares
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>HELLO</h1><a href="/api/animes">Anime</a>')
})

// app.get('/api/animes',(req,res)=>{
//     res.send("hello")
// })

app.use('/api/anime',animeRouter);


const port = process.env.PORT || 5000

const start = async () =>{
    try {
        app.listen(port,()=>{console.log(`app is listening on port ${port}`)})
    } catch (error) {
        console.log(error);
    }
}
start();

