console.log("Hello from the other file");
let name = "Rahul"; // since ES6 dont use var
console.log(name);

const pi = 3.14;

//null vs undefined
let v; //undefined by default when declared
v = null; //assigned null to indicate no value

//dynamic typing:
let p = 9;
console.log(p, typeof p)
p = true;
console.log(p, typeof p)
p = undefined;
console.log(p, typeof p)
p = null;
console.log(p, typeof p)

//object
let person = {
    name: "John",
    age: 20
};
console.log(person["name"]); //bracket notation
console.log(person.name); //dot notation

let arr = [1, 2, 3, "Blast off"]
console.log(arr.join(", "));
console.log(arr.length);

function greeting(name) {
    return "Hello ", name
}

document.getElementById("helloButton").onclick = function() {
    let inputName = document.getElementById("nameInput").value
    document.getElementById("title").innerHTML = "Hello " + inputName
}
