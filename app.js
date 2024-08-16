let userScore= 0; 
let compScore=0;

const choices= document.querySelectorAll(".choice");
let msg =document.querySelector(".msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options = ["rock", "paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =() =>{
    console.log("game was draw");
    msg.innerText ="Game was draw. Play again !";
    msg.style.backgroundColor = "#081b31" ;
    
};

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("you win!");
        msg.innerText =`you win! you ${ userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor ="green";
       
    }else{
        console.log("you lose!");
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `you lose! ${ compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}



const playGame=(userChoice) =>{
    console.log("userChoice=",userChoice);
    //  Generate computer choice
    const compChoice= genCompChoice();
    console.log("compChoice=",compChoice);

    if(userChoice===compChoice){
        // Draw Game
        drawGame();
       
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor paper
            userWin= compChoice==="paper"?false: true;
        }else if(userChoice==="paper"){
            // rock scissor
            userWin= compChoice==="scissor"?false:true;
        }else{
            //  paper rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        // console.log(userChoice);
        // console.log("choice was clicked");
        playGame(userChoice);
     });
});
