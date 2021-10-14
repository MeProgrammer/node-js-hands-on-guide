function hello(name){
    console.log("Hello " + name);
}

// hello("Mohamed")
function add_n(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add_n(1, 2, 3, 5));