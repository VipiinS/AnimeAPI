require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const animeRouter = require('./routes/anime')

//middlewares
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>HELLO</h1><a href="/api/animes">Anime</a>')
})

app.use('/api/anime',animeRouter);

//error routes
// app.use(errorHandlerMiddleware)
// app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };

start();

