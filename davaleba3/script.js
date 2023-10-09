'use strict';

//pirveli davaleba

const n = 27;
const result = oddNumbers(n);
function oddNumbers(n) {
  if (n <= 2 || n % 2 === 0) {
    return null; 
  }
  
  const number = Array.from({ length: n }, (_, i) => i + 1);
  const first = number.slice(0, 2).reduce((acc, curr) => acc + curr, 0);
  const second = number.slice(2).reduce((acc, curr) => acc * curr, 1);
  console.log(first, second);
}
console.log(result); 

//meore davaleba

function userCity(user) {
  const { banks } = user || {};
  const [, , { address: { city } = {} } = {}] = banks || [];
  
  return city;
}

const user = {
  banks: [
    {},
    {},
    {
      address: {
        city: 'Tbilisi',
      },
    },
  ],
};

const city = userCity(user); 

console.log(city);

//mesame davaleba 

function foo(input) {
  if (typeof input !== 'object' || input === null) {
    return input;
  }
  if (Array.isArray(input)) {
    return input.map(item => foo(item));
  }
  const copied = {};
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      copied[key] = foo(input[key]);
    }
  }

  return copied;
}
const original = {
  a: 49,
  b: 'string',
  c: {
    d: 'object'
  }
};

const copiedObject = foo(original);

console.log(copiedObject);
