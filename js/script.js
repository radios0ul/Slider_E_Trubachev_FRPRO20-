
let move = 0;

function photoSelect() {

   if (move == 0) {
      document.querySelector('.pointer-admiral').style = 'background: white;';
      document.querySelector('.underline-admiral').style = 'background: #E3B873;';
      document.querySelector('.leg-admiral').style = 'color: #E3B873;';
      document.querySelector('#city-text').textContent = "Rostov-on-Don LCD admiral";
      document.querySelector('#area-text').textContent = "81m2";
      document.querySelector('#time-text').textContent = "3.5 months";
   }

   else {
      document.querySelector('.pointer-admiral').style = 'background: rgba(255, 255, 255, 0.3);';
      document.querySelector('.underline-admiral').style = 'background: transparent;';
      document.querySelector('.leg-admiral').style = 'color: rgba(255, 255, 255, 0.3);';
   }

   if (move == -679) {
      document.querySelector('.pointer-sochi').style = 'background: white;';
      document.querySelector('.underline-sochi').style = 'background: #E3B873;';
      document.querySelector('.leg-sochi').style = 'color: #E3B873;';
      document.querySelector('#city-text').textContent = "Sochi   Thieves";
      document.querySelector('#area-text').textContent = "105m2";
      document.querySelector('#time-text').textContent = "4 months";
   }

   else {
      document.querySelector('.pointer-sochi').style = 'background: rgba(255, 255, 255, 0.3);';
      document.querySelector('.underline-sochi').style = 'background: transparent;';
      document.querySelector('.leg-sochi').style = 'color: rgba(255, 255, 255, 0.3);';
   }

   if (move == -1358) {
      document.querySelector('.pointer-patriot').style = 'background: white;';
      document.querySelector('.underline-patriot').style = 'background: #E3B873;';
      document.querySelector('.leg-patriot').style = 'color: #E3B873;';
      document.querySelector('#city-text').textContent = "Rostov-on-Don Patriotic";
      document.querySelector('#area-text').textContent = "93m2";
      document.querySelector('#time-text').textContent = "3 months";
   }

   else {
      document.querySelector('.pointer-patriot').style = 'background: rgba(255, 255, 255, 0.3);';
      document.querySelector('.underline-patriot').style = 'background: transparent;';
      document.querySelector('.leg-patriot').style = 'color: rgba(255, 255, 255, 0.3);';
   }
}

photoSelect();

document.querySelector('.arrow-next').addEventListener('click', function moveNext() {

   move = move - 679;
   if (move <= -2037) {
      move = 0;
   }
   document.querySelector('.slider-line').style.left = move + 'px';

   photoSelect();

});

document.querySelector('.arrow-prev').addEventListener('click', function movePrev() {

   move = move + 679;
   if (move > 0) {
      move = -1358;
   }

   document.querySelector('.slider-line').style.left = move + 'px';

   photoSelect();

});

document.querySelector('.pointer-admiral').addEventListener('click', function () {
   move = 0;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});

document.querySelector('.leg-admiral').addEventListener('click', function () {
   move = 0;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});

document.querySelector('.pointer-sochi').addEventListener('click', function () {
   move = -679;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});

document.querySelector('.leg-sochi').addEventListener('click', function () {
   move = -679;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});

document.querySelector('.pointer-patriot').addEventListener('click', function () {
   move = -1358;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});

document.querySelector('.leg-patriot').addEventListener('click', function () {
   move = -1358;
   photoSelect();
   document.querySelector('.slider-line').style.left = move + 'px';
});










