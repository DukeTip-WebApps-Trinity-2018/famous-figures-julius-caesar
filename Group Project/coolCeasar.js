window.onload = function () {
    document.querySelector("#hover").onmouseover = hoverOnMouseOver;
    document.querySelector("#hover").onmouseout = hoverOnMouseOut;
    document.querySelector(".Images").onmouseover = imagesOnMouseOver;
    document.querySelector(".Images").onmouseout = imagesOnMouseOut;
    document.querySelector(".caesarCipher").onmouseover = caesarCipherDecode;
    document.querySelector(".caesarCipher").onclick = caesarCipherEncode;
}

function contextMenu() {
    alert("You want some fries with that?");
    var str = "Fries";
    var link = str.link("https://tinyurl.com/ycq9k4mm");
    document.getElementById("fries").innerHTML = link;
}

function caesarCipherDecode() {
    var str = " More info here."
    var link = str.link("https://en.wikipedia.org/wiki/Caesar_cipher");
    document.getElementById("caesarHeader").innerHTML = "Caesar Ciper";
    document.getElementById("caesarText").innerHTML = "Caesar used this cipher for his private correspondences." + link;
}

function caesarCipherEncode() {
    document.getElementById("caesarHeader").innerHTML = "Jhlzhy Jpwoly";
    document.getElementById("caesarText").innerHTML = "Jhlzhy bzlk aopz jpwoly mvy opz wypchal jvyylzwvuklujlz. Tvyl pumv olyl. Jspjr av ylzla.";
}