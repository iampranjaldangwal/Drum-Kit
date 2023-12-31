var noOfButtons=document.querySelectorAll(".drum").length;

//Detecting Button Press.
for(var i=0;i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      });
}

//Detecting Keyboard Press.
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w": var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        case "a": var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        case "s": var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        case "d": var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        case "j": var audio= new Audio("sounds/crash.mp3");
        audio.play();
        case "k": var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        case "l": var audio= new Audio("sounds/snare.mp3");
        audio.play();
    }
}

// Button Animation
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}
