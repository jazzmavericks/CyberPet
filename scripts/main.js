const petImages = document.querySelectorAll(".pet-image");

// Define variables for specific buttons
const roarBtn = document.querySelector(".roar-btn");
const squawkBtn = document.querySelector(".squawk-btn");
const drumBtn = document.querySelector(".drum-btn");
const chuckleBtn = document.querySelector(".chuckle-btn");

petImages.forEach(image => {
    image.addEventListener("click", () => {
        const petType = image.getAttribute("data-pet-type");
        let selectedPet;

        // Create the selected pet instance based on the chosen type
        if (petType === "Wookie") {
            selectedPet = new Wookie();
            showSpecificAttribute("chuckleLevel", selectedPet.chuckleLevel);
            // Show the "chuckle" button for Wookie
            chuckleBtn.style.display = "block";
            // Hide other pet-specific buttons
            roarBtn.style.display = "none";
            squawkBtn.style.display = "none";
            drumBtn.style.display = "none";
        } else if (petType === "Porg") {
            selectedPet = new Porg();
            showSpecificAttribute("squawkLevel", selectedPet.squawkLevel);
            // Show the "squawk" button for Porg
            squawkBtn.style.display = "block";
            // Hide other pet-specific buttons
            roarBtn.style.display = "none";
            chuckleBtn.style.display = "none";
            drumBtn.style.display = "none";
        } else if (petType === "Ewok") {
            selectedPet = new Ewok();
            showSpecificAttribute("drumLevel", selectedPet.drumLevel);
            // Show the "drum" button for Ewok
            drumBtn.style.display = "block";
            // Hide other pet-specific buttons
            roarBtn.style.display = "none";
            squawkBtn.style.display = "none";
            chuckleBtn.style.display = "none";
        } else if (petType === "Rancor") {
            selectedPet = new Rancor();
            showSpecificAttribute("roarLevel", selectedPet.roarLevel);
            // Show the "roar" button for Rancor
            roarBtn.style.display = "block";
            // Hide other pet-specific buttons
            squawkBtn.style.display = "none";
            chuckleBtn.style.display = "none";
            drumBtn.style.display = "none";
        } else {
            // Handle unsupported or default selection
            alert("Please select a valid cyberpet type.");
            return;
        }

        // Hide the pet selection menu and display the game interface
        document.querySelector(".choosetext").style.display = "none";
        document.querySelector(".bigsmalltxt1").style.display = "none";
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
        super(); // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Wookie specific attribute
        this.chuckleLevel = 150;
    }

    // Custom method for the Wookie cyberpet
    chuckle() {
        if (this.chuckleLevel < 300) {
            this.chuckleLevel += 30;
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
        super(); // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Porg specific attribute
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
        this.squawkLevel -= 3;
    }

    // Override the updateUI method to display the squawk level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Porg specific update
        document.querySelector(".squawkLevel").style.width = `${this.squawkLevel}px`
    }
}

class Ewok extends Cyberpet {
    constructor() {
        super(); // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Ewok specific attribute
        this.drumLevel = 150;
    }

    // Custom method for the Ewok cyberpet
    drum() {
        if (this.drumLevel < 300) {
            this.drumLevel += 30;
            this.updateUI();
        }
    }

    // Ewok specific overrides of basic attributes and additional ones
    decreaseStats() {
        this.hunger += 3;
        this.thirst += 3;
        this.happiness -= 6;
        this.drumLevel -= 3;
    }

    // Override the updateUI method to display the drum level
    updateUI() {
        super.updateUI(); // Call the basic class updateUI method, and add the following Ewok specific update
        document.querySelector(".drumLevel").style.width = `${this.drumLevel}px`
    }
}

class Rancor extends Cyberpet {
    constructor() {
        super(); // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Rancor specific attribute
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

// Set up a new pet
const pet = new Cyberpet();

// Set up the event listeners for the gameplay buttons
document.querySelector(".eat-btn").addEventListener("click", () => {
    pet.eat();
})

document.querySelector(".drink-btn").addEventListener("click", () => {
    pet.drink();
})

document.querySelector(".play-btn").addEventListener("click", () => {
    pet.play();
})

document.querySelector(".chuckle-btn").addEventListener("click", () => {
    if (selectedPet instanceof Wookie) {
        selectedPet.chuckle();
    }
});

document.querySelector(".squawk-btn").addEventListener("click", () => {
    if (selectedPet instanceof Porg) {
        selectedPet.squawk();
    }
});

document.querySelector(".drum-btn").addEventListener("click", () => {
    if (selectedPet instanceof Ewok) {
        selectedPet.drum();
    }
});

document.querySelector(".roar-btn").addEventListener("click", () => {
    if (selectedPet instanceof Rancor) {
        selectedPet.roar();
    }
});


setInterval(() => {
    pet.decreaseStats();
    pet.updateUI();
}, 2000);

document.querySelector(".restart-btn").addEventListener("click", () => {
    selectedPet = null;
    document.querySelector(".choosetext").style.display = "block"; // Show the select a pet text
    document.querySelector(".bigsmalltxt1").style.display = "block"; // Show the instructions
    document.querySelector(".pet-selection").style.display = "block"; // Show the pet choices
    document.querySelector(".game-interface").style.display = "none"; // Do not show the game play section
});