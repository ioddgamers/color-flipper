const colorArray = ["#BDCFB5", "#482728", "#35524A", "#627C85", "#779CAB", "#A2E8DD", "#FFBE0B", "#FF006E"]; //The array containing my colors
let currentIndex = 0; //is initialized to 0 and will keep track of the array's index

const body = document.querySelector('body'); //retrieve the body element from my HTML
const button = document.querySelector('button') // retrieve the button element
const colorCode = document.getElementById('color-code');//retrieve the id that displays my color code

function changeColor() {
  // set the color to the current array index, and increment the index
    body.style.backgroundColor = colorArray[currentIndex++]; //increment the colorArray index by 1
    colorCode.textContent = colorArray[currentIndex]; //display the current value when its index is displayed

  // if the current index exceeds the array, reset it
    if (currentIndex >= colorArray.length - 1) { // colorArray.length - 1 so that when currentIndex gets to 0, it won't pick a color outside the array
        currentIndex = 0;  // reset the currentIndex back to 0
    }
}

button.addEventListener('click', changeColor)//when the button is clicked, call the changeColor function

