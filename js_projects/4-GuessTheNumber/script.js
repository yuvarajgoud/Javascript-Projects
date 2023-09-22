let randomNumber=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[]
let numGuess = 1
let playGame = true
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  });
}

function validateGuess(guess){
  // checks whether entered number is valid
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess<1 && guess >100 ){
    alert("Please enter number in range of 1-100")
  } else {
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  // checks whether guessed number is correct,lower or higher
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame();
  } else if(guess < randomNumber){
    displayMessage(`Number is TOO low`)
  } else {
    displayMessage(`Number is TOO high`)
  } 
}
function displayGuess(guess){
  // displays the prev guess , remaining guesses
  userInput.value=''
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
  // interact with html and manipulate them
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function newGame(){
  //
  const newGame=document.querySelector('#newGame')
  newGame.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100 +1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    lowOrHi.innerHTML=''
    playGame=true;

  })

  
}
function endGame(){
  //
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false;
  newGame()
}