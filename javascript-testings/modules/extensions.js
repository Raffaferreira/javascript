//ES6 Modules export
const getFullName = (name, surname) =>{
    return name + " " + surname;
}

function returnMultiplication(value1, value2){
    return value1 * value2;
}

function returnSubtraction(value1, value2){
    return value1 - value2;
}

function returnSum(value1, value2){
    return value1 + value2;
}


export { getFullName, returnMultiplication, returnSubtraction, returnSum };