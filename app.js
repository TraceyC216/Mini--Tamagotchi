//Create game class or object plus event listeners/handlers to call methods
class Game {
    constructor(hunger, sleepiness, boredom, age) {
    this.hunger = hunger
    this.sleepiness = sleepiness
    this.boredom = boredom
    this.age = age
}
}
const YoungPet = new Game(0, 0, 0)
//create prompt to ask pets name, use innerText to add to page?

//metric counters - https://www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/
let counts = setInterval(updated);
let upto = 0
function updated() {
    let count = document.getElementById("foodCounter");
    count.innerHTML == ++upto;
    if (upto === 10) {
        clearInterval(counts);
    }
}
function myName(){
   let petName = prompt("What would you like to name your new cat?");
   document.getElementById("newName").textContent = petName; 
 

}



const light = document.getElementById("light");
const body = document.body;

light.addEventListener("click", () => { 
if ("livingroom.jpg") {
    body.style.backgroundImage = 'url("nighttimeRoom.jpg")';
} else {
    body.style.backgroundImage = 'url("livingroom.jpg")';
}
})

const food = document.getElementById("food");
const cat1 = document.getElementById("cat1");

const imageSources = ["cat1.png", "cat6.png"];

let currentImageIndex = 0;

food.addEventListener("click", function(){
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    cat1.src = imageSources[currentImageIndex];
});

const play = document.getElementById("play");
const kitty1 = document.getElementById("cat1");

const imageSource = ["cat1.png", "cat3.png"];

let currentImagesIndex = 0;

play.addEventListener("click", function(){
    currentImagesIndex = (currentImagesIndex + 1) % imageSource.length;
    cat1.src = imageSource[currentImagesIndex];
});

