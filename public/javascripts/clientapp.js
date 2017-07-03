var socket = io.connect();
var message;
var para;
var node;
var element;

socket.on('server', function(data){
  console.log('connected to server');
});
  socket.emit('client');


var app = angular.module('ChatRoomApp', []);
app.controller('ChatRoomController', function($scope, socket) {
  $scope.messages = [];
  $scope.send = function(){
    var data = {
      user: $scope.user,
      text: $scope.text,
      isSender: true,
      mycssclassname: "sender"
    };
    $scope.messages.push(data);
    console.log($scope.data)
    socket.emit('message', data);
    console.log("data sent");
    $scope.text = "";
    console.log("box cleared");
  };
  socket.on('OneMessage', function(data){
    console.log(data);
    data.isSender = false;
    $scope.messages.push(data);
  });
});
