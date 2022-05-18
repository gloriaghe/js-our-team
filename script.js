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

//funzione per inserire i membri

function inserisciMembro(oggetto) {
    const stampa = document.querySelector(".team-container");

    const creatoDivTeam = document.createElement("div");
    creatoDivTeam.classList.add("team-card");
    const creatoDivImg = document.createElement("div");
    creatoDivImg.classList.add("card-image");
    creatoDivTeam.append(creatoDivImg);
    const creatoImg = document.createElement("img");
    creatoImg.src= oggetto.foto;
    creatoImg.alt= oggetto.nome;
    creatoDivImg.append(creatoImg);
    const creatoDivText = document.createElement("div");
    creatoDivText.classList.add("card-text");
    creatoDivTeam.append(creatoDivText);
    const creatoh3 = document.createElement("h3");
    creatoh3.append(oggetto.nome);
    creatoDivText.append(creatoh3);
    const creatop = document.createElement("p");
    creatop.append(oggetto.ruolo);
    creatoDivText.append(creatop);
    stampa.append(creatoDivTeam);

}

//ciclo per creare card membri in Html

for (let i= 0; i<membriTeam.length; i++) {
    
    inserisciMembro(membriTeam[i]);

}

// bonus

const AddButton = document.querySelector("button");





AddButton.addEventListener("click",
function() {
    const nameNewMember = document.querySelector("#name");
    let newName = nameNewMember.value;
    
    const roleNewMember = document.querySelector("#role");
    let newRole = roleNewMember.value;
    
    const imageNewMember= document.querySelector("#image");
    let newImg = imageNewMember.value;

    
        let nuovoMembro = {
            "nome" : newName,
            "ruolo" : newRole,
            "foto" : newImg
        };

        membriTeam.push(nuovoMembro);
        console.log([membriTeam]);
        console.log([nuovoMembro]);

        inserisciMembro(nuovoMembro);


    }
)

console.log([membriTeam])


