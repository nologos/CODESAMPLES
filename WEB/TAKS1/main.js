// find all h1 and replace contents with hello world
function replaceH1() {
    var h1 = document.getElementsByTagName("h1");
    for (var i = 0; i < h1.length; i++) {
        h1[i].innerHTML = "Hello World";
    }
    var h2 = document.getElementsByTagName("h2");
    for (var i = 0; i < h2.length; i++) {
        h2[i].innerHTML = "Script executed";
    }
}
