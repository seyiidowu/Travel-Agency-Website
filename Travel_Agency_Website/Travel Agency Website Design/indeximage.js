/* this javascript was written by Phillip Abraham*/

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

function displayNextText() {
    y = (y === picText.length - 1) ? 0 : y + 1;
    document.getElementById("imgText").innerText = picText[y];
}

function displayPreviousText() {
    y = (y <= 0) ? picText.length - 1 : y - 1;
    document.getElementById("imgText").innerText = picText[y];
}


function textTimer() {
    setInterval(displayNextText, 5000);
}

$(document).ready(function () {
 
    $('div.container').fadeIn(2000);
    $('div.container-grid').fadeIn(3000);

});

function passvalues() {
    let country = document.getElementById("countrytext").value;
    localStorage.setItem("listvalue", country);
    return false;
}
