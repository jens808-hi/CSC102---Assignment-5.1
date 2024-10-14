function saberOn(){
    var audio = new Audio("./Turn on lightsaber.mp3")
    var buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        });
    });
}
        
