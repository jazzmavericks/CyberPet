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

class Wookie extends Cyberpet {
    // Add specific properties and methods for Wookie cyberpet here
}

class Porg extends Cyberpet {
    // Add specific properties and methods for Porg cyberpet here
}

class Ewok extends Cyberpet {
    // Add specific properties and methods for Ewok cyberpet here
}

class Rancor extends Cyberpet {
    constructor() {
        super(); // Call the constructor of the base class
        this.roarLevel = 50;
    }

    // Custom method for the Rancor cyberpet
    roar() {
        if (this.roarLevel < 100) {
            this.roarLevel += 10;
            this.updateUI();
        }
    }

    // Override the decreaseStats method to make the Rancor more resilient
    decreaseStats() {
        this.hunger += 1;
        this.thirst += 1;
        this.happiness -= 2;
        this.roarLevel -= 1;
    }

    // Override the updateUI method to display the roar level
    updateUI() {
        super.updateUI(); // Call the base class updateUI method
        document.querySelector(".roar-level").textContent = this.roarLevel;
    }
}

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