function greeting(){
   alert('Welcome to JaveScript');
   console.log('hello');
}
// ex A
let someName = "Ovrutzki";
console.log(someName);
alert(someName);

// ex B
let allNum = Math.floor(Math.random() * 10);
let tripel = allNum * 3;
let calculate = `${allNum}*3=${tripel}.`;
console.log(calculate);

// ex C
const favoriteNumber = 8;
let favoriteStringed = favoriteNumber.toString();
console.log(favoriteStringed);

// ex D
// const favoriteNumber = 8;
const halfOfFavNum = favoriteNumber /2;
let michaelsFavorite = 13;
michaelsFavorite -= favoriteNumber;
michaelsFavorite *=26;
console.log(`michals current num: ${michaelsFavorite}`);

// ex E
let numOfChildren = 3;
let parentName = "July";
let place = "New york";
let jobTitle = "Doctor";
alert(`You will be a ${jobTitle} in ${place}, and married to ${parentName} with ${numOfChildren} kids.`);

// ex F
let yearOfBirth = 1994;
let futurYear = 2030;
let age = futurYear - yearOfBirth
alert(`I will be either ${--age} or ${age} in ${futurYear}`);
