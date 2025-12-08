import poems from "../../assets/portfolio/writings/poems.json" with {type: "json"};

var display = document.getElementById("display-poems");

for (const x in poems) {
    var cont = document.createElement("p")
    cont.appendChild(document.createTextNode(x));
    cont.appendChild(document.createElement("br"));
    for (const line in poems[x]) {
        var p = document.createTextNode(poems[x][line]);
        cont.appendChild(p);
        var br = document.createElement("br");
        cont.appendChild(br);
    }
    //display.appendChild(document.createTextNode(""));
    //display.appendChild(document.createElement("br"));
    display.appendChild(cont);
}