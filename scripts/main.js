const myImage = document.querySelector('img');
const myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!';

myImage.onclick = function() {
if (myImage.getAttribute('src') === 'images/firefox-icon.png'){
    myImage.setAttribute('src','images/google-chrome-icon.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

function setUserName() {
  let name = prompt('type your name','your name');
  myHeading.textContent = 'Mozilla is good for ' + name;
  localStorage.setItem('name',name);
}

if (localStorage.getItem('name')){
  let name = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is good for ' + name;
}

myButton.onclick = function() {
  setUserName();
}


// myImage.onclick = function() {
//     if(myImage.getAttribute('src') === 'images/firefox-icon.png'){
//       myImage.setAttribute('src','images/google-chrome-icon.png');
//   }else {
//     myImage.setAttribute('src','images/firefox-icon.png');
//   }
// }