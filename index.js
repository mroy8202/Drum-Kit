// EventListener is used to define the behaviour of different parts  
// target.addEventListener("type", function());
// here target is our first button, i.e, document.querySelector("button"); 
// if we add parantheses to function when calling "handleClick()". It will straight out call the function
// that's why we did not add parantheses. We want to trigger that function when the click happens, that's why "handleCLick"

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got Clicked!");
// }

var drumButtons = document.querySelectorAll(".drum"); // insted of using buttons, use classes so that if we add more buttons in footer, that will not be invoked. So, be specific.
    
// Detecting button press
for(var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); // calling sound function
        buttonAnimation(buttonInnerHTML); // calling animation function
    });
}

// Detecting Keyboard press
document.addEventListener("keydown", function(event) { // here event means, whatever we click whether it be mouse click or keyboard click, event acts as a variable and stores data about the pressed key
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML); // anyways, this will never gets executed, but for safety, we considered this statement
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); // we have replicated a class inside querySelector
    activeButton.classList.add("pressed"); // we have already designed "pressed" class in css. Now, we have added a new class called "pressed" to active Button 
    // now the pressed class is invoked, to make the drums animation back to original after a few millisecond, we need to remove the pressed class. so we use "setTimeout function"
    // setTimeout(function, time(in millisecond))
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}