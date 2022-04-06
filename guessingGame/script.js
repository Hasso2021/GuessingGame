// random number between 1 and 100
let randNum = Math.floor(Math.random()*100)+1;
const showPrev = document.querySelector('.showPrev'); // paragraph that display prev guess selected
const showMsg = document.querySelector('.showMsg'); //  paragraph that display right or wrong selected
const hOl = document.querySelector('.hOl'); //  paragraph that display high or low selected
const guessSubmit = document.querySelector('.guessSubmit'); // submited button selected

const myInput = document.querySelector('.myInput'); //   number field  selected
// player first turn  
let playerTurn  = 1;
// reset button for the game
let resetBtn;
// function to check if you have won the game or not 
function checkGuess(){
    // store the user input from the input field 
    const userGuess = Number(myInput.value);
    
    // checkif the player is just starting if turn =1
    if(playerTurn===1){

        //the showPrev para too showur previous input
        showPrev.textContent= 'Previous guesses: ';
    }
    showPrev.textContent +=userGuess + ' ';
    // if you had guessed right 
    if(userGuess===randNum){
        // this line print the congrat para
        showMsg.textContent= 'Congratilation! Guessed right'
        showMsg.style.backgroundColor = 'green';
        hOl.textContent = '';
        setGameOver();
    // if you reach the maximum turn the game end
    }else if(playerTurn===10){
        showMsg.textContent= ' !!!Game Over !!!';
        hOl.textContent = '';   
        setGameOver();


    }
    else{
        showMsg.textContent ='Wrong!';
        showMsg.style.backgroundColor= 'red';
        if(userGuess < randNum){
            hOl.textContent = 'Last  Guess was too low!';
            hOl.style.backgroundColor='red';
        }else if (userGuess > randNum){
            hOl.textContent = 'Last Guess was too High!';
            hOl.style.backgroundColor='green';

        }
    }

playerTurn++;
myInput.value='';
myInput.focus();

}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    myInput.disabled = true;
    guessSubmit.disabled = true;
    resetBtn= document.createElement('button');
    resetBtn.textContent= 'Start new game';
    document.body.append(resetBtn);
    resetBtn.addEventListener('click', resetGame);
       
}

function resetGame(){
    playerTurn =1
    const resetParas = document.querySelectorAll('.allTheParas p');
    for(const paras of resetParas ){
        paras.textContent = '';
    }

    resetBtn.parentNode.removeChild(resetBtn);
    myInput.disabled = false;
    guessSubmit.disabled = false;
    myInput.focus();

    showMsg.style.backgroundColor = 'white';

    randNum = Math.floor(Math.random()*100)+ 1;

}