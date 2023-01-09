require('dotenv')

const express = require('express')
const app = express();

//middleware
app.use(express.json())

app.get('/',(req,res)=>{
})

const port = process.env.PORT || 5000

const start = async () =>{
    try {
        app.listen(port,()=>{console.log(`app is listening on port ${port}`)})
    } catch (error) {
        console.log(error);
    }
}
start();

