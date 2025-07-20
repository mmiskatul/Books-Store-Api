const mongoose=require('mongoose');

const ConnectToDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://masabimiskat:masabimiskat@cluster0.cfd7shd.mongodb.net/');
        console.log('MongoDB is connected Successfully');
    } catch (error) {
        console.log('MongoDB connection failed',error);
        process.exit(1);
    }
}

module.exports =ConnectToDB;