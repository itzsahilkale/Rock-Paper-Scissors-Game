let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};
const drawGame = ()=> {
    
    msg.innerText = "Game Was Draw Play Again"
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("YOU WIN!");
        msg.innerText = "YOU WIN";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        
        msg.innerText = "YOU LOSE";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer choice:", computerChoice);
    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin =computerChoice ==="paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice ==="scissors"?false:true;
        }
        else{
            userWin = computerChoice ==="rock"? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
