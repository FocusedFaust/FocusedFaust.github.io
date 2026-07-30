import music from "../../assets/portfolio/music/entries.json" with {type: "json"};

var display = document.getElementById("cd-display");
for (const song in music) {
    var cont = document.createElement("div");
    cont.style = "display: flex; width: auto; margin:20px; background-color: var(--deep-space-blue); border-radius: 200px;"
    
    var image = document.createElement("img");
    image.id = "song-img"
    image.setAttribute("src", "../../assets/compact_disc.png");
    image.style = `display: block; margin-top: auto; width: 30vw;`;
    //image.classList.add("rotating-image");

    var text = document.createElement("div");
    text.style = `display: flex; flex-direction: column; align-items: center; justify-content: center; margin: auto; font-weight: bold;`;
    var p = document.createTextNode(song);
    text.appendChild(p);
    
    var audio = document.createElement("audio");
    audio.id = "song-audio"
    audio.setAttribute("src", music[song]["file"]);
    //audio.setAttribute("controls", "controls");
    audio.addEventListener("timeupdate", function() {
        var thisProgress = this.parentElement.querySelector("#song-progress");
        thisProgress.value = this.currentTime;
    })

    var controls = document.createElement("div");
    var playButton = document.createElement("button");
    playButton.id = "song-play";
    playButton.style = "background: none; border: none; cursor: pointer; font-weight: bold;";
    playButton.innerHTML = "&#9654";
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        var thisImage = this.parentElement.parentElement.parentElement.children.namedItem("song-img");
        if (thisAudio.paused == true) {
            // Play the audio
            thisAudio.play();
            // Update the button text to 'Pause'
            this.innerHTML = "&#9613 &#9613";
            thisImage.classList.add("rotating-image");
        } else {
            // Pause the audio
            thisAudio.pause();
            // Update the button text to 'Play'
            this.innerHTML = "&#9654";
            thisImage.classList.remove("rotating-image");
        }
    });
    var backButton = document.createElement("button");
    backButton.innerHTML = "&#x23EE";
    backButton.style = "background: none; border: none; cursor: pointer; font-weight: bold;";
    backButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        thisAudio.currentTime -= 5;
        if (thisAudio.paused == true) {
            this.parentElement.children.namedItem("song-play").click();
        }
    })
    
    var forwardButton = document.createElement("button");
    forwardButton.innerHTML = "&#x23ED";
    forwardButton.style = "background: none; border: none; cursor: pointer; font-weight: bold;";
    forwardButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        thisAudio.currentTime += 5;
        if (thisAudio.paused == true) {
            this.parentElement.children.namedItem("song-play").click();
        }
    })

    var songTime = document.createElement("progress");
    songTime.id = "song-progress";
    //songTime.min = 0;
    songTime.max = music[song]["duration"];
    songTime.value = audio.currentTime;

    controls.appendChild(backButton);
    controls.appendChild(playButton);
    controls.appendChild(forwardButton);
    controls.appendChild(songTime);
    text.appendChild(controls);
    cont.appendChild(image);
    cont.appendChild(audio);
    cont.appendChild(text);
    display.appendChild(cont);

    //TODO: Make play button pause all other songs (?)
    //TODO: Style the song display + move hardcoded style to css file
}