// // let example2Button = document.getElementById('example2');
// // example2Button.onclick = function() {
// //     alert("nice to meet you");
// // } 

// // let example3Button = document.getElementById('example3');
// // example3Button.addEventListener('click', function() {
// // alert("Nice to meet you");
// // });


// // letexample5Div = document.getElementById('#example5');
// // example5Div.addEventListener('click', function () {
// //     alert(textDiv.textContent.lenght);
// // });

// let num = 0;
// let h1 = document.querySelector('h1');
// let resetButton


let myButton = document.querySelector('#example4');

myButton.addEventListener('click', function () {
  myButton.textContent = 'Nice to meet you!';
});


let textDiv = document.querySelector('#example5');

textDiv.addEventListener('click', function() {
  alert(textDiv.textContent.length);
});


let num = 0;

let h1push = document.querySelector('h1');


let reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
  h1push.textContent = num;
});



// let reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    num = num + 1;
  h1push.textContent = num;
});






















