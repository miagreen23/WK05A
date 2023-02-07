function mess(data) {
    console.log(data);

    let name = "Barry";
    let result = name + data;
    return result;
}

let call = mess("John");

console.log(call);


//function expressions

let mess2 = function(data){ 
    console.log(data);
    let name = "Barry";
    let result = name + data;
    return result;
};

let welcome = mess2("Mia");
console.log(welcome);

let message = function(mess2) {
    console.log(mess2);
};

console.log("hello");