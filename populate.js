require('dotenv').config()

const connectDB = require('./db/connect')
const Anime = require('./models/anime')

const jsonAnime = require('./file.json')

console.log("hi")
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("connection sucess")
        await Anime.deleteMany();
        await Anime.create(jsonAnime);
        console.log("upload sucess")
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();