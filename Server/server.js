import Express from "express";
import Helmet from "helmet";
import Cors from "cors";
import connectDB from "./config/db.js";

let app = Express();

// connect to db;
connectDB();

//Init middleware 
app.use(Express.json({
  extended: false
}));

app.use(Cors());
app.use(Helmet());

//Load routes 
import User from "./routes/User.js";
import messages from "./routes/messages.js";
import Post from "./routes/Post.js";
import Profile from "./routes/Profile.js";

//Define routes
app.use('/api/user', User);
app.use('/api/messages', messages);
app.use('/api/Post', Post);
app.use('/api/Profile', Profile);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server listening at port:" + PORT));