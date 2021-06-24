import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please add a name']
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

export default mongoose.model('user', UserSchema);