    
/*--------------------------------------------------Variables------------------------------------------------------------*/
    
const slots = document.querySelectorAll('.slot');
const ballSlots = document.querySelectorAll('.ballSlot');
const colorBalls = document.querySelectorAll('.colorBall');
let currentBall;

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
    

    
}
function dragDrop() {
    /*console.log(this);*/
    /*if(this.hasChildNodes()){

    }else{*/
        this.append(currentBall);
   /* }*/
    
}