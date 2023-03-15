const quotes = "best friends are those people in your life who make you smile brighter, laugh louder and live better";

// Split[expect "e", othrs word will show]
var word = quotes.split("e");
console.log(word);

// slice[from nth index ends to nth index]
word = quotes.slice(7, 20);
console.log(word);

// substr[from nth index and ends nth length]
word = quotes.substr(20, 8);
console.log(word);

// substring[same as slice]
word = quotes.substring(7, 24);
console.log(word);


const firstName = "Farjana";
const lastName = "Aktar";
// const fullName = firstName + " " + lastName;
const fullName = firstName.concat(lastName).concat("Bristy");
console.log(fullName);