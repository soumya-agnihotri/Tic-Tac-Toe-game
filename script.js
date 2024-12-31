// alert("welcome to the game");
const boxes = document.querySelectorAll(".box");
const reset= document.getElementsByClassName("reset");
const hide= document.getElementsByClassName("hide");
const newG = document.getElementsByClassName("newGame");


function resetGame(){
    for(box of boxes){
        turnO=true;
        enableBox();
    }
    hide[0].style.visibility="hidden";
}


let turnO=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("i was clicked");
        if(turnO){
            box.innerHTML="O";
            box.disabled = true;
            turnO = false;
        }
        else{
            box.innerHTML="X";
            box.disabled = true ;
            turnO = true;  
        }
        checkWinner();
    });
    
});


const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];


function checkWinner(){
    for(val of winPattern){
        let p1 = boxes[val[0]].innerText;
        let p2 = boxes[val[1]].innerText;
        let p3 = boxes[val[2]].innerText;
        if(p1!=="" && p2!=="" && p3!==""){
            if(p1==p2 && p2==p3){
                hide[0].style.visibility="visible";
                const win=document.getElementById("winner");
                win.innerText=`THE WINNER IS ${p1}`;
                boxes.forEach(box => {
                    box.disabled=true;
                });
            }
        }  
    }
}

function disableBox(){
    for(let box of boxes){
        box.disabled=true;
    }
    
}
function enableBox(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


reset[0].addEventListener("click",resetGame);
newG[0].addEventListener("click",()=>{
    resetGame();
});