import poems from "../../assets/portfolio/writings/poems.json" with {type: "json"};

var display = document.getElementById("display-poems");

for (const x in poems) {
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
    display.appendChild(cont);
}