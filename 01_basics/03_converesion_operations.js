let score=33
//its a number
// console.log(typeof score)
// console.log(typeof(score))
//output
// number
// number

let score2="33"
// console.log(typeof(score2))
// console.log(typeof score2);

//output
// string
// string

//conversion

// console.log(Number(score2));

//output
//33

let score3="33abc"

// console.log(typeof Number(score3));
// console.log(Number(score3));
//output

// number
// NaN

score =undefined
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber=Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//output

// undefined
// undefined
// number
// NaN
// ==================Boolean Converiosn=======
let isLogged =true;
console.log(typeof isLogged);
isLogged=Boolean(1);
console.log(typeof isLogged);
isLogged=Boolean("");

console.log(typeof isLogged);

console.log( isLogged);
//output
// boolean
// boolean
// boolean
// false

// ==============String conversion========

stringFromBoolean=String(isLogged);

console.log(stringFromBoolean)




