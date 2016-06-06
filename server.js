var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');
var app = express();
//for post content
app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'})); 
//static content
app.use(express.static(path.join(__dirname,"./static")));
//setting up our ejs and views folder 
app.set("views",path.join(__dirname,"./views"));
app.set('view engine','ejs');

// app.get('/',function(req,res){
// 	res.render('index',{name:name}	);
// })
//tell the server to listen to the port 8000
var port = 8000;
var server = app.listen(port,function(){
	console.log("listening on port 8000")
})

//load the routes file,pass app and server into it(for url visits and event handling)
var route = require('./routes/index.js')(app,server); 
// var io = require('socket.io').listen(server)
// io.on('connection',function(socket){
// 	console.log("we are using sockets!");
// 	console.log(socket.id);

	//	 socket.on("got_a_new_user",function(data){
	// 	console.log(data.name);

	// 	var  users = {};
	
	// 	app.io.broadcast('new_user',{new_user_name:data.name})
	// 	io.emit('existing_users',users);
	// })
