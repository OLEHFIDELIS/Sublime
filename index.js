const express = require("express")
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
    res.render("index")
});

app.get("/show/:id", (req,res) => {
    res.render("show")
})

app.listen("3000", () => {
   console.log("SERVER JUST STARTED!!!!!")
});