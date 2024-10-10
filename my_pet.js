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
    }
}


pet.sayHi();
pet.sheckStatus();