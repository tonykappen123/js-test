var request = require("request");
var express = require("express");
var app =express();

app.use(express.static("public"));
app.set("view engine", "ejs");

request("https://gist.githubusercontent.com/defrex/e18a51d54b34770e83b48c471428d7b0/raw/8824958108b94f127347bed52af8170a259ea3e6/gifs.json",function(error,response,body){
    if(error){
       console.log("error");
   } 
   else if (response.statusCode =='200'){
        app.get("/", function(req, res){
            var parsedData = JSON.parse(body)
            res.render("jsTest", {parsedData:parsedData});
        });
   }
    
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!"); 
});