 /*ok*/
/*--------------------------------------------------Variables------------------------------------------------------------*/
const levelSelect = document.getElementById("levelSelect");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");


const red = document.getElementById("redBall");
const blue = document.getElementById("blueBall");
const green = document.getElementById("greenBall");
const yellow = document.getElementById("yellowBall");

/*if(level3....checked){*/
addEmptySlot();

let colorBalls = document.querySelectorAll('.colorBall');
let playerSeq = document.querySelectorAll(".slot");
let randomSeq = []

/*--------------------------------------------------Evenements------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded',genRandomSeq);
submit.addEventListener('click', compareSeq);
reset.addEventListener('click', reload);
levelSelect.addEventListener('change',reload);

/*--------------------------------------------------Fonctions------------------------------------------------------------*/
function reload (){
    genRandomSeq();
}
function addEmptySlot () {
    
    const newSlot = document.createElement("div");
    const emptyColor = document.createElement("div");
    newSlot.appendChild(emptyColor);

    emptyColor.id = "vide";
    emptyColor.className = "colorBall";
    newSlot.className = "ballSlot empty";

    document.getElementById("colorBalls").appendChild(newSlot);
    
}

function genRandomSeq () {

    randomSeq = [];
    for(i=0;i<4;i++){
    
        let nbalea = Math.floor(Math.random()*colorBalls.length);//génération d'un nombre aléatoire entre 0 et la longueur de la liste colorBalls

        randomSeq.push(colorBalls[nbalea].id);
    
    }
  console.log(randomSeq);
}

function compareSeq () {
//creation d'un tableau temporaire contenant le choix du joueur
    let playerSeqValue=[];
    let resultArr = [];
    
    for (const item of playerSeq) {
        
        if(!item.hasChildNodes()){
            playerSeqValue.push("vide");
        }
        else{
            playerSeqValue.push(item.children.item(0).id);

        }
    }
    for (const [playerItemIndex, playerItem] of playerSeqValue.entries()) {
        
        for (const [gameItemIndex, gameItem] of randomSeq.entries()){
            
                 if(playerItem === gameItem && playerItemIndex === gameItemIndex){
                     
                     resultArr.push("black")
                     
                 }else if(playerItem === gameItem && playerItemIndex !== gameItemIndex){
                     
                     resultArr.push("white")
                     
                 }
             }
        }
    

    /*for (const [playerItemIndex, playerItem] of ) */
//comparaison du tableau temporaire avec la séquence aleatoire
    
    
    /*if(playerSeqValue.some(e => randomSeq.includes(e))){
        
            resultArr.push("white")
        
    }*/
    
    console.log("séquence jeu : " + randomSeq); 
    console.log("séquence joueur : " + playerSeqValue);
    console.log(resultArr);
}
