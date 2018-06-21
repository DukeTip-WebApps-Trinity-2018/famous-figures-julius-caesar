window.onload = function (){
    document.querySelector("#hover").onmouseover = hoverOnMouseOver;
    document.querySelector("#hover").onmouseout = hoverOnMouseOut;
    document.querySelector("#windowClose").onclick = clickWindowClose;
}


function hoverOnMouseOver () {
    this.style.backgroundColor = "#008DE8";
    console.log('in listener');
}

function hoverOnMouseOut () {
    this.style.backgroundColor = "lightseagreen";
}

function clickWindowClose () {
    if (confirm("Close Window?")) {
        close();
      }
}