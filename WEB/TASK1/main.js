// find all h1 and replace contents with hello world
function replaceH1() {
    var h1 = document.getElementsByTagName("h1");
    for (var i = 0; i < h1.length; i++) {
        h1[i].innerHTML = "Hello World";
    }
    var h5 = document.getElementsByTagName("h5");
    for (var i = 0; i < h5.length; i++) {
        h5[i].innerHTML = "Script executed";
    }
}
