const getAllProductsStatic = async(req,res)=>{
    res.status(200).send("static")
}
const getAllProducts = async(req,res)=>{
    res.status(200).send("products")
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}