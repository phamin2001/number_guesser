// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
  UIminNum = document.querySelector('.min-num'),
  UImaxNum = document.querySelector('.max-num'),
  UIguessBtn = document.querySelector('#guess-btn'),
  UIguessInput = document.querySelector('#guess-input'),
  UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function () {
  let guess = parseInt(UIguessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please eneter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over = won

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost

      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}.`);

    } else {
      // Game continues - answer wrong

      // Change border color
      UIguessInput.style.borderColor = 'red';

      // Clean Input
      UIguessInput.value = '';

      // Tell user is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  UIguessInput.disabled = true;

  // Change border color
  UIguessInput.style.borderColor = color;
  // // Set text color
  // UImessage.style.textColor = color;

  // Set message
  setMessage(msg, color);

}

// Set Message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
