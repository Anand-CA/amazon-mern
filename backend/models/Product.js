const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:String,
    price:Number,
    rating:Number,
    img:String
})

module.exports = mongoose.model('products',ProductSchema)