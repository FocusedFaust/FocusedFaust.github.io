import music from "../../assets/portfolio/music/entries.json" with {type: "json"};

var display = document.getElementById("cd-display");
console.log(music)
for (const song in music) {
    var cont = document.createElement("div");
    cont.style = "display: flex; width: auto; margin:20px; background-color: var(--deep-space-blue); border-radius: 200px;"
    
    var image = document.createElement("img");
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
    playButton.style = "background: none; border: none; cursor: pointer;";
    playButton.innerHTML = "&#9654";
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        if (thisAudio.paused == true) {
            // Play the audio
            thisAudio.play();
            // Update the button text to 'Pause'
            this.innerHTML = "&#9615 &#9615";
        } else {
            // Pause the audio
            thisAudio.pause();
            // Update the button text to 'Play'
            this.innerHTML = "&#9654";
        }
    });

    var songTime = document.createElement("progress");
    songTime.id = "song-progress";
    songTime.max = music[song]["duration"];
    songTime.value = audio.currentTime;

    controls.appendChild(playButton);
    controls.appendChild(songTime);
    text.appendChild(controls);
    cont.appendChild(image);
    cont.appendChild(audio);
    cont.appendChild(text);
    display.appendChild(cont);

    //TODO: Make play button pause all other songs (?)
    //TODO: Make play button rotate cd drawing
    //TODO: Style the song display + move hardcoded style to css file
}