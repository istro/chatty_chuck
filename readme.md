## Chat between Chuck Norris and others.

Started as a coding challenge with rather minimal requirements, but I got carried away.

For Chuck, I used [internet Chuck Norris database api](http://www.icndb.com/api/), for others - [I♡quotes api](http://www.iheartquotes.com/api). Also, there's a surprise guest that shows up now and then.

How it works:
When you go to the page, you enter the chat room (name prompted). Chuck's user is hard-coded in the users, because that's how he rolls.

At random intervals between 2-5 seconds one of the above API's is called. Chuck's response is parsed and posted to chat directly, I&#x2661quotes responses also include the source - and if this source has not posted to our chat yet, it will be added as a new user.

Bugs that I don't have steam to address right now:

- design is far from perfect
- styling is not responsive for smaller devices
- Chuck's grammar leaves much to be desired
