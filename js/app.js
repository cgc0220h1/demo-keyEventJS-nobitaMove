function upArrowPressed() {
    let imgObj = document.getElementById("nobitaImg");
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + "px";
}

function downArrowPressed(){
    let imgObj = document.getElementById("nobitaImg");
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + "px";
}

function leftArrowPressed(){
   let imgObj = document.getElementById("nobitaImg");
   imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px";
}

function rightArrowPressed(){
    let imgObj = document.getElementById("nobitaImg");
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}

function moveNobita(event) {
    switch (event.key) {
        case "ArrowUp":
            upArrowPressed();
            break;
        case "ArrowDown":
            downArrowPressed();
            break;
        case "ArrowLeft":
            leftArrowPressed();
            break;
        case "ArrowRight":
            rightArrowPressed();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveNobita);
}

function reset() {
    let imgObj = document.getElementById("nobitaImg");
    imgObj.style.top = 100 + "px";
    imgObj.style.left = 0 + "px";
}


