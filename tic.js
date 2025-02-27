let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#btns");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winners=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box) =>{
    box.addEventListener("click",()=>
    {
       console.log("box was clicked");
       if(turnO)
       {
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkwinner();
    });
});
const showwinner=(winner)=>
{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabled();
}
const disabled=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enabled=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const resetgame=()=>
{
    turnO=true;
    enabled();
    msgcontainer.classList.add("hide");
}
const newgame=()=>
{

}


const checkwinner=()=>
{
    for (let pattern of winners)
    {  
        //console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1==pos2&&pos2==pos3)
            {
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);