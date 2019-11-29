const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views')); // Redirect to the views directory inside the src directory


// Import and use routes from route folder
const route = require("./routes/routes");
app.use("/", route)

// Setup PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on ${port}`))

