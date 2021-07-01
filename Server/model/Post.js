import mongoose from 'mongoose';
const Schema= mongoose.Schema


const PostSchema = new Schema({
    text: {
        type:String,
        required: [true, 'Please add a first name']
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    profilePhoto:{
        type: String
    },
    postPhoto:{
        type: String
    },
    likes:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            name:{
                type:String
            },
            profilePhoto:{
                type: String
            }
            
        }
    ],
    comments: [
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            text: {
                type: String,
                required:true
            },
            name:{
                type:String
            },
            avatar: {
                type:String
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Post', PostSchema);