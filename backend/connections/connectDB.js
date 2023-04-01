const mongoose = require("mongoose");

const DB ="mongodb+srv://bapi:bapi@cluster0.ywhjyhg.mongodb.net/instaclone?retryWrites=true&w=majority"
  // "mongodb+srv://raj01999:sus01999@cluster0.kj9b6.mongodb.net/instaclone?retryWrites=true&w=majority";
  // "mongodb+srv://localhost:27017/insta"

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
