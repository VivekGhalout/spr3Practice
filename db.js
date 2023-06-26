const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://vivekghalout:vivek1234@cluster0.h8crpua.mongodb.net/?retryWrites=true&w=majority');

module.exports={connection};