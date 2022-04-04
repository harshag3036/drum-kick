for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{   document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
    buttonpress(event.key);
    buttonAnimation(event.key);
  
});
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        buttonpress(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// var audio =new Audio("sounds/tom-1.mp3");
// audio.play();

function buttonpress(buttontext)
{
switch(buttontext){
    case "w":
        var audio =new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio =new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio =new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio =new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio =new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio =new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "l":
        var audio =new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "k":
        break;
    default:
        console.log(buttontext);

}
}

function buttonAnimation(curr_key){
    var active=document.querySelector("."+curr_key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
    console.log("hello");
}