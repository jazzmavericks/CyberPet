

class Cyberpet {
    constructor() {
        this.happiness = 50;
        this.hunger = 50;
        this.thirst = 50;
    }
    updateUI() {
        document.querySelector(".hunger").textContent = this.hunger;
        document.querySelector(".thirst").textContent = this.thirst;
        document.querySelector(".happiness").textContent = this.happiness;
        document.querySelector(".pet").style.height = `${this.happiness}px`;
        document.querySelector(".pet").style.width = `${this.happiness}px`;
    }
    decreaseStats() {
        this.hunger += 2;
        this.thirst += 2;
        this.happiness -= 2;
    }
    eat() {
        if (this.hunger > 0){
        this.hunger -= 10;
        this.updateUI();
        }
    }
    drink() {
        if (this.thirst > 0){
        this.thirst -= 10;
        this.updateUI();
        }
    }
    play() {
        if (this.happiness < 100){
        this.happiness += 10;
        this.updateUI();
        }
    }
};

const pet = new Cyberpet();

document.querySelector(".eat-btn").addEventListener("click", () => {
    pet.eat();
    console.log(pet)
})

document.querySelector(".drink-btn").addEventListener("click", () => {
    pet.drink();
    console.log(pet)
})

document.querySelector(".play-btn").addEventListener("click", () => {
    pet.play();
    console.log(pet)
})

setInterval(() => {
    pet.decreaseStats();
    pet.updateUI();
}, 2000);