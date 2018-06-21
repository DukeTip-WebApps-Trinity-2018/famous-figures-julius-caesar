window.onload = function (){
    document.querySelector("header-right") = headerRightWindow;
}

function headerRightWindow () {
    window.open("bibliography.html", "_blank");
}
function bigImg(x) {
   this.style.height = "500px";
   this.style.width = "500px";
}

function normalImg(x) {
   this.style.height =  "200px";
   this.style.width = "200px";
}
<img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="caesarShanked.png" alt="Smiley" width="200" height="200">