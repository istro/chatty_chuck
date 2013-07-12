$(function(){

  // Add timeNow function to date object - for convenience of parsing.
  // I was too lazy to write that one myself - took it from StackOverflow.

  Date.prototype.timeNow = function(){
       return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  };

  // From here on, just my own code :)

  var users = $('#users ul'),
      mess = $('#messages'),
      user_said = $('#action input');

  var addUser = function(name){
    $('#users ul').prepend('<li>'+name+'</li>');
  };

  var sendMessage = function(message, author){
    var now = new Date();
    var messageString = "<span class='name'>"+author+":</span><span class='time right'>"+
               now.timeNow()+"</span><br><span class='mess'>"+message+"</span><br>";
    mess.append(messageString).animate({ scrollTop: mess[0].scrollHeight}, 500);
  };

  var sendUserMessage = function(){
    if(user_said.val() == '')
      return;
    sendMessage(user_said.val(), user_name);
    user_said.val('');
    user_said.focus();
  };

  // Add the visitor to user list, get her ready to type.

  var user_name = prompt("What's your name, stranger?");
  addUser(user_name);
  user_said.focus();

  // Bind event listeners for user to send messages.

  $('#action button').click( function(){
    sendUserMessage();
  });

  user_said.keyup(function(e){
    if(e.keyCode == 13){
      sendUserMessage();
    }
  });

});
