var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

// twitter function

var myTweets = function(){
var client = new Twitter(keys.twitterKey)
 
/*var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}); */
 
var params = {screen_name: 'inrtracker'}; 
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   for(let i = 0; i <tweets.length; i++){
       console.log(tweets[i].created_at);
       console.log('');
       console.log(tweets[i].text);
      }
    }
   });
}
// spotify

 function spotifySong(song){
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
   var songs = data.tracks.item;
   for(let i =0; i < songs.length;i++){
       console.log(i);
       console.log("artist's name" + songs[i].artist.map(getArtistNames));
       console.log("song name:" + songs[i].name);
       console.log("album:" + songs[i].album.name);
   }
    // Do something with 'data'
   });
 }

var findMovie = function(movieInput){
request('http://www.omdbapi.com/?t='+ movieInput +'&plot=full', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}

var doIt =function() {
fs.readFile('random.text','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    if(dataArr.length === 2){
        pick(dataArr[0],dataArr[i]);
    }
       else if (dataArr.length === 1) {
           pick(dataArr[0]);
       }
  });
}


 var choose = function(caseData,functionData){
     switch(caseData){
         case 'my-tweets':
         myTweets();
         break ;
         case'spotify-this-song':
         spotifySong(functionData);
         break;
         case'movie':
         findMovie(functionData);
         break;
         case"doIt":
         doIt();
         break;
         default :
         console.log("Siri doesn't understand so its no");
         break;
     }

 }

 var runthis = function(argOne,argTwo) {
    choose(argOne,argTwo);
 }

     runthis(process[2],process[3]);
 

 //choose();
//the inputs of the parameter

 