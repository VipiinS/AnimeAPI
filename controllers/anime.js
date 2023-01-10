const getAllProductsStatic = async(req,res)=>{
    res.status(200).send("static")
}
const getAllProducts = async(req,res)=>{
    res.status(200).send("anime")
}







module.exports = {
    getAllProducts,
    getAllProductsStatic
}