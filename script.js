const number = 15
let guess = 0

while (guess !== number) {
  if (guess > number) {
    alert('Too big, try again')
  }
  guess = prompt('Guess a number inbetween 1 - 18')
  guess = parseInt(guess)
  if (guess < number) {
    alert('Too small, guess again')
  }
}
if (guess === number) {
  alert('You guessed it')
}
