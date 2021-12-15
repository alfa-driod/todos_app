const http=require('http');
const server=http.createServer(function (request, response) {
 console.log(request.method);

if(request.method==='POST'&& request.url==='/Task'){
response.end('you just made a POST for a task ')

}
else if(request.method==='GET'&& request.url==='/Task'){
    response.end('you just made a GET for a task ')
  
}
else if(request.method==='PUT'&& request.url==='/Task'){
    response.end('you just made a PUT for a task ')
  
}
else if(request.method==='DELETE'&& request.url==='/Task'){
    response.end('you just deleted you task ')
  
}
else{
    response.end('it does not exit');
}
});
server.listen(4000,function () {
    console.log('your server is running')
});