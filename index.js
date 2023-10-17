var drumButtons = document.querySelectorAll(".drum");

// for loop is use to add event listner to all selctor who has drum class
// querySelectorAll return a array
// click events

for (let index = 0; index < drumButtons.length; index++) {
    drumButtons[index].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(keyword);
    })
}

// keypress event
// here function callback is use

window.addEventListener("keypress", function(event) {
    var keyword = event.key;
    playSound(keyword);  
    buttonAnimation(keyword);
})

// function to play sound

function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
    
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
    
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

// function for giving animation to button by adding and removing class

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}