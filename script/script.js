/*--------------------------------------------------Variables------------------------------------------------------------*/
const levelSelect = document.getElementById("levelSelect");
const levelRules = document.getElementById("levelRules");
const reset = document.getElementById("reset");

const playerSeq = document.getElementById("playerSeq");
const submit = document.getElementById("submit");

/*if(level3,level2){}*/
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
submit.addEventListener('click', genRow);
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
        /*levelSelect.optSelected= currentlevel;*/
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
    
    //on remet le compteur de partie à zéro et on génère une nouvelle séquence aléatoire
    counter = 0;
    genRandomSeq();
    
    //on supprime toute les ligne de classe "static"
    for (const row of document.querySelectorAll('.static')) {
        playerSeq.removeChild(row);
    }
    
    //On affiche la difficulté sélectionnée"
    switchLevel();
    
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
        
        //génération d'un nombre aléatoire entre 0 et la longueur de la liste colorBalls
        let nbalea = Math.floor(Math.random()*colorBalls.length);

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

function genRow () {
    
    //scroll auto sur la Séq courante.
    window.scroll(0,submit.offsetTop);
    
    //on cible l'élément précédant le bouton submit (séq actuelle) et on le déplace avec le bouton submit
    const currentRow=this.previousElementSibling;
    currentRow.style.gridRow=counter+1;
    submit.style.gridRow=counter+1;
    
    //on crée une copie de la séquence en cours et on lui attribue la classe "static"
    const newRow = currentRow.cloneNode(true);
    newRow.classList.add("static");
    
    //on insère la copie dans le div "palyerSeq" et on lui attribue sa position
    playerSeq.appendChild(newRow);
    newRow.style.gridRow=counter;
    
    
}

function switchLevel () {
   
    let levelSelected = levelSelect.options[levelSelect.selectedIndex].value;
    
    const rule1 = document.getElementById("rule1");
    const rule2 = document.getElementById("rule2");
    
    
    switch(levelSelected) {
    
      case 'level1':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "PAS de double couleur";
        rule2.innerHTML = "Les emplacements NE peuvent PAS rester vides";
        break;
           
      case 'level2':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "PAS de double couleur";
        rule2.innerHTML = "Les emplacements peuvent rester vides";
             
        break;
      case 'level3':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "Double couleur possible";
        rule2.innerHTML = "Les emplacements peuvent rester vides";
        break;
    }
    
}