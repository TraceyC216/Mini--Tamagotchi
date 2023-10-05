//Create game class or object plus event listeners/handlers to call methods
class pet {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
}
const cat = new pet(0, 0, 0, 0)

//animate cat
$(document).ready(function () {
    $('.meet').click(function () {
        $('img[src="cat1.png"]').animate({ left: '750px' }, 'slow');
    });
});

//create prompt to ask pets name, use innerText to add to page?
function myName() {
    let petName = prompt("What would you like to name your new cat?");
    document.getElementById("newName").textContent = petName;
}
//hunger bar
function hungerCheck() {
    const element = document.getElementById('foodCounter');
    let width = 0;
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = (width * 10) + '%';
        }
    }
    const id = setInterval(frame, 2000);
}
//sleepiness bar
function sleepCheck() {
    const element = document.getElementById('sleepCounter');
    let width = 0;
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = (width * 10) + '%';
        }
    }
    const id = setInterval(frame, 2000);
}
//boredom bar
function boredCheck() {
    const element = document.getElementById('boredCounter');
    let width = 0;
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = (width * 10) + '%';
        }
    }
    const id = setInterval(frame, 2000);
}




//light button
const light = document.getElementById("light");
const body = document.body;
let livingroom = true;
light.addEventListener("click", () => {
    if (livingroom) {
        body.style.backgroundImage = 'url("nighttimeRoom.jpg")';
    } else {
        body.style.backgroundImage = 'url("livingroom.jpg")';
    }
    livingroom = !livingroom
})


//food button
const food = document.getElementById("food");
const cat1 = document.getElementById("cat1");
const imageSources = ["cat1.png", "cat6.png"];
let currentImageIndex = 0;
food.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    cat1.src = imageSources[currentImageIndex];
});
function hungerDown() {
    document.getElementById('food') = cat.hunger -= 1
}


//play button
const play = document.getElementById("play");
const kitty1 = document.getElementById("cat1");
const imageSource = ["cat1.png", "cat3.png"];
let currentImagesIndex = 0;
play.addEventListener("click", function() {
    currentImagesIndex = (currentImagesIndex + 1) % imageSource.length;
    cat1.src = imageSource[currentImagesIndex];
    console.log(cat1.src)
});

//age button
const intervalTimer = setInterval(function () {
    document.getElementById('ageCounter').textContent = cat.age += 1
    if (cat.age === 21) {
        kitty1.src = "cat7.png"
        alert('Your sweet kitty has gone to the rainbow bridge')
        clearInterval(intervalTimer)
    }
}, 3000)