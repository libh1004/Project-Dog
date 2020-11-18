function Top() {
    return " <div class=\"top\">\n" +
        "    <ul>\n" +
        "        <li><a href=\"\"><img src=\"../imgs/home.png\" height=\"15\" width=\"15\"/>Home</a></li>\n" +
        "        <li><a href=\"\"><img src=\"../imgs/icon1.png\" height=\"15\" width=\"15\"/>About</a></li>\n" +
        "        <li><a href=\"\"><img src=\"../imgs/icon1.png\" height=\"15\" width=\"15\"/>News</a></li>\n" +
        "        &emsp;&emsp;&emsp;&emsp;&emsp;<li><a href=\"\"><img src=\"../imgs/icon1.png\" height=\"15\" width=\"15\"/>Gallery</a></li>\n" +
        "        <li><a href=\"\"><img src=\"../imgs/icon1.png\" height=\"15\" width=\"15\"/>Pages</a></li>\n" +
        "        <li><a href=\"\"><img src=\"../imgs/icon1.png\" height=\"15\" width=\"15\"/>Contract</a></li>\n" +
        "    </ul>\n" +
        "</div>";
}
var tp = document.getElementById("top");
tp.innerHTML=Top();