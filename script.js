let random = parseInt(Math.random() * 100 + 1);

let submit = document.getElementById('submitGuess');
let guessInput = document.getElementById('guessField');
let previous = document.getElementById('prevGuesses');
let remaining = document.getElementById('remGuesses');
let lowOrHi = document.querySelector('.lowOrHigh');
let result = document.querySelector('.result');

let p = document.createElement('p');

let numGuesses = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(guessInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a number less than 100");
    }
    else{
        if(numGuesses >=10){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${random}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`You guessed the right number!!`);
        endGame();
    }
    else if(guess<random){
        displayMessage(`Random number is higher than your guess`);
    }
    else if(guess>random){
        displayMessage(`Random number is lower than your guess`);
    }
}

function displayGuess(guess){
    guessInput.value = '';
    previous.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuesses}`;
    numGuesses++;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    let newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1);
        numGuesses = 1;
        previous.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`
        guessInput.removeAttribute('disabled');
        result.removeChild(p);
        displayMessage('');

        playGame = true;
    })
}