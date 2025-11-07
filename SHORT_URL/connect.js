import mongoose from "mongoose";

async function connectMongoDb() {
  mongoose
    .connect(
      "mongodb+srv://annadchauhan037_db_user:anand567@cluster0.le6acna.mongodb.net/ShortUrl"
    )
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log("MongoErr", err));
}

export default connectMongoDb;