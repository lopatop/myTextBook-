const pet = {
    name: "Strider",
    happinsee: 50,
    hunger: 50,
    health: {
        hygiene: 75,
        energy: 50,
        dental: 100,
        coat: 30
    },
    sayHi(){
        console.log("Meow!");
    },
    sheckStatus(){
        console.log(`Счастье: ${this.happinsee}, Голод: ${this.hunger}`);
    },
    feedPet(foodQuantity){
        this.hunger -= foodQuantity;
        if (this.hunger < 0){
            this.hunter = 0; 
        }
        console.log(`Питомец покормлен! Текущий голов: ${this.hunter}`);
    }
}

function generateHealthReport(pet) {
    console.log(`Отчет о здоровье ${pet.name}:`);
    const health = pet.health;

    for (const key in health){
        console.log(`${key}: ${health[key]}`);
    }
}

function playWithPet(petObject) {
    petObject.happinsee += 20;
}

pet.feedPet(50);
playWithPet(pet);
pet.sayHi();
pet.sheckStatus();
generateHealthReport(pet);