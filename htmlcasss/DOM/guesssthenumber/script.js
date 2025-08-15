let random = (Math.floor( ((Math.random() * 100) + 1)))
console.log(random);
const submit = document.querySelector("#subt")
const subtfield = document.querySelector("#guessField");
const gusses = document.querySelector(".guesses");
const remaniningguesese = document.querySelector(".lastResult");
const loworhi = document.querySelector(".lowOrHi");
const resultpara = document.querySelector(".resultParas");

const p = document.createElement('p');

let pregusses = [];
let numgusses = 1;
let palygame = true;

if(palygame){
  submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(subtfield.value)
    validateguess(guess)
  })
}

function validateguess(guess){
  if(isNaN(guess))
  {
    alert('Please enter a valid number.')
  }
  else if (guess < 0){
    alert('Please enter a number more than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  }
  else{
    pregusses.push(guess)
    if(numgusses >= 10 || numgusses < 0)
    {
      displayguess(guess)

      displaymessage(`Game is over the number was ${random}`)
      endgame();
    }
    else{
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess){
  if(guess < random)
  {
    displaymessage('your guess is too low');
  }
  else if(guess > random)
  {
    displaymessage('your guess is too high');
  }
  else if (guess === random)
  {
    displaymessage('you guessed it right');
    gusses.innerHTML = `you guess ${guess} is right`;
    endgame();
  }
}

function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function displayguess(guess){
  subtfield.value ='';
  gusses.innerHTML = `${pregusses}`;
  numgusses++;
  remaniningguesese.innerHTML = `${11 - numgusses}`;
}

function startgame(){
    const newgame = document.querySelector("#newgame");
    newgame.addEventListener("click", function(){
      random = (Math.floor( ((Math.random() * 100) + 1)));
      subtfield.removeAttribute('disabled')
      pregusses = []
      numgusses = 1;
      remaniningguesese.innerHTML = `${11 - numgusses}`;
      resultpara.removeChild(p);
      gusses.innerHTML = "";
      loworhi.textContent = '';
      palygame = true;
    })
}

function endgame(){
  subtfield.value ='';
  subtfield.setAttribute('disabled', '');
  //or
  // subtfield.disabled = true;
  p.classList.add('button')
    p.innerHTML = '<h2 id = "newgame"> Start new game </h2>'
  resultpara.appendChild(p);
  palygame = false;
  startgame();
}