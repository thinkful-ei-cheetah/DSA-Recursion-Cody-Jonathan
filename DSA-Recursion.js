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

console.log(powerCalculator(2, 10))function reverseStr(str)
{
  if (str==='')
    return '';
    
  return str[str.length -1]+reverseStr(str.substring(0, str.length - 1)); 
   
}
console.log(reverseStr('hello'))


function reverseStr(str)
{
  if (str==='')
    return '';
    
  return str[str.length -1]+reverseStr(str.substring(0, str.length - 1)); 
   
}
console.log(reverseStr('hello'))


function triangle(n, value=0, acc=0)
{
   acc++;

  if (acc===n+1)
    return value;
  
  value=value+(acc);
 
  return triangle(n, value, acc)
   
}
console.log(triangle(5))


function splitter(str, separator)
{
  if (!str.substring(0, 1))
    return '';
    
  if (str.substring(0, 1) != separator)
  {
    return str.substring(0, 1)+splitter(str.substring(1, str.length), separator)
  } else
  {
    return splitter(str.substring(1, str.length), separator)
  }
  return 
}

console.log(splitter('02/20/2020', '/'));


function fib(n, last='', lastlast='', acc='')
{
  
  if (n<1)
    return;
    
  acc++;
  
  if (acc===n+1)
    return last+lastlast;
    
  if(acc===1)
    return fib(n, 0, 1, acc)

  return fib(n, (last+lastlast), last, acc)
    
}

console.log(fib(7));


// thinl this solution is suboptimal

function factors(n, arr=[])
{
  
  var i;
  for (i=2; i<=n; i++)
  {
     if (n%i === 0)
     {
       if (!arr.includes(i))
        arr.push(i);
       factors(n/i, arr);
     }
     
     console.log(i)
     
  
  }
  
  if (!arr.includes(1))
      arr.push(1);
  return arr;
}

console.log(factors(6));

