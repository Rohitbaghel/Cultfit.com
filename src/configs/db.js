const mongoose=require('mongoose');

const MONGODB_USER=process.env.MONGODB_USER_ID
const MONGODB_Pass=process.env.MONGODB_PASS
const MONGODB_Cluster = process.env.MONGODB_CLUSTOR
const connect =()=>{
    return mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_Pass}@cluster0.${MONGODB_Cluster}.mongodb.net/test`);
}
module.exports =connect;