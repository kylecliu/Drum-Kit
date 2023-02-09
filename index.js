//adding event listeners to all drum classes for playing audio files and displaying animation upon pressing the mouse
var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("mousedown", function () { 
        makeSoundButton(this.innerHTML);
        buttonAnimation(this.innerHTML);
});
}

//adding event listeners to all drum classes for removing animation when releasing the mouse
var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("mouseup", function () { 
        reverseButtonAnimation(this.innerHTML);
});
}

//a function which plays audio files
function makeSoundButton(innerHTML) {
    switch (innerHTML) {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        case "v":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        default:
            console.log(this.innerHTML);
    }
}


//adding an event lister for playing audio files using keyboard
document.addEventListener("keydown", function (event) { 
    playSoundKeyboard(event.key)
});

//a function which plays audio files using keyboard
function playSoundKeyboard(key) {

    switch (key) {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        case "f":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        default:
            console.log(key);
    }

}

//adding an event listener for displaying animation while pressing down a key
document.addEventListener("keydown", function(event) {
    buttonAnimation(event.key)
})

//adding an event listener for removing animation while releasing a key
document.addEventListener("keyup", function(event) {
    reverseButtonAnimation(event.key)
})

//a function which adds the pressed class to corresponding targets
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
}

//a function which removes the pressed class from corresponding targets
function reverseButtonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.remove("pressed");
}















