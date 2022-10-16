//  const fs=require('fs');



// const express=require ('express');
// const path=require('path');
// const app=express();
// app.use(express.urlencoded({extended:false}));
// app.get('/currenttime', function(req, res){
//     res.send('<h1>' + new Date().toISOString()+ '</h1>');
    
// }); //localhost:3000/currenttime
// app.get('/', function(req,res){
//     res.send('<form action="/store-user " method="POST"> <label>Your name btao  </label> <input type="text" name="username"><button> Submit</button></form>');
// }); // local host:3000/

// app.post('/store-user', function(req, res){
//   const username =req.body.username;
//   const filePath=path.join(__dirname, 'data','users.json');
//  const filedata=fs.readFileSync(filePath);

// const existingusers= JSON.parse(filedata);
// existingusers.push(username);
//  fs.writeFileSync(filePath,JSON.stringify(existingusers));


//   res.send('<h1> username stored! </h1>');

// });


// app.get('/users',function(req,res){
//     const filePath=path.join(__dirname, 'data','users.json');
//     const filedata=fs.readFileSync(filePath);
   
//    const existingusers= JSON.parse(filedata);
//    let responsedata='<ul>';
//    for(const user of existingusers){
//     responsedata+='<li>' + user +'</li>';
//    }
//    responsedata+='</ul>';
//  res.send(responsedata);
// });



// app.listen(3000)








// in express we do not require to pass port address it automaticaly pass instead of nodejs
// function handlerequest(request, response){
    // localhost:3000/currenttime
    // localhost:3000
    // if(request.url==='/currenttime'){
       
    // }
    // else if(request.url==='/'){
        // response.statusCode=200;
        
    // }
   
// }
//  const server=http.createServer(handlerequest);



//  server.listen(3000);
 


 // amazon.com => send a request to amaxon;s sever
 // amazon.com : 80 or 443 ( default port number)
 const path= require ('path');
  const express=require('express');
   const app=express();
   
//  app.use(express.urlencoded({extended:false}));
app.get('/', function(req,res){
    res.send(' <h1> helo sonuu bhau </h1>');
});

app.get('/practice',function(req, res){
    const htmlFilepath=path.join(__dirname,'views','practice.html');
    res.sendFile(htmlFilepath);
});



   app.listen(3000);