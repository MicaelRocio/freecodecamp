let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["Graveto"];

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterName = document.querySelector("#monsterName")
const monsterHealthText = document.querySelector("#monsterHealth")
const weapons = [
    {
        name: "Graveto",
        power: 5
    },
    {
        name: "Adaga",
        power: 30
    },
    {
        name: "Marelo de garra",
        power: 50
    },
    {
        name: "Espada",
        power: 100
    }
]

const monsters = [
    {
        name: "Slime",
        level: 2,
        vida: 15
    },
    {
        name: "Besta de Presas",
        level: 8,
        vida: 60
    },
    {
        name: "Dragão",
        level: 20,
        vida: 300
    }
]

const locations = [
    {
        name: "town square",
        "button text": ["Ir para Loja", "Ir para caverna", "Lutar contra o Dragão"],
        "button functions": [goStore, goCave, fightDragon],
        text: "Você está na praça da cidade. Você vê uma placa que diz \"Loja\"."
    },
    {
        name: "store",
        "button text": ["Comprar 10 de vida(10 ouro)", "Comprar arma (30 ouro)", "Ir para praça da cidade"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Você entra na loja."
    },
    {
        name: "caverna",
        "button text": ["Lutar contra Slime", "Lutar contra a Besta de Presas", "Ir para praça da cidade"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "Você entra na caverna. Você vê alguns monstros."
    },
    {
        name: "lutando",
        "button text": ["Atacar", "Esquivar", "Correr"],
        "button functions": [attack, dodge, goTown],
        text: "Você está lutando contra um montro."
    }, 
    {
        name: "kill monster",
        "button text": ["Ir para praça", "Ir para praça", "Ir para praça"],
        "button functions": [goTown, goTown, goTown],
        text: 'O monstro grita "Arg!" enquanto morre. Você ganha pontos de experiência e encontra ouro.'
    },
    {
        name: "Perdeu",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "Você morreu. &#x2620;"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    }
]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        healthText.innerText = health;
        goldText.innerText = gold;
    } else {
        text.innerText = "Você não tem ouro para comprar vida."
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "Agora você tem uma " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " Em seu inventario tem: " + inventory;
        } else {
            text.innerText = "Você não tem ouro suficiente para comprar uma arma.";
        }
    } else {
        text.innerText = "Você já possui a arma mais poderosa!";
        button2.innerText = "Vender arma por 15 de ouro";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "Você vendeu " + currentWeapon + ".";
        text.innerText += " Você tem em seu inventario: " + inventory;
    } else {
        text.innerText = "Não venda sua unica arma!"
    }
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].vida;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}
  

function attack() {
    text.innerText = "O " + monsters[fighting].name + " ataca.";
    text.innerText += " Você ataca ele com " + weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }
}

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
}

function dodge() {
    text.innerText = "Você se esquivou do ataque do " + monsters[fighting].name;
}

function defeatMonster() {
    update(locations[4]);
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = "stick";
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown()
}