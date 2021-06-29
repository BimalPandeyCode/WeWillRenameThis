import express from "express";
import Helmet from "helmet";
import Cors from "cors";
import connectDB from "./config/db.js";

let app = express();

// connect to db;
connectDB();

//Init middleware 
app.use(express.json({
  extended: false
}));

app.use(Cors());
app.use(Helmet());

//Load routes 
import User from "./routes/User.js";
import messages from "./routes/messages.js";
import Post from "./routes/Post.js";
import Profile from "./routes/Profile.js";
import auth from './routes/auth.js';
//Define routes
app.use('/api/user', User);
app.use('/api/messages', messages);
app.use('/api/Post', Post);
app.use('/api/Profile', Profile);
app.use('/api/auth', auth);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server listening at port:" + PORT));