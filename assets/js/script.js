let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1; 
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber >= 10) {
    document.getElementById("adcionar").disabled = true;
  } 
 }


function decrement() {
  currentNumber = currentNumber - 1; 
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber <= -10) {
    document.getElementById("subtrair").disabled = true;
  }
  
}

function zerarCount() {
  currentNumberWrapper.innerHTML = currentNumber = 0;
  document.getElementById("adcionar").disabled = false;
  document.getElementById("subtrair").disabled = false;
}



