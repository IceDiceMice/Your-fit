// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
require("dotenv").config()
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const calculatorsRouter = require("./routes/calculators");
const profileRouter = require("./routes/profile");
const personalOfficeRouter = require("./routes/personal-office");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/sign-up");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use("/calculators", calculatorsRouter);
app.use("/profile", profileRouter);
app.use("/", indexRouter);
app.use("/personal-office", personalOfficeRouter);
app.use("/login", loginRouter);
app.use("/sign-up", signupRouter);


mongoose.connect('mongodb+srv://user1:UBLMGA1NzTAF6jdA@cluster0.qgmna.mongodb.net/Db1?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection;
      db.on("error", (error) => console.error(error));
      db.once("open", () => console.log("Connected to Mongoose"))

app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port:" + 3000);
})