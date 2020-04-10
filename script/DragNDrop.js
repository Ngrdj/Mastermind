    
/*--------------------------------------------------Variables------------------------------------------------------------*/
    
const slots = document.querySelectorAll('.slot');
const ballSlots = document.querySelectorAll('.ballSlot');

let currentBall;
let lastSlot;

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
    
}
function dragEnd() {
    

    
}
function dragOver(e) {
    
    e.preventDefault()

    
}
function dragEnter(e) {
    
    e.preventDefault()

    
}
function dragLeave() {
    console.log(this);
lastSlot = this;
    
}
function dragDrop() {
    console.log(this.children.length)
    if(this.children.length > 0){
        lastSlot.append(currentBall);
    }else{
        this.append(currentBall);
    }
    
}