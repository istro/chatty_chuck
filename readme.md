## Chat between Chuck Norris and YOU.

Started as a coding challenge with rather minimal requirements, but I got carried away.

For Chuck, I used [internet Chuck Norris database api](http://www.icndb.com/api/).

The original idea:

Chatroom with Chuck Norris and other philosophers discussing matters. Didn't find a philosophy api, so at least found a half-decent one for quotes - [I♡quotes api](http://www.iheartquotes.com/api).

At random intervals between 2-5 seconds one of the different API's is called. Chuck's response is parsed and posted to chat directly, I ♡ quotes responses also include the source - and if this source has not posted to our chat yet, it will be added as a new user.

#### HOWEVER, I got stuck on I♡quotes api not supporting `jsonp`.

Sucks. I'll use the hints from [this](http://stackoverflow.com/questions/13464619/how-do-i-interpret-json-if-jquery-thinks-it-is-receiving-a-jsonp-request) or [this](http://stackoverflow.com/questions/7936610/json-uncaught-syntaxerror-unexpected-token) answers to work it out later.

Also I want to add another user - crazy russian - using [fucking-great-advice api](http://fucking-great-advice.ru/api/) - alas, they also don't support `jsonp`. I suppose I'll need to write a re-routing method that could call the apis from the server and give the results back to me on the front-end. Oh well, when I have time.

## In the meantime you can chat with Chuck to your heart's content - it's hosted right here on [github pages](http://istro.github.io/chatty_chuck/).

![approves](http://media.heavy.com/media/2012/09/chuck-norris-approves.gif)

Additional bugs I'm aware of but  I don't have steam to address right now:

- design is far from perfect
- styling is not responsive for smaller devices
- Chuck's grammar leaves much to be desired
- Safari is not supported (safari doesn't support CSS3 calculation functions yet, and I didn't write conditional styling to account for that)
