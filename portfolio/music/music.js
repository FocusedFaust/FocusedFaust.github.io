import music from "../../assets/portfolio/music/entries.json" with {type: "json"};

var display = document.getElementById("cd-display");
for (const song in music) {
    var cont = document.createElement("div");
    cont.classList.add("song-display");
    
    var image = document.createElement("img");
    image.id = "song-img";
    image.setAttribute("src", "../../assets/compact_disc.png");
    image.classList.add("song-image");

    var text = document.createElement("div");
    text.classList.add("song-inner-div");
    var title = document.createTextNode(song);
    text.appendChild(title);
    var year = document.createElement("p");
    year.innerHTML = music[song]["date"].italics();
    year.style = "font-weight: normal; margin: 0;";
    text.appendChild(year);
    
    var audio = document.createElement("audio");
    audio.id = "song-audio";
    audio.setAttribute("src", music[song]["file"]);
    audio.addEventListener("timeupdate", function() {
        var thisProgress = this.parentElement.querySelector("#song-progress");
        thisProgress.value = this.currentTime;
    })
    audio.addEventListener("ended", function(){
        var thisImage = this.parentElement.children.namedItem("song-img");
        var playBtn = this.parentElement.querySelector("#song-play");
        this.currentTime = 0;
        this.pause();
        thisImage.classList.remove("rotating-image");
        playBtn.innerHTML = "&#9654";
    })

    // All three buttons for the controls of the song
    var controls = document.createElement("div");
    var playButton = document.createElement("button");
    playButton.id = "song-play";
    playButton.classList.add("controls-button");
    playButton.innerHTML = "&#9654";
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        var thisImage = this.parentElement.parentElement.parentElement.children.namedItem("song-img");
        if (thisAudio.paused == true) {
            // Play the audio, update the button and rotate the image
            thisAudio.play();
            this.innerHTML = "&#9613 &#9613";
            thisImage.classList.add("rotating-image");
        } else {
            // Pause the audio, update the button and stop the image rotation
            thisAudio.pause();
            this.innerHTML = "&#9654";
            thisImage.classList.remove("rotating-image");
        }
    });

    var backButton = document.createElement("button");
    backButton.innerHTML = "&#x23EE";
    backButton.classList.add("controls-button");
    backButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        thisAudio.currentTime -= 5;
        if (thisAudio.paused == true) {
            this.parentElement.children.namedItem("song-play").click();
        }
    })
    
    var forwardButton = document.createElement("button");
    forwardButton.innerHTML = "&#x23ED";
    forwardButton.classList.add("controls-button");
    forwardButton.addEventListener("click", function() {
        var thisAudio = this.parentElement.parentElement.parentElement.children.namedItem("song-audio");
        thisAudio.currentTime += 5;
        if (thisAudio.paused == true) {
            this.parentElement.children.namedItem("song-play").click();
        }
    })

    // Progress bar of the song
    var songTime = document.createElement("progress");
    songTime.id = "song-progress";
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
}