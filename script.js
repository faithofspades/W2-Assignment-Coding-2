//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes here↓↓↓↓↓↓↓↓↓↓↓↓


//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//DO not edit below here, everything below here will make the information appear on the webpage!

// Select the <body> element of the document
const songInfoHTML = document.getElementById("songInfo")

// Dynamically add content to the <body> element using the song object
songInfoHTML.innerHTML += `
    <!-- Display the song title and artist name inside an <h1> tag -->
    <h1><em>${song.title}</em> by ${song.artist.name}</h1>

    <!-- Display the album name inside an <h2> tag -->
    <h2>appearing on the album <em>${song.album}</em></h2>

    <!-- Create an ordered list (<ol>) with additional song details -->

        <!-- Display the duration of the song in minutes:seconds format -->
        <p>Duration : ${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}<br>
        
        <!-- Display the label associated with the song -->
        Label : ${song.label}<br>
        
        <!-- Display the genre of the song -->
        Genre : ${song.genre}<br>
        
        <!-- Display the songwriter's name -->
        Songwriter : ${song.songwriter}<br>
        
        <!-- Display the producer's name -->
        Producer : ${song.producer}</p>


    <!-- Add a paragraph with a fun fact about the artist -->
    <p>Fun Fact: ${song.artist.name} plays the ${song.artist.instrument} and was born on ${song.artist.birthdate}</p>
`;