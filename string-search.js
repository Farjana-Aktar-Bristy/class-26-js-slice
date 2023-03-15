const products = [
    "HP ProDesk 400 G7 MT 8GB ram",
    "HP Probook 450 G3 4GB ram",
    "Samsung s21 FE",
    "OnePlus 9r",
    "Canon M50"
]

var searchedWord = "Oneplus";

var output = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searchedWord.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);

searchedWord = "S21";
for (const product of products) {
    if (product.toLowerCase().includes(searchedWord.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);


searchedWord = "canon";
for (const product of products) {
    if (product.toLowerCase().startsWith(searchedWord.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);


searchedWord = "RAM"
for (const product of products) {
    if (product.toLowerCase().endsWith(searchedWord.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);