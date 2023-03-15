// only sort is applicable for one digit number but more than one digit numbers sort function is applicable and then for ascending order--return (a-b) & for descending order--return (b-a) ;


var numbers = [9, 7, 2, 4, 10, 60, 41, 11, 5, 3, 1];
var numberSortList = numbers.sort(function (a, b) {
    return a - b;
});
console.log(numberSortList);


// for the letters, sort first works on Capital letter and then small letter,

var friends = ['Sadia', 'TamannaSultana', 'Saima', 'Baishakhi', 'arisha', 'bithi'];
var friendSortList = friends.sort();
console.log(friendSortList);


// reverse() method reverses the order of the elements in an array.The first array element then becoming the last, and the last array element becoming the first.If we want to reverse the array by alphabetical order, then first use sort method and then the sorted list reversed.

friends = ['sadia', 'tamanna', 'saima', 'baishakhi', 'arisha', 'bithi'];
friendSortList = friends.sort();
friendReverseList = friendSortList.reverse();
console.log(friendReverseList);
