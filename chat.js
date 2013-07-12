$(function(){

  // Add timeNow function to date object - for convenience of parsing.
  // I was too lazy to write that one myself -
  // got it from StackOverflow (improved the spacing and newlines though).

  Date.prototype.timeNow = function(){
    return ((this.getHours() < 10) ? "0" : "") +
            this.getHours() + ":" +
            ((this.getMinutes() < 10) ? "0" : "" ) +
            this.getMinutes() + ":" +
            ((this.getSeconds() < 10) ? "0" : "") +
            this.getSeconds();
  };

  // From here on, just my own code :)

  var users = $('#users ul'),
      mess = $('#messages'),
      user_said = $('#action input'),
      self = this;

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

  // Set up variable interval for calling api's
  var next = 1000+Math.random()*9000;

  var getMessage = function(){
    next = 2000+Math.random()*4000;
    // var askNext = Math.random() < 0.2 ? askChuck : askLovers;
    // askNext();
    askChuck();
  };

  var askChuck = function(){
    $.ajax({
      url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy]',
      method: 'get',
      success: parseChuck
    });
  }

  var parseChuck = function(data){
    var result = JSON.parse(data);
    sendMessage("Ha! "+result['value']['joke'].replace(/Chuck Norris/g, 'I'), "Chuck Norris");
  }

  var askLovers = function(){
    $.ajax({
      // url: 'http://iheartquotes.com/api/v1/random?max_characters=100',
      method: 'get',
      dataType: 'jsonp',
      success: parseLovers
    });
  }

  var parseLovers = function(data){
    console.log(data);
    // parse data
  }

  setInterval(getMessage, next)


// http://api.icndb.com/jokes/random?limitTo=[nerdy] ->
// { "type": "success", "value": { "id": 547, "joke": "Product Owners never ask Chuck Norris for more features. They ask for mercy.", "categories": ["nerdy"] } }

// http://iheartquotes.com/api/v1/random?format=json&max_characters=100
//{"json_class":"Fortune","tags":["humorix_misc"],"quote":"A fool and his money are soon using Windows.","link":"http://iheartquotes.com/fortune/show/8167","source":"humorix_misc"}

});
