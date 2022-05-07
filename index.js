// var express = require('express')
// var cookieparser = require('cookie-parser');
// var app=express();
// app.use(cookieparser());
// app.get("/",function(req,res){

//     res.cookie('mayuri','Gaikwad').send('cookie set');

//     // res.cookie("cookie1","mayuri gaikwad").send('Cookie has been set');
//     // res.cookie('cookie1',"mayuri",{expire: Date.now()+36000}).send('cookie has been set')
// })
// app.get("/show",function(req,res){
//     res.send(req.cookies)
// })

// app.get("/delete",function(req,res){
//     res.clearCookie('foo');
//     res.send('cookie foo cleared')
// });
// // res.clearCookie('cookie1').send('cookie1 has been deleted')})
// app.listen(7000);



// Session

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(8000);