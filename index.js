const circleCross=document.querySelector("[circle-cross]");


const boxes=document.querySelectorAll(".box");

boxes.forEach(box=>{
    box.addEventListener("click",function(){
        if(this.innerText===""){
            if(circleCross.innerText==="O"){
                fillCircle(this);
            }else{
                fillCross(this);
            }
        }
    });
});







function fillCircle(boxValue){
        boxValue.innerText="O";
        circleCross.innerText="X";
    

}



function fillCross(boxValue){
        boxValue.innerText="X";
        circleCross.innerText="O";
    

}

const newGameButton=document.querySelector("new-game");

function startNewGame() {
    circleCross.innerText = "X";
    boxes.forEach(box => {
        box.innerText = "";
    });
}


newGameButton.addEventListener("click", function() {
    startNewGame();
});


