$(function () {
    $("#hover").hover(hoverOnMouseOver, hoverOnMouseOut);
    $(".Images").hover(imagesOnMouseOver, imagesOnMouseOut);
    $(".caesarCipher").hover(caesarCipherDecode, caesarCipherEncode);
    $(".Images").mouseenter(function(){
        alert("You entered image!");
    });
});

function hoverOnMouseOver() {
    $(this).css({ "background-color": "gray" });
}

function hoverOnMouseOut() {
    $(this).css({ "background-color": "lightseagreen" });
}

function imagesOnMouseOver() {
    $(this).css({ "borderColor": "goldenrod" })
}

function imagesOnMouseOut() {
    $(this).css({ "borderColor": "rgb(43, 144, 211)" })
}

function caesarCipherDecode() {
    $("#caesarHeader").html = ("<h1>Caesar Cipher</h1>");
    $("#caesarText").html = ("<p>Caesar used this cipher for his private correspondences. Click to reset.</p>");
}

function caesarCipherEncode() {
    $("#caesarHeader").html("<h1>Jhlzhy Jpwoly</h1>");
    $("#caesarText").html("<p>Jhlzhy bzlk aopz jpwoly mvy opz wypchal jvyylzwvuklujlz. Tvyl pumv olyl. Jspjr av ylzla.</p>");
}

