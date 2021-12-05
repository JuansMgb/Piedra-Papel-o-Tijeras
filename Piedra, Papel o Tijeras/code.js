
const ROCA = "piedra"; 
const PAPEL = "papel";
const TIJERA = "tijera";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rocaBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("result");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");



rocaBtn.addEventListener("click", ()=>{
    play(ROCA);

});

papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
});


tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA);  
});


function play(userOption){
    userImg.src = "./"+userOption+".png";

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "./"+machineOption+".png";


    switch(result){
        case TIE:
            resultText.innerHTML = "Baia Empataron :0";
            break;
        case WIN:
            resultText.innerHTML = "Genial Has Ganado :D";
            break;
        case LOST:
            resultText.innerHTML = "Uuy Que Pena Has Perdido :C";
            break;  
    }

}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;

    }

}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;

    }else if(userOption === ROCA){

        if(machineOption === PAPEL) return LOST;
        if(machineOption === TIJERA) return WIN;

    }else if(userOption === PAPEL){

        if(machineOption === TIJERA) return LOST;
        if(machineOption === ROCA) return WIN;
    }

    else if(userOption === TIJERA){

        if(machineOption === ROCA) return LOST;
        if(machineOption === PAPEL) return WIN;

    }

 

}
 


