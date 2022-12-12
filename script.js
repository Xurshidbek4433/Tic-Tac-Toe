'use strict';

const outIn = document.getElementById('outline_1')
const ellipesIn =document.getElementById('ellipse-1')

outIn.addEventListener('click', () => {
  
outIn.classList.remove('hidden');
    ellipesIn.classList.add('hidden');
  });

console.log(outIn, ellipesIn)