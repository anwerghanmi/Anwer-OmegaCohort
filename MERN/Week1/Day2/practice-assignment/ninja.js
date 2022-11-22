class Ninja {
    constructor ( name ,health ){
        this.speed = 3;
        this.strength = 3;
        this.name = name ;
        this.health = health ;
    }
    sayName()
    {
        console.log(`name : ${this.name }`);
        return this;
    }
    showStats()
    {
        console.log(`name : ${this.name }`);
        console.log(`speed : ${this.speed }`);
        console.log(`strength : ${this.strength }`);
        console.log(`health : ${this.health }`);
        return this;
    }
    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}
const Ninja1 = new Ninja("hyabusa");
Ninja1.sayName().showStats().drinkSake();