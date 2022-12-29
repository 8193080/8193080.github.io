document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.png') {
		myImage.setAttribute ('src','images/verysad.png');
    } else if (mySrc === 'images/verysad.png'){
		myImage.setAttribute ('src','images/sad.png');
    } else if (mySrc === 'images/sad.png') {
		myImage.setAttribute ('src','images/verybad.png');
	} else {
		myImage.setAttribute ('src','images/test.png');
	}
}



function setUserName() {
  var myName = prompt('Скажи мне свое имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Вводи давай, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}