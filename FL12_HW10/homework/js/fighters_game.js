function Fighter(obj){

    const maximalHp = obj.hp;
    obj.numberOfWins = 0;
    obj.numberOfLosses = 0;

    this.getName = () => obj.name;
    this.getDamage = () => obj.damage;
    this.getStrength = () => obj.strength;
    this.getAgility = () => obj.agility;
    this.getHealth = () => obj.hp;
    this.attack = (defender) => {
        let randomNumber = Math.floor(Math.random() * 101) ;
        let probabilityOfSuccess = 100 - (defender.getStrength() + defender.getAgility());
        if (probabilityOfSuccess >= randomNumber) {
            defender.dealDamage(obj.damage);
            console.log(`${obj.name} makes ${obj.damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${obj.name} attack missed`);
        }
    };
    this.logCombatHistory = () => {
        console.log(`Name: ${obj.name}, Wins: ${obj.numberOfWins}, Losses: ${obj.numberOfLosses}`);
    };
    this.heal= (amountOfHeal) => {
        obj.hp = obj.hp + amountOfHeal;
        if (obj.hp > maximalHp){
            obj.hp = maximalHp;
        }
    };
    this.dealDamage = (amountOfDamage) => {
        obj.hp = obj.hp - amountOfDamage;
        if (obj.hp < 0){
            obj.hp = 0;
        }
    };
    this.addWin = () => obj.numberOfWins++ ;
    this.addLosses = () => obj.numberOfLosses++ ;
}

function battle(first, second) {
    if (!first.getHealth()) {
        console.log(`${first.getName()} is dead and can't fight.`);
    } else if (!second.getHealth()) {
        console.log(`${second.getName()} is dead and can't fight.`);
    }
    while (first.getHealth() && second.getHealth()) {
        first.attack(second);
        if (!second.getHealth()) {
            second.addLosses();
            first.addWin();
            console.log(`${first.getName()} has won!`);
        } else {
            second.attack(first);
        }
        if (!first.getHealth()) {
            first.addLosses();
            second.addWin();
            console.log(`${second.getName()} has won!`);
        }
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 90, strength: 30, agility: 10});
const fighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 20, agility: 30});