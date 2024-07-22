require("dotenv").config();
 
const express = require("express");
const mongoose = require("mongoose");
const routes=require('./routes/todoroutes')
const cors=require('cors')

const app = express();
const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URL;

console.log("PORT:", process.env.PORT); // Log the PORT to ensure it's loaded
console.log("MONGODB_URL:", process.env.MONGODB_URL); // Log the MongoDB URL

if (!url) {
  console.error("Error: MongoDB URL is not defined.");
  process.exit(1);
}

app.use(express.json())
app.use(cors())
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
