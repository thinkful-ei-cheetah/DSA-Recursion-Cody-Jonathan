'use strict';
function countingSheep(num){
  if(num === 0){
    console.log(`All sheep jumped over the fence`);
    return;
  }
  if(num >= 1){
    console.log(`${num} Another sheep jump over the fence`);
  }

  countingSheep(num - 1);
}

countingSheep(3);