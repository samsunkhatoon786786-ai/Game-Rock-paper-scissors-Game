let userScore = 0 ;
let computerScore = 0 ;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const upUserScore = document.querySelector("#user-score");
const upComputerScore = document.querySelector("#camputer-score");

const  genComputerChoice = () => {
    const options = [ "Rock" , "Paper" , "Scissors" ]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner = (userWin , userChoice , computerChoice) => {
    if(userWin) {
        userScore++;
      upUserScore.innerText = userScore ;
      console.log("You Win !.");
      msg.innerText = `🏆 Victory! . 🎉 Your ${ userChoice }  Beats  ${ computerChoice } \n —— Amazing Play! ⚡ ——  `;
      msg.style.backgroundColor = "#d3d3d3";
      msg.style.color = "#39ff14";
      msg.style.textShadow = "3px 3px 5px gray"
    }else{
        computerScore++;
        upComputerScore.innerText = computerScore;
        console.log("You Lose !.");
        msg.innerText = `💔 You Lost! . ${ computerChoice } Beats Your  ${ userChoice } \n —— Try again! 🔥🏆 ——`;
        msg.style.backgroundColor = "#d3d3d3";
        msg.style.color = "#ff0000";
        msg.style.textShadow = "3px 3px 5px gray"
    }
};

const drowGame = () => {
    console.log("Game Is Draw !. ");
    msg.innerText = "⚖️ Game Tied!😄 Ready for Another Round? 🔄"
    msg.style.backgroundColor = "#d3d3d3";
    msg.style.color = "black";
    msg.style.textShadow = "3px 3px 5px gray"
};

const playGame = (userChoice) => {
console.log("user choice  = " , userChoice);
// genreat  computer choice
const computerChoice  = genComputerChoice();
console.log("computer choice  = " , computerChoice)

if( userChoice === computerChoice){
    drowGame();
}else{
    let userWin  = true;
    if ( userChoice === "Rock"){
        userWin = computerChoice === "Paper" ? false : true;    
    }else if ( userChoice == "Paper"){
        userWin = computerChoice === "Scissors" ? true : false;
    }else{
        userWin = computerChoice === "Rock" ? false : true ;
    }
    showWinner(userWin , computerChoice , userChoice);
}
};

choices.forEach((choices) => {
    choices.addEventListener("click" , () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
    });
});