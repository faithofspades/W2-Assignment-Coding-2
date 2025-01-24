# Coding 2 | MUST 4707

## Creating Custom Objects with Properties

In this assignment you will update the file `script.js` and commit it to your assignment repository. Your updated version of `script.js` will have a new object defined that contains a wide range of information on a song. Inside of your song object will be another "nested" object that contains the artist's information.

### Accessing the Assignment Materials
1. Navigate to the assignment repository in the course [GitHub organization](https://github.com/MUST4707)
2. Click on the green `Use this template` button in the top right corner.
3. Choose 'Create a new repository'
4. Set up the repo name under your account.
5. Click `Create repository`

*You should now be at your own personal repository with the assignment materials.*
6. Click on the green `<> Code` button and select `Open with GitHub Desktop

*You should now be in your GitHub Desktop application that has a pop up window called 'Clone a Repository'*

7. Make sure the local path is where you would like to save this repo.
8. Hit `Clone`
9. You should be able to now click the `Open in Visual Studio Code ` button or navigate to your files and open the folder in Visual Studio Code.
10. After you finish working on your project please return to GitHub Desktop and
1. Commit your changes to the `master` (don't to add a summary description)
2. Click on the `Push Orgin` to sync your commit with the GitHub cloud.

### Song Research

1. Pick a song you like and look up the following information. Save it for later.
   - title
   - album that the song appears on
   - artist:
     - name
     - instrument
     - birthdate
   - duration (convert it to seconds!)
   - genre
   - label
   - songwriter
   - producer

### Coding

Edit the local version of `script.js` cloned by GitHub Desktop:

Your code will go below the  comment:

```js
//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes below here↓↓↓↓↓↓↓↓↓↓↓↓
```

_this is where you will type your code!_

For now, don't change the code at the bottom of `script.js`...
```js
//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//DO not edit below here, everything below here will make the information appear on the webpage!

// Select the <body> element of the document
const bodyHTML = document.querySelector("body");

// Dynamically add content to the <body> element using the song object
bodyHTML.innerHTML += `
    <!-- Display the song title and artist name inside an <h1> tag -->
    <h1><em>${song.title}</em> by ${song.artist.name}</h1>

    <!-- Display the album name inside an <h2> tag -->
    <h2>appearing on the album <em>${song.album}</em></h2>

    <!-- Create an ordered list (<ol>) with additional song details -->
    <ol>
        <!-- Display the duration of the song in minutes:seconds format -->
        <li>Duration : ${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}</li>
        
        <!-- Display the label associated with the song -->
        <li>Label : ${song.label}</li>
        
        <!-- Display the genre of the song -->
        <li>Genre : ${song.genre}</li>
        
        <!-- Display the songwriter's name -->
        <li>Songwriter : ${song.songwriter}</li>
        
        <!-- Display the producer's name -->
        <li>Producer : ${song.producer}</li>
    </ol>

    <!-- Add a paragraph with a fun fact about the artist -->
    <p>Fun Fact: ${song.artist.name} plays the ${song.artist.instrument} and was born on ${song.artist.birthdate}</p>
`;
```


---

1. In `script.js` declare a new `const` called `song`.
2. Assign to `song` an object `{}`
3. This object should contain the following information:

| property     | info                                                     |
| ------------ | -------------------------------------------------------- |
| `title`      | the song title                                           |
| `album`      | the album that the song appears on                       |
| `artist`     | info about the artist inside a nested object containing: |
| `(artist)`   | `name`                                                   |
| `(artist)`   | `instrument`                                             |
| `(artist)`   | `birthdate`                                              |
| `duration`   | length of the songs in seconds (must be a number!)       |
| `genre`      | genre of the song                                        |
| `label`      | label that released the song                             |
| `songwriter` | songwriter credits                                       |
| `producer`   | producer credtis                                         |

**Your property names must match exactly with the ones listed above.**
For example:
`song.title` will return whatever the name of your song is.
`song.duration` will return a number that is equal the duration of your song in seconds.
`song.artist` will return an object with its own properties
`song.artist.name` will return the name of the artist.




### Testing Your Work (Using VS Code and your Browser)
1. Make sure you have saved all of your files, then click on the `index.html` file.
2. Click on "Go Live"
3. Once the browser window opens with the assignment webpage, open the Javascript Console
4. You should see all the information that you entered into your object displaying correctly.
5. If you are getting an error or an unexpected result please return to you code and update to fix the error. Repeat this process over and over until their are no errors*



### Submission Steps
1. Upload your `script.js` to the Canvas assignment.

### Grading Criteria

Your code contained in `script.js` will be auto-graded by GitHub classroom on the following 15 criteria. You must meet all 15 points to pass this assignment.

1. Song object exists
2. Your song object is an object
3. Song object has a property called 'name'
4. Song object has a property called 'album'
5. Song object has a property called 'artist'
6. Song object has a property called 'duration'
7. The property 'duration' is a number
8. Song object has a property called 'genre'
9. Song object has a property called 'label'
10. Song object has a property called 'songwriter'
11. Song object has a property called 'producer'
12. The property 'artist' is an object
13. Artist property has its own property called 'name'
14. Artist property has its own property called 'instrument'
15. Artist property has its own property called 'birthdate'

