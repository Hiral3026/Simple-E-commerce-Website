//include require modules
const  express = require('express');
const path  = require("path");  //this is included with node

//create an instance of the app (which is a function) and call it as an expression to
const app = express();  
const port =  process.env.PORT || "8888";

//Set up Express app to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Set up public folder path for static files
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (request, response) => {
    response.render("index", { title: "Home" });
});

//Set up server listening 
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
});