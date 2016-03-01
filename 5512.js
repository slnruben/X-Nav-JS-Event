function listener() {
    var text = document.getElementById("field");
    text.addEventListener("input", changeColor);
}


function changeColor() {
    var current = document.getElementById("color");
    current.style.backgroundColor = this.value;
}

listener();
