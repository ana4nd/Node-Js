import express, { urlencoded } from "express";
import urlRoute from "./routes/routes.js"
import connectMongoDb from "./connect.js";
import path from "path";
import Url from "./models/url.js";
import staticRoute from "./routes/staticRouter.js";

const app = express();
const PORT = 8000;

//db
connectMongoDb();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(urlencoded({extended: false}));
app.use(express.json());

app.get("/test", async(req,res)=>{
    const allUrls = await Url.find({});
    return res.render("home",{
        urls: allUrls
    });
})

app.use("/url", urlRoute);
app.use("/", staticRoute);



app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);
})