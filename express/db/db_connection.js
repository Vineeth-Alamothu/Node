const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://vineethalamothu:jVj1Jtrj9cxEZejK@cluster0.ptn2kbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("db connected successfully");
    }
    catch(err){
        console.log(err, "db connection failed");
    }
}

module.exports = connectDB; 