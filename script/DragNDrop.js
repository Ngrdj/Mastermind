    
/*--------------------------------------------------Variables------------------------------------------------------------*/
    
const slots = document.querySelectorAll('.slot');
const ballSlots = document.querySelectorAll('.ballSlot');

let currentBall;
let lastSlot;
let targetSlot;

/*--------------------------------------------------Evenements------------------------------------------------------------*/

for (const ball of colorBalls) {
ball.addEventListener('dragstart', dragStart);
ball.addEventListener('dragend', dragEnd);
}

for (const slot of slots) {
    slot.addEventListener('dragover', dragOver);
    slot.addEventListener('dragenter', dragEnter);
    slot.addEventListener('dragleave', dragLeave);
    slot.addEventListener('drop', dragDrop);
}
for (const ballSlot of ballSlots) {
    ballSlot.addEventListener('dragover', dragOver);
    ballSlot.addEventListener('dragenter', dragEnter);
    ballSlot.addEventListener('dragleave', dragLeave);
    ballSlot.addEventListener('drop', dragDrop);
}


/*--------------------------------------------------Fonctions------------------------------------------------------------*/

function dragStart() {

    currentBall=this;
    lastSlot = this.parentElement;   
    
}
function dragEnd() {
    

    
}
function dragOver(e) {
    
    e.preventDefault()

    
}
function dragEnter(e) {
    
    e.preventDefault()
    targetSlot = this;
    console.log(targetSlot.children.length);
}
function dragLeave() {

    
}
function dragDrop() {
    
    if(targetSlot.children.length > 0){
        
        lastSlot.append(currentBall);
        
    }else{
        targetSlot.append(currentBall);
    }
    
}