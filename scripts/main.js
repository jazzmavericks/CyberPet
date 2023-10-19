const petImages = document.querySelectorAll(".pet-image");
petImages.forEach(image => {
    image.addEventListener("click", () => {
        const petType = image.getAttribute("data-pet-type");
        let selectedPet;

        // Create the selected pet instance based on the chosen type
        if (petType === "Wookie") {
            selectedPet = new Wookie();
            showSpecificAttribute("chuckleLevel", selectedPet.chuckleLevel);
        } else if (petType === "Porg") {
            selectedPet = new Porg();
            showSpecificAttribute("squawkLevel", selectedPet.squawkLevel);
        } else if (petType === "Ewok") {
            selectedPet = new Ewok();
            showSpecificAttribute("cuddlyLevel", selectedPet.cuddlyLevel);
        } else if (petType === "Rancor") {
            selectedPet = new Rancor();
            showSpecificAttribute("roarLevel", selectedPet.roarLevel);
        } else {
            // Handle unsupported or default selection
            alert("Please select a valid cyberpet type.");
            return;
        }

        // Hide the pet selection menu and display the game interface
        document.querySelector(".pet-selection").style.display = "none";
        document.querySelector(".game-interface").style.display = "block";

        // Start the game with the selected pet
        startGame(selectedPet);
    });
});

// Function to display the appropriate attributes for the selected pet
function showSpecificAttribute(attributeName, attributeValue) {
    const attributeSpecificContainer = document.querySelector(".attribute-specific");
    attributeSpecificContainer.innerHTML = `
        <label>${attributeName}:</label>
        <div class="${attributeName}-bar">
            <div class="${attributeName}">${attributeValue}</div>
        </div>
    `;
}

// Function to start the game with the selected pet
function startGame(pet) {
}

class Cyberpet {
    constructor() {
        this.happiness = 150;
        this.hunger = 150;
        this.thirst = 150;
    }
    updateUI() {
        document.querySelector(".hunger").style.width = `${this.hunger}px`
        document.querySelector(".thirst").style.width = `${this.thirst}px`
        document.querySelector(".happiness").style.width = `${this.happiness}px`
    }
    decreaseStats() {
        this.hunger += 6;
        this.thirst += 6;
        this.happiness -= 6;
    }
    eat() {
        if (this.hunger > 0){
        this.hunger -= 30;
        this.updateUI();
        }
    }
    drink() {
        if (this.thirst > 0){
        this.thirst -= 30;
        this.updateUI();
        }
    }
    play() {
        if (this.happiness < 300){
        this.happiness += 30;
        this.updateUI();
        }
    }
};

class Wookie extends Cyberpet {
    constructor() {
        super();; // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Wookie specific attribute
        this.chuckleLevel = 150;
    }

    // Custom method for the Wookie cyberpet
    chuckle() {
        if (this.chuckleLevel < 300) {
            this.chuckleLevel -= 30;
            this.updateUI();
        }
    }

    // Wookie specific overrides of basic attributes and additional ones
    decreaseStats() {
        this.hunger += 3;
        this.thirst += 3;
        this.happiness -= 6;
        this.chuckleLevel -= 3;
    }

    // Override the updateUI method to display the chuckle level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Wookie specific update
        document.querySelector(".chuckleLevel").style.width = `${this.chuckleLevel}px`
    }
}

class Porg extends Cyberpet {
    constructor() {
        super();; // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Porg specific attribute
        this.squawkLevel = 150;
    }

    // Custom method for the Porg cyberpet
    squawk() {
        if (this.squawkLevel < 300) {
            this.squawkLevel += 30;
            this.updateUI();
        }
    }

    // Porg specific overrides of basic attributes and additional ones
    decreaseStats() {
        this.hunger += 3;
        this.thirst += 3;
        this.happiness -= 6;
        this.cuddlyLevel -= 3;
    }

    // Override the updateUI method to display the squawk level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Porg specific update
        document.querySelector(".squawkLevel").style.width = `${this.squawkLevel}px`
    }
}

class Ewok extends Cyberpet {
    constructor() {
        super();; // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Ewok specific attribute
        this.cuddlyLevel = 150;
    }

    // Custom method for the Ewok cyberpet
    cuddly() {
        if (this.cuddlyLevel < 300) {
            this.cuddlyLevel += 30;
            this.updateUI();
        }
    }

    // Ewok specific overrides of basic attributes and additional ones
    decreaseStats() {
        this.hunger += 3;
        this.thirst += 3;
        this.happiness -= 6;
        this.cuddlyLevel -= 3;
    }

    // Override the updateUI method to display the cuddly level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Ewok specific update
        document.querySelector(".cuddlyLevel").style.width = `${this.cuddlyLevel}px`
    }
}

class Rancor extends Cyberpet {
    constructor() {
        super();; // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Rancor specific attribute
        this.roarLevel = 150;
    }

    // Custom method for the Rancor cyberpet
    roar() {
        if (this.roarLevel < 300) {
            this.roarLevel += 30;
            this.updateUI();
        }
    }

    // Rancor specific overrides of basic attributes and additional ones
    decreaseStats() {
        this.hunger += 3;
        this.thirst += 3;
        this.happiness -= 6;
        this.roarLevel -= 3;
    }

    // Override the updateUI method to display the roar level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Rancor specific update
        document.querySelector(".roarLevel").style.width = `${this.roarLevel}px`
    }
}

const pet = new Cyberpet();

document.querySelector(".eat-btn").addEventListener("click", () => {
    pet.eat();
})

document.querySelector(".drink-btn").addEventListener("click", () => {
    pet.drink();
})

document.querySelector(".play-btn").addEventListener("click", () => {
    pet.play();
})

setInterval(() => {
    pet.decreaseStats();
    pet.updateUI();
}, 2000);