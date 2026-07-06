import music from "../../assets/portfolio/music/entries.json" with {type: "json"};

var display = document.getElementById("cd-display");
console.log(music)
for (const song in music) {
    /*
    var cont = document.createElement("p")
    var span = document.createElement("span"); // The title gets special treatment
    span.style = "font-style: italic; display: block;"; // is in italics with a margin
    span.appendChild(document.createTextNode(x));
    cont.appendChild(span);
    cont.appendChild(document.createElement("br"));
    for (const line in poems[x]) { // add every line of the poem to the display
        var p = document.createTextNode(poems[x][line]);
        cont.appendChild(p);
        var br = document.createElement("br");
        cont.appendChild(br);
    }
    */
    
    var cont = document.createElement("div");
    cont.style = "display: inline-block;"
    var image = document.createElement("img");
    image.setAttribute("src", "../../assets/compact_disc.png");
    image.style = `width: calc(100% * (1/${Object.keys(music).length}) - 10%);`;
    var audio = document.createElement("audio");
    audio.setAttribute("src", music[song]["file"]);
    //audio.setAttribute("controls", "controls");

    cont.appendChild(image)
    cont.appendChild(audio);
    display.appendChild(cont);
}