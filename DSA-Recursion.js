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


function powerCalculator(num, exponent, product='')
{
  
  if (exponent < 0)
    return 'exponent should be => 0';
  
  if (exponent === 1)
    return num;
    
  if (product==='')
    product=num;
    
  
  
  return powerCalculator(num*product, exponent-1, product);
   
}

console.log(powerCalculator(2, 10))
