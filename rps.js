const computerPlay = () =>{
    const game = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * game.length);
    return game[random]
}

const computerSelection = computerPlay()


const playRound = (playerSelection, computerSelection) =>{

    let contP = 0
    let contC = 0
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        contP += 1
        return `You win! Rock beats Scissors --- Your Score: ${contP} Computer Score: ${contC}`  
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        contC += 1
        return `You lose! Paper beats Rock --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "ROCK" && computerSelection === "ROCK"){
        return `TIE --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        contC += 1
        return `You lose! Scissors beats Paper --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
        return `TIE --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        contP += 1
        return `You win! Paper beats Rock --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"){
        return `TIE --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        contP += 1
        return `You win! Scissors beat Paper --- Your Score: ${contP} Computer Score: ${contC}`
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        contC += 1
        return `You lose! Rock beats Scissors --- Your Score: ${contP} Computer Score: ${contC}`
    }
}

// console.log(playRound(playerSelection, computerSelection))


// const game = playRound => {
//     for(let i =0; i<5; i++){
//         console.log(playRound(playerSelection, computerSelection))
//     }
// }

// game(playRound)


//!    Dom

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let playerSelection = "rock";
    console.log(playRound(playerSelection, computerSelection))
});

const btn2 = document.querySelector('#btn2');
btn.addEventListener('click', () => {
    let playerSelection = "paper";
    console.log(playRound(playerSelection, computerSelection))
});

const btn3 = document.querySelector('#btn3');
btn.addEventListener('click', () => {
    let playerSelection = "scissors";
    console.log(playRound(playerSelection, computerSelection))
});


// const container = document.querySelector('#container');

// container.textContent = `Puntos jugador:  Puntos computadora:  `