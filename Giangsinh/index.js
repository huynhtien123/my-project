var express=require("express");
var app = express();
app.use(express.static("public"));// thiết lập thư mục hình ảnh js
app.set("view engine", "ejs");
app.set("views","./views");
app.listen(3000);
// app.get("/", function(req,res))
// {
//     res.render("main");
// }
app.get("/",function(req,res)
{
    res.render("home");
})