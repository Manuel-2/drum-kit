const sounds = {
    "65": new Audio("./sounds/clap.wav"),
    "83": new Audio("./sounds/hihat.wav"),
    "68": new Audio("./sounds/kick.wav"),
    "70": new Audio("./sounds/openhat.wav"),
    "71": new Audio("./sounds/boom.wav"),
    "72": new Audio("./sounds/ride.wav"),
    "74": new Audio("./sounds/snare.wav"),
    "75": new Audio("./sounds/tom.wav"),
    "76": new Audio("./sounds/tink.wav"),
}

const keys = document.querySelectorAll(".key");
keys.forEach(key =>{
    key.addEventListener("transitionend", function (event) {
        if(event.propertyName == "transform")
            this.classList.remove("key__active");
    });
})

document.addEventListener("keydown", event => {
    const keyCode = event.keyCode;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(key != null)
        turnOnButton(key,keyCode);
});

function turnOnButton(key,keyCode) {
    key.classList.add("key__active");
    let sound =sounds[keyCode.toString()];
    sound.currentTime = 0;
    sound.play();
}