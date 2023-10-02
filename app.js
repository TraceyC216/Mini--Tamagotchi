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
   const petName = prompt("What would you like to name your new cat?")
   
}
document.getElementById(newName).textContent = petName;
