/*--------------------------------------------------Variables------------------------------------------------------------*/
const levelSelect = document.getElementById("levelSelect");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");


const red = document.getElementById("redBall");
const blue = document.getElementById("blueBall");
const green = document.getElementById("greenBall");
const yellow = document.getElementById("yellowBall");
const purple = document.getElementById("purpleBall");
const orange = document.getElementById("orangeBall");
const pink = document.getElementById("pinkBall");

const playerSeq = document.getElementById("playerSeq");

/*if(level3,level2){*/
addEmptySlot();

let colorBalls = document.querySelectorAll('.colorBall');
let playerSeqSlot = document.querySelectorAll(".slot");



let randomSeq = []

let counter = 0;

/*--------------------------------------------------Evenements------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded',reload);

submit.addEventListener('click', ()=> {
    
    counter++;
    console.log(counter);
    if(counter >= 10) {
        gameOver();
        }
    });

submit.addEventListener('click', copyRow);
submit.addEventListener('click', compareSeq);

reset.addEventListener('click',()=>{
    
    const reloadConfirm = confirm("Êtes vous sûr de vouloir recommencer la partie ?");
   if(reloadConfirm == true){
        reload();
    }
});                               
                                    
levelSelect.addEventListener('change',()=>{
    
    const reloadConfirm = confirm("Voulez vous changer de difficulté et recommencer la partie ?");
    
    if(reloadConfirm == true){
        reload();
    }else{
        levelSelect.optSelected= currentlevel;
        console.log(levelSelect.options[0]);
    }
});



/*--------------------------------------------------Fonctions------------------------------------------------------------*/
function gameOver() {
    alert("gameOver");
    reload();
}
function reload (){
    console.log("reloaded")
    counter = 0;
    genRandomSeq();

    for (const row of document.querySelectorAll('.static')) {
        playerSeq.removeChild(row);
    }
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
}

function compareSeq () {

    let playerSeqValue=[];
    let resultArr = [];
    
    for (const item of playerSeqSlot) {
        
        if(!item.hasChildNodes()){
            playerSeqValue.push("vide");
        }
        else{
            playerSeqValue.push(item.children.item(0).id);

        }
    }
    playerSeqValue.forEach((playerItem, playerItemIndex) => {
        randomSeq.forEach((gameItem, gameItemIndex) => {  
            
                 if(playerItem === gameItem && playerItemIndex === gameItemIndex){
                     
                     resultArr.push("black")
                     
                 }else if(playerItem === gameItem && playerItemIndex !== gameItemIndex){
                     
                     resultArr.push("white")
                     
                 }
             })
        })   
    
    console.log("séquence jeu : " + randomSeq); 
    console.log("séquence joueur : " + playerSeqValue);
    console.log(resultArr);
}

function copyRow () {
    
    let currentRow=this.previousElementSibling;
    currentRow.style.gridRow=counter+1;
    submit.style.gridRow=counter+1;
    
    let newRow = currentRow.cloneNode(true); newRow.classList.add("static");
    document.getElementById("playerSeq").appendChild(newRow);
    newRow.style.gridRow=counter;
    //empêcher le drag des newLines
    /*console.log(newRow.children)
    newRow.children.setAttribute("draggable", "false");*/
    /*console.log(newRow);*/
    
}
