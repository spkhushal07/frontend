let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userId=document.querySelector("#user-board");
const compId=document.querySelector("#comp-board");

const drawGame = () =>{
    msg.innerHTML="Game Draw Play Again!!!!";
    msg.style.backgroundColor=" rgb(1, 44, 56)";

}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        msg.innerHTML=`You Win!!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
        userScore++;      
        userId.innerHTML=userScore;
    }
    else
    {
        msg.innerHTML=`You loss!!!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";    
        compScore++;   
        compId.innerHTML=compScore;
    }
}
const genCompChoice =() =>{
    let option=["rock","paper","scissor"];
    const choiceNum=Math.floor(Math.random()*3);
    return option[choiceNum];
}

const playGame= (userChoice) =>{
    const compChoice =genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock")
        {
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice==="scissor"?false:true;
        }
        else{
            userWin = compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice => {
    choice.addEventListener("click" ,() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
}))