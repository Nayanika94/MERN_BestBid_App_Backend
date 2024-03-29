
//--------------Import-------------------
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//--------------Define connection to Database----------------

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("unable to connect" + error.message);
  }
};


//--------------Export--------------------

module.exports = connectDB;