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

    // Disable input
    UIguessInput.disabled = true;

    // Change border color
    UIguessInput.style.borderColor = 'green';

    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost

      // Disable input
      UIguessInput.disabled = true;

      // Change border color
      UIguessInput.style.borderColor = 'red';

      // Set message
      setMessage(
        `Game Over, you lost. The correct number was ${winningNum}.`,
        'red'
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      UIguessInput.style.borderColor = 'red';

      // Tell user is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

      // Clean Input
      UIguessInput.value = '';
    }
  }
});

// Game over

// Set Message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
