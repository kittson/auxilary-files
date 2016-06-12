$(document).ready(function () {

$('#lyric-btn').on('click', function (){
	userInput = $('#lyric-input').val().trim();
	$('#lyric-input').val("");
	var queryURL = "http://api.musixmatch.com/ws/1.1/track.search";
	console.log(queryURL);
	    window.jsonpCallback = function(response) {
	    	console.log(response);
	    	$('#genreButtons').empty();

	    	var genreArray = [];

	    	for (var i=0; i<response.message.body.track_list.length; i++) {
	    		if (response.message.body.track_list[i].track.primary_genres.music_genre_list.length > 0) {
	    		var genreName = response.message.body.track_list[i].track.primary_genres.music_genre_list[0].music_genre.music_genre_name;
	    		var genreBool = true;
		    		for (var j=0; j < genreArray.length; j++) {
		    			if (genreArray[j] === genreName) {
		    				genreBool = false;
		    			}
		    		}
		    		if (genreBool) {
			    		var genre = $('<button class="genre">' + genreName + '</button>');
			    		$('#genreButtons').append(genre);
			    		genreArray.push(genreName);
		    		}	    		
	    		};
	    	}//for loop 	    	
	    };//window callback
});

var testSongObj = [
{	song: "Roses are Red",
	trackId: 912834098234,
	mp3File: "XX1.mp3"
} ,
{	song: "Red Rain",
	trackId: 912834093334,
	mp3File: "XX2.mp3"
},
{	song: "In your Eyes",
	trackId: 912834896234,
	mp3File: "XX3.mp3"
}
];//testSongList

$('#genreButtons').on('click', function(){

});//search lyric button

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

for(var ij =0; ij < testSongObj.length; ij++){
			$("#choicesArea").append("<input value="+ij+" name='choices' class='answers' type='radio'><label>"+ questions[num].choices[i]+"</label><br>")
}


$('#songListButtons').on('click', function(){

});//expand the song information
});//document onclick

	

