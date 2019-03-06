var express = require("express");
var app = express();
 
app.use(express.static("public"));
 
app.get("/signin", function(req, res) {
res.json({status: "Você esta logado!"});
});
 
app.post("/signup", function(req, res) {
res.json({status: "Cadastrado!"});
});
 
app.listen(3000, function() {
console.log("Api up and running!");
});