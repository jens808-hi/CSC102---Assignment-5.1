//fuction called by a click of a button that prompts a message to the user
function sayOuch(){
    alert("Hey! Excuse You! Ouch! That hurt virtually!");
}
//button triggered by a function that imitates the sound of a lightsaber turning on
function saberOn(){
    var audio = new Audio("./Turn on lightsaber.mp3")
    var buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        });
    });
}
        
