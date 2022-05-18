// arrey di oggetti (membri team)

const membriTeam = 
[
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Carrol',
        'ruolo': 'Chief Editor',
        'foto': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'img/scott-estrada-developer.jpg'
    },   
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'img/barbara-ramos-graphic-designer.jpg'
    }     
];

//ciclo per creare card membri in Html
const stampa = document.querySelector(".team-container");


for (let i= 0; i<membriTeam.length; i++) {

    const creatoDivTeam = document.createElement("div");
    creatoDivTeam.classList.add("team-card");
    const creatoDivImg = document.createElement("div");
    creatoDivImg.classList.add("card-image");
    creatoDivTeam.append(creatoDivImg);
    const creatoImg = document.createElement("img");
    creatoImg.src= membriTeam[i].foto;
    creatoImg.alt= membriTeam[i].nome;
    creatoDivImg.append(creatoImg);
    const creatoDivText = document.createElement("div");
    creatoDivText.classList.add("card-text");
    creatoDivTeam.append(creatoDivText);
    const creatoh3 = document.createElement("h3");
    creatoh3.append(membriTeam[i].nome);
    creatoDivText.append(creatoh3);
    const creatop = document.createElement("p");
    creatop.append(membriTeam[i].ruolo);
    creatoDivText.append(creatop);



    
    stampa.append(creatoDivTeam);
}

// bonus

const AddButton = document.querySelector("button");

const nameNewMember = document.querySelector("#name");
let newName = nameNewMember.value;

const roleNewMember = document.querySelector("#role");
let newRole = roleNewMember.value;

const imageNewMember= document.querySelector("#image");
let newImg = imageNewMember.value;



AddButton.addEventListener("click",
function() {
        
        let nuovoMembro = {
            "nome" : newName,
            "ruolo" : newRole,
            "foto" : newImg
        };

        membriTeam.push(nuovoMembro);
        console.log([membriTeam])


        const creatoDivTeamNew = document.createElement("div");
        creatoDivTeamNew.classList.add("team-card");
        const creatoDivImgNew = document.createElement("div");
        creatoDivImgNew.classList.add("card-image");
        creatoDivTeamNew.append(creatoDivImgNew);
        const creatoImgNew = document.createElement("img");
        creatoImgNew.src= nuovoMembro.foto;
        creatoImgNew.alt= nuovoMembro.nome;
        creatoDivImgNew.append(creatoImgNew);
        const creatoDivTextNew = document.createElement("div");
        creatoDivTextNew.classList.add("card-text");
        creatoDivTeamNew.append(creatoDivTextNew);
        const creatoh3New = document.createElement("h3");
        creatoh3New.append(nuovoMembro.nome);
        creatoDivTextNew.append(creatoh3New);
        const creatopNew = document.createElement("p");
        creatopNew.append(nuovoMembro.ruolo);
        creatoDivTextNew.append(creatopNew);
        stampa.append(creatoDivTeamNew);

    }
)

console.log([membriTeam])