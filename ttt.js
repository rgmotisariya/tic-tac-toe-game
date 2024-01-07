let boxes= document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newbtn=document.querySelector("#new-btn");
let msgctnr=document.querySelector(".msg-ctnr");
let msg=document.querySelector("#msg");

let turnO =true; //payer X ,payer O.
 const winptn =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [8,4,0],
    [2,4,6]
 ];

 boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText ="O";
            turnO =false;
        }
        else{
            box.innerText="X";
            turnO =true;

        }
        box.disabled = true;

        checkwinner();
    });
 });

const checkwinner = () => {
    for (let pattern of winptn){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
           if(pos1val  === pos2val && pos2val === pos3val){
              console.log("winner",pos1val);
              showwinner(pos1val);
           }
        }
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulaton🎉🎊,winner is ${winner}`;
    msgctnr.classList.remove("hide");
    disabled();

};

const disabled = () => {
   for(let box of boxes){
    box.disabled= true;
   }
};
const enable =() => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
       } 
};


const resetgame = () => {
   turnO = true;
   enable();
   msgctnr.classList.add("hide");
};
newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);