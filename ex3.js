//Prints out various types
var flag = true;
console.log("The value of my boolean is: " + flag);
var age = 22;
console.log("The age of student is: " + age);
var student = "Dara";
console.log("My name is: " + student);
var cars = ["Lexus", "Toyota"];
//Commented this out as I am keeping this as notes
// for(let i=0;i<cars.length; i++){
//     console.log("These are my cars: " + cars[i])
// }
// prints each value in string
cars.forEach(function (elemet) {
    console.log(elemet);
});
//Testing out "any" variable type
var myAny = 33;
//prints string length
function string_count(text1) {
    console.log("The number of characters in your string: " + text1.length);
}
string_count("Shreyas Joshi");
//prints string length without start and end spaces
function string_count_nospaces(text2) {
    return text2.trim().length;
}
console.log(string_count_nospaces(" Daniel Foo ")); // output: 10
//Can do either with or without spaces in the start or end
function string_count_choice(text3, spaces) {
    var count;
    if (spaces) {
        count = text3.length;
    }
    else {
        count = text3.trim().length;
    }
    return count;
}
console.log("The length of your string is: " + string_count_choice(" Dara ", false));
