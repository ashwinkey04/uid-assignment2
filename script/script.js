
function seturl() {
    document.getElementById("url").style.display = "block";
    document.getElementById("title").style.display = "block";
    document.getElementById("url").innerHTML = window.location;
}
function ext() {
    var fullPath = document.getElementById('customFile').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        var dotpos = filename.indexOf(".")
        document.getElementById("fileext").style.display = "block";
        document.getElementById("fileext").innerHTML = filename.substring(dotpos);
    }
}
function str() {
    document.getElementById("title").style.display = "block";
    document.getElementById("label").style.display = "none";
    var inp = document.getElementById("stringInput").value;
    var sub = inp.slice(4, 10);
    var cmp = 'Script';
    var res = sub.localeCompare(cmp);
    if (res == 0) {
        document.getElementById("title").innerHTML = inp.slice(0, 4) + inp.substring(10);
    }
    else {
        document.getElementById("title").innerHTML = inp;
    }

}