// Your code here!

let player1 = {
    name: 'Dieter',
    health: 1200,
    attackDamage: 100,
    attackName: 'fireball',
    attackSkill: attack
}
let player2 = {
    name: 'Mike',
    health: 900,
    attackDamage: 200,
    attackName: 'iceshharp',
    attackSkill: attack
}

function attack (target) {
    if(target.health > 0){
        target.health -= this.attackDamage;
        if(target.health <= 0){
            return `${target.name} is dead`
        }
        return `${this.name} hit ${target.name} with ${this.attackName}\n that deals ${this.attackDamage}. ${target.name} has 
        ${target.health} healthpoints left`
    }else{
        return `you cant attack ${target.name},he is already dead...`
    }
}   

console.log(player1.attackSkill(player2));
