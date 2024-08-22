const input = document.querySelector('#number');
const button = document.querySelector('#convert-btn');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('#output-container');
let romanNumber = '';
const romanToArabic = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const converterNumbers = (item) => {
  for (let key in romanToArabic) {
      if (item >= romanToArabic[key]) {
        item -= romanToArabic[key];
        romanNumber += key;
        return converterNumbers(item)
      }
    
  }
}

const checkInputValue = (value) => {
  outputContainer.style.display = 'block'
  if (value === '') {
    output.textContent = 'Please enter a valid number.'
    outputContainer.classList.add('error-result')
  } else if (value <= 0) {
    output.textContent = 'Please enter a number greater than or equal to 1.'
    outputContainer.classList.add('error-result')
  }
  else if (value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999"
    outputContainer.classList.add('error-result')
  }
  else {
    if (outputContainer.classList.contains('error-result')) {
      outputContainer.classList.remove('error-result');
    }
    converterNumbers(value)
    output.textContent = romanNumber;
  }

}

button.addEventListener('click', () => {
  const numberArabic = input.value
  romanNumber = '';
  checkInputValue(numberArabic)
}
)

