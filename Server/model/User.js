import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required: [true, 'Please add a first name']
    },
    lastname: {
        type:String,
        required: [true, 'Please add a last name']
    },
    email: {
        type:String,
        required:[true, 'Please add a email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ],
        unique: true
    },
    date:{
        type:Date
    },
    password:{
        type:String,
        required:[true, 'Please add a password'],
        minLength : 8,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('User', UserSchema);