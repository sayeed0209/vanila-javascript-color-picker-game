let numRound = 9;
let userClick = 0;
let colors = generateRandomColors(numRound);
var squares = document.querySelectorAll('.round');
var pickedColor = pickColor();
var colorDisplay = document.getElementsByTagName('span')[0];
var messageDisplay = document.getElementById('message');
var h1 = document.getElementsByClassName('heading')[0];
var restButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');
let superBtn = document.getElementById('suerhardBtn');
let checkClick = true;

restButton.addEventListener('click', function () {
  userClick = 0;
  // generate all new colors
  colors = generateRandomColors(numRound);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colordisplay to match picked color
  colorDisplay.textContent = pickedColor;
  restButton.textContent = 'CREATE NEW COLORS';
  //  this.textContent="CREATE NEW COLORS";
  messageDisplay.textContent = '';
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function () {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  superBtn.classList.remove('selected');
  numRound = 3;
  colors = generateRandomColors(numRound);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  if (checkClick === true) {
    var clearTime = setTimeout(() => {
      var p = document.createElement('p');
      p.innerHTML =
        'LITTLE HINTS:<br>RGB GAME<br> R stand for "red"<br>G stands for "green"<br>B stands for "Blue"<br>choose a color<br>of mixer that produces by RGB';
      p.setAttribute('id', 'instra');
      document.querySelector('body').appendChild(p);
      // p.style.color = 'red';
    }, 500);
    checkClick = false;
    setTimeout(() => {
      document.querySelector('body').lastChild.remove();
    }, 12000);
  }

  for (var i = 0; i < squares.length; i++) {
    switch (i) {
      case 0:
        squares[i].style.background = colors[i];
        break;
      case 1:
        squares[i].style.background = colors[i];
        break;
      case 2:
        squares[i].style.background = colors[i];
        break;
      default:
        squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function () {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  superBtn.classList.remove('selected');
  numRound = 6;
  colors = generateRandomColors(numRound);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // var clearTime = setTimeout(() => {
  if (checkClick === true) {
    var clearTime = setTimeout(() => {
      var p = document.createElement('p');
      p.innerHTML =
        'LITTLE HINTS:<br>RGB GAME<br> R stand for"red"<br>G stands for "green"<br>B stands for "Blue"<br>choose a color<br>of mixer that produces by RGB';
      p.setAttribute('id', 'instra');
      document.querySelector('body').appendChild(p);
      checkClick = false;
    }, 500);
    setTimeout(() => {
      document.querySelector('body').lastChild.remove();
    }, 12000);
  }

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
});

superBtn.addEventListener('click', function () {
  hardBtn.classList.remove('selected');
  easyBtn.classList.remove('selected');
  superBtn.classList.add('selected');
  numRound = 9;
  color = generateRandomColors(numRound);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  // var clearTime = setTimeout(() => {
  if (checkClick === true) {
    var clearTime = setTimeout(() => {
      var p = document.createElement('p');
      p.innerHTML =
        'LITTLE HINTS:<br>RGB GAME<br> R stand for "red"<br>G stands for "green"<br>B stands for "Blue"<br>choose a color<br>of mixer that produces by RGB';
      p.setAttribute('id', 'instra');
      document.querySelector('body').appendChild(p);
      checkClick = false;
    }, 500);
    checkClick = false;
    setTimeout(() => {
      document.querySelector('body').lastChild.remove();
    }, 12000);
  }
  // p.style.color = 'red';

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = 'block';
  }
});

//going through every index with loop
for (let i = 0; i < squares.length; i++) {
  //add initial color to square
  squares[i].style.backgroundColor = colors[i];
  // add click listener to squares
  squares[i].addEventListener('click', function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor also if you picked the color inside of 3 attempt
    if (clickedColor === pickedColor && userClick < 3) {
      // alert(this.style.backgroundColor)
      // alert('You have picked right color');
      var mes = (messageDisplay.textContent = 'PERFECT👍');
      messageDisplay.style.color = '#B10708';
      restButton.textContent = 'play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      score();
    } else {
      if (userClick < 3) {
        userClick++;
        messageDisplay.textContent =
          'YOU HAVE ' + (3 - userClick) + ' ATTEMPT LEFT';
        setTimeout(() => {
          messageDisplay.textContent = 'TRY AGAIN 😸';
        }, 1500);
        this.style.backgroundColor = '#232323';
      }
    }
  });
}

function score() {
  setTimeout(() => {
    h1.style.backgroundColor = '#232323';
    colors = generateRandomColors(6);
    PickedColor = pickColor();
  }, 3000);
}

// function created for when u picked the right color then every square will match with that color.
function changeColors(color) {
  // loop through all square
  squares.forEach(function (event) {
    event.style.backgroundColor = color;
  });
}
// picking up random color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
