var buttons = document.querySelectorAll("button");
var display = document.getElementById("display");

var toggleButton = document.getElementById("+5")
let toggleState = false

toggleButton.addEventListener("click", function() {
    if (toggleState) {
        toggleButton.classList.remove("red-button");
        toggleState = false;
    } else {
        toggleButton.classList.add("red-button");
        toggleState = true;
    }
});

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonValue = this.innerHTML;
        if(buttonValue == "+5") {
            buttonValue = "";
        }
        if(buttonValue == "C") {
            display.value = "";
        } else if (buttonValue === "=") {
            if (toggleState == true) {
                display.value = eval(display.value +"+5");
            } else {
                display.value = eval(display.value);
            }
        } else {
            display.value += buttonValue;
        }
    });
}