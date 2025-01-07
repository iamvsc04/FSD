//var
console.log("Accessing before declaring with var : " + name);
var name = "VSC";
console.log("Accessing After declaring with var : " + name);
name = "Sai Charan";
console.log("Accessing After Reassigning with var : " + name);

//let
// console.log("Accessing before declaring : " + name2); /getting Reference error Cannot Access "name2" before initialization
let name2 = "VSC";
console.log("Accessing After declaring with const :" + name2);
name2 = "Sai Charan";
console.log("Accessing After Reassigning with let : " + name2);

//const
// console.log("Accessing before declaring : " + name2); /getting Reference error Cannot Access "name2" before initialization
const name3 = "VSC";
console.log("Accessing After declaring with const : " + name3);
// name3 = "Sai Charan";
// console.log("Accessing After Reassigning with var : " + name3);
//Assignment to const variable TypeError

let i = "Sai Charan";
console.log(i + " is of type " + typeof i);
i = false;
console.log(i + " is of type " + typeof i);
i = 8695;
console.log(i + " is of type " + typeof i);
i = 8494.444;
console.log(i + " is of type " + typeof i);
