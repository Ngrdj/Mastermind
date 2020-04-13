/*--------------------------------------------------Variables------------------------------------------------------------*/

const levelSelect = document.getElementById("levelSelect");
const levelRules = document.getElementById("levelRules");
const reset = document.getElementById("reset");

const playerSeq = document.getElementById("playerSeq");
const submit = document.getElementById("submit");

let levelSelected = levelSelect.options[levelSelect.selectedIndex].value;

/*let colorBalls = document.querySelectorAll('.colorBall');*/
let colorBalls = document.getElementsByClassName('colorBall');
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
    switch(levelSelected){
            
        case 'level1':
            /*si il y a au moins 1 "empty slots"*/
            /*if(){
                alert("veuillez complèter entièrement la séquence")
               }else {*/
                genRow();
                compareSeq(); 
              /* }*/
        break;
           
        case 'level2':
            addEmptyBall ()
            genRow();
            compareSeq();
        break;
        case 'level3':
            addEmptyBall ()
            genRow();
            compareSeq();
        break;
    }
});
    

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
    }
});

/*--------------------------------------------------Fonctions------------------------------------------------------------*/

function genRandomSeq () {

    randomSeq = [];
    randomSeq.push(colorBalls[Math.floor(Math.random())].getAttribute("data-color"));
    
    let numberOfColors=1;
    
    for(i=0;i<numberOfColors;i++){
        
        if(numberOfColors<4){
            
            //génération d'un nombre aléatoire entre 0 et la longueur de la liste colorBalls
            let nbalea = Math.floor(Math.random()*colorBalls.length);
            let randomColor = colorBalls[nbalea].getAttribute("data-color");
            
            switch(levelSelected) {
                    
                case 'level1':
                case 'level2':

                    if(!randomSeq.includes(randomColor)){
                        randomSeq.push(randomColor);
                        numberOfColors++;
                    }else{
                        i--;
                    }
                    break;
                case 'level3':

                    randomSeq.push(randomColor);
                    numberOfColors++;
                    break;
            }           
        }      
    }
}

function addEmptyBall () {
    
    const emptyBall = document.getElementById("empty");
    
    switch(levelSelected) {
        
        case 'level1':
 
            if(emptyBall.className = "colorBall"){
                
                emptyBall.className = "emptyBall";
                
                
            }
            
            break;
           
        case 'level2':
        case 'level3':

            if(emptyBall.className = "emptyBall"){
                
             emptyBall.className = "colorBall";
                
            }
            
            break;
    }
}

function reload (){ 
    
    console.log("reloaded")
    
    //On réassigne la valeur du niveau
    levelSelected = levelSelect.options[levelSelect.selectedIndex].value;
    
    //on remet le compteur de partie à zéro 
    counter = 0;
    
    //on supprime toute les ligne de classe "static"
    for (const row of document.querySelectorAll('.static')) {
        playerSeq.removeChild(row);
    }
    
    //on ajoute ou on supprime la colorball "vide"
    addEmptyBall();
    
    //On affiche la difficulté sélectionnée"
    switchRulesText();
    
    //On génère une nouvelle séquence aléatoire
    genRandomSeq();
    console.log(randomSeq);
}

function compareSeq () {

    let playerSeqValue=[];
    let resultArr = [];
    
    /*const pushBlack = resultArr.push("black");
    const pushwhite = resultArr.push("white");*/
    
    for (const item of playerSeqSlot) {
        
        if(!item.hasChildNodes()){
            playerSeqValue.push("empty");
        }
        else{
            playerSeqValue.push(item.children.item(0).getAttribute("data-color"));

        }
    }
    
   /* pushBlack.repeat(nombre element bonne pos);
    pushwhite.repeat(nombre element retrouve);
    
    if(playerSeqValue.some(e => array2.includes(e))){
        
    }*/
    
    playerSeqValue.forEach((playerItem, playerItemIndex) => {
        randomSeq.forEach((gameItem, gameItemIndex) => {  
            
                 if(playerItem === gameItem){
                     
                    resultArr.push("white");
                    
                    if(playerItemIndex === gameItemIndex){

                         resultArr.push("black");
                    
                    }
                 }
             })
        })  
    
    /*randomSeq.forEach((gameItem, gameItemIndex) => {
        playerSeqValue.forEach((playerItem, playerItemIndex) => {
            
            if(gameItem == playerItem){
                
                
                if(gameItemIndex == playerItemIndex){
                    resultArr.push("black");
                }else if (gameItemIndex !== playerItemIndex){
                    resultArr.push("white");
                }
            
            }     
        })
    })*/
    
    console.log("séquence jeu : " + randomSeq); 
    console.log("séquence joueur : " + playerSeqValue);
    console.log(resultArr);
}

function genRow () {
    
    //scroll auto sur la Séq courante.
    window.scroll(0,submit.offsetTop);
    
    //on cible l'élément précédant le bouton submit (séq actuelle) et on le déplace avec le bouton submit
    const currentRow=submit.previousElementSibling;
    currentRow.style.gridRow=counter+1;
    submit.style.gridRow=counter+1;
    
    //on crée une copie de la séquence en cours et on lui attribue la classe "static"
    const newRow = currentRow.cloneNode(true);
    newRow.classList.add("static");
    
    //on insère la copie dans le div "palyerSeq" et on lui attribue sa position
    playerSeq.appendChild(newRow);
    newRow.style.gridRow=counter;
    
    
}

function switchRulesText () {
    
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

function gameOver() {
    alert("gameOver");
    reload();
}