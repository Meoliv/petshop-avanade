const moment = require('moment');
const fs = require('fs');
// Lê de forma sincrona o arquivo JSON através do modulo fs e converte em JS object

const db = JSON.parse(fs.readFileSync("./db.json"));
// Acessa o array de pets
const pets = db.pets;
console.log(moment().format());


const nomePetshop = "PETSHOP AVANADE";

const writeJson = (pets) => {
    // Converte o JS object atualizado em JSON e sobrescreve o db.json de forma sincrona
    var _pets = JSON.stringify(pets);
    fs.writeFileSync('db.josn', _pets, 'utf-8')
}

const listarPets = () => {
    for (let pet of pets) {
        //for (let i = 0; i < pets.length; i++) {
        //console.log(pets[i].nome);
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`)
    }
}
listarPets();

const vacinarPets = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado!`)
    } else {
        console.log(`${pet.nome} já está vacinado!`)
    }

}

const campanhaVacina = () => {
    let vacinados = 0;
    bd.pets = bd.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinados++;
            vacinarPets(pet);
        }
        return pet;
    });
    console.log(`Pets vacinados na campanha: ${vacinados}`);

}

console.log("Novo Cliente: ");
const insereCliente = (nome, tipo, idade, raca, tutor, contato, vacinado) => {
    novoPet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: []

    }
    pets.push(novoPet);
    writeJson(db);
}
insereCliente('Nala', 'Calopsita', 1, 'Braca-Latino', 'Mel', '(87)0000-0000', false, []);
console.log();
console.log(novoPet)


const darBanhoPet = (pet) => {
    if (!pet.servicos.includes('banho')) {
        pet.servicos.push('banho');
        console.log(moment().format("L - LTS"));
        console.log(`${pet.nome} tomou banho e está cheirosinho!!`);
    } else {
        console.log(`${pet.nome} já tomou banho e está cheirosinho!!`);
    }
}
darBanhoPet(pets[2]);
const tosarPet = (pet) => {
    if (!pet.servicos.includes('tosa')) {
        pet.servicos.push('tosa');
        console.log(moment().format("L - LTS"));
        console.log(`${pet.nome} está com o cabelo pentiadinho!!`);
    } else {
        console.log(`${pet.nome} já está com o cabelo pentiadinho. :)`);
    }
}
tosarPet(pets[1]);
const apararUnhasPet = (pet) => {
    if (!pet.servicos.includes('unha')) {
        pet.servicos.push('unha');
        console.log(moment().format("L - LTS"));
        console.log(`${pet.nome} está com as unhas aparadinhas!!`);
    } else {
        console.log(`${pet.nome} já está com as unhas aparadas. :)`);
    }
}
apararUnhasPet(pets[0]);

const atenderCliente = (pet, servico) => {
    servico(pet);
    writeJson(db);
}
console.log();
console.log(" - Atender Cliente: - ");
atenderCliente(pets[0], apararUnhasPet);
atenderCliente(pets[2], apararUnhasPet);

const buscarPet = (nomePet) => {
    let petEcontrado = bd.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEcontrado ? petEcontrado : `Não foi encontrado nenhum pet com esse nome ${nomePet}`;
}

const filtrarPet = (tipoPet) => {
    let petsEncontrados = bd.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });
    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Cliente especial!!, ${pet.nome}Você ganhou um desconto.`);

    } else {
        console.log(`Cliente, ${pet.nome}você ainda não tem descontos.`);

    }
}