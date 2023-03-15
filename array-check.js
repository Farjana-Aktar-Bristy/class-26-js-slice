var names = ["Mamun", "Arisha", "Farzana Bristy", "Ayesha"]

function findBigName(names) {
    var bigName = names[0];
    if (Array.isArray(names) == false) {
        console.log("Please provide an array of name");
    } else {
        names.map(function (name) {
            if (name.length > bigName.length) {
                bigName = name;
            }
        });
        return bigName;
    }
}

var biggestName = findBigName(names);
console.log(biggestName);


const friends = ['Sadia', 'TamannaSultana', 'Saima', 'Baishakhi'];
if (friends.indexOf('TamannaSultana') != -1) {
    console.log('Friends ase!');
} else {
    console.log('Friends nei re vai!!!');
}