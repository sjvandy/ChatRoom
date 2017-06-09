var socket = io.connect();
var message;
var para;
var node;
var element;



socket.on('server', function(data){
  console.log('connected to server');
});
  socket.emit('client');
function onClick(){
  var data = {
    user: document.getElementById("name").value,
    text: document.getElementById("chatbox").value
  }
  socket.emit('message', data);
  
  PresentMessage(data);
  document.getElementById("chatbox").value = "";
};

socket.on('OneMessage', function(data){
  PresentMessage(data);
});

function PresentMessage(data){
  var totalMessage = data.user + ": " + data.text;
  para = document.createElement("p");
  node = document.createTextNode(totalMessage);
  element = document.getElementById("Conversation");
  para.appendChild(node);
  element.appendChild(para);
};


