var numberOfButtons = document.querySelectorAll("button").length;

//click listening
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerhtml = this.innerHTML;
        calling(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);


    });
}
//Keyboard listening
document.addEventListener("keydown", function (event) {
    var KeyButton = event.key;
    calling(KeyButton);    //calling(event.key);
    buttonAnimation(KeyButton);
})
function calling(ch) {
    switch (ch) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerhtml);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); //pressed class added using classlist.add
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}









