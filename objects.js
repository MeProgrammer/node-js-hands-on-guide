user = {
    first_name: 'marc',
    last_name: 'last',
    age: Infinity,
    citizenship: "man of the world"
}

console.log(JSON.stringify(user))
console.log(JSON.parse('{"first_name":"marc","last_name":"last","age":null,"citizenship":"man of the world"}').citizenship)