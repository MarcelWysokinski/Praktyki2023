const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const Connect =(arr1, arr2)=> arr1.concat(arr2); //- łączenie tablic arr1 oraz arr2
console.log(Connect(arr1, arr2));

const lastElement = (arr) => arr.reverse()[0]; //- ostatni element w tablicy
console.log(lastElement(arr1));

const filterArray = (array, ends) => array.filter(name => name.endsWith(ends)); //- zastosuj filter w tablicy arr2
console.log(filterArray(arr2, 'ek'));

const Sum =(arr)=>arr.reduce(function(total, currentValue){return total + currentValue;}, 0); //- suma elementów w tablicy numbers
console.log(Sum(numbers));

const Operation =(arr)=>arr.map(x => (x*x)+3); //- .map() po tablicy numbers i każdy element n^2+3
console.log(Operation(numbers));


