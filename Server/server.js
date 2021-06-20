import Express from "express";
import Helmet from "helmet";
import Cors from "cors";

let app = Express();

app.use(Cors());
app.use(Helmet());

const PORT = process.env.PORT || 4000;

app.get("/test", (req, res) => {
  res.send("This restful api is for testing purpose only");
});

app.listen(PORT, () => console.log("Server listening at port:" + PORT));
