 
/*--------------------------------------------------Variables------------------------------------------------------------*/
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");


const red = document.getElementById("redBall");
const blue = document.getElementById("blueBall");
const green = document.getElementById("greenBall");
const yellow = document.getElementById("yellowBall");

let userSeq = document.querySelectorAll(".slot");
let randomSeq = []

/*--------------------------------------------------Evenements------------------------------------------------------------*/
 

document.addEventListener('DOMContentLoaded',genRandomSeq);
submit.addEventListener('click', compareSeq);
reset.addEventListener('click', genRandomSeq);


/*--------------------------------------------------Fonctions------------------------------------------------------------*/
function genRandomSeq () {
    
    for(i=0;i<4;i++){
    
        let nbalea = Math.floor(Math.random()*colorBalls.length);//génération d'un nombre aléatoire entre 0 et la longueur de la liste colorBalls

        randomSeq.push(colorBalls[nbalea].id);
    
    }
    randomSeq.push("vide");
 console.log(randomSeq);   
}

function compareSeq () {

   let userSeqValue=[]
    
    for (const item of userSeq) {
        userSeqValue.push(item.children.item(0).id);
        console.log(userSeqValue);
}
    console.log(userSeqValue);
}
