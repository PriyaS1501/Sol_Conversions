//conversion

//Number
let numValue1 = 10;
console.log(numValue1); // 10

// number to string

let strValue = String(numValue1);
console.log(typeof(strValue)); // string
console.log(strValue); // 10

//number to boolean

let boolValue = Boolean(numValue1);  // true // for minus value also true // for 0 shows false
console.log(boolValue);


// boolean
let boolValue1 = true; // false
console.log(boolValue1);

// boolean to number

let numValue2 = Number(boolValue1);
console.log(typeof(numValue2));
console.log(numValue2);  // true - 1, false - 0

// boolean to string
let strValue2 = String(boolValue1);
console.log(typeof(strValue2)); // boolean
console.log(strValue2); // true

// string
let strValue3 = 'true'; //15 // Nan // true
console.log(strValue3); // 15 in black color // string

// string to number
let numValue3 = Number(Boolean(strValue3));
console.log(typeof(numValue3)); // number
console.log(numValue3); // 15 in blue color - number // 'priya' - NaN // true - Nan

// string to boolean
let boolValue2 = Boolean(strValue3);
console.log(typeof(boolValue2));
console.log(boolValue2);

// undefined to number
let numValue4 = undefined;

let numValue5 = Number(numValue4);
console.log(numValue5); // Nan

// undefined to string
let numValue6 = String(numValue4);
console.log(numValue6); // undefined

// undefined to boolean
let numValue7 = Boolean(numValue4);
console.log(numValue7); // false

// null to number
let strValue4 = null;

let numValue8 = Number(strValue4);
console.log(numValue8); // 0

// null to string
let strValue6 = String(strValue4);
console.log(strValue6); // null

// null to string
let boolValue7 = Boolean(strValue4);
console.log(boolValue7); // false
