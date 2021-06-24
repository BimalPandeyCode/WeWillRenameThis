import mongoose from 'mongoose';

const connectDB =async() =>{
    try{
        mongoose.connect("mongodb+srv://PasangSherpa:PasangSherpa@contact.fkpie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ 
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify:false, 
            useUnifiedTopology: true
        });
        console.log("Mongodb connected....")
    }
    catch(err){
        console.error(err.message);
        process.exit(1);

    }
}


export default connectDB;