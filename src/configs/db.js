const mongoose=require('mongoose');

const connect =()=>{
    return mongoose.connect('mongodb+srv://Manthan369:CCV0KBmkvKjSKPZI@cluster0.2dlpirc.mongodb.net/?retryWrites=true&w=majority');
}

module.exports =connect;