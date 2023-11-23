//Cau 2 : tinh gia tri bieu thuc: 3X^2 - 5xy + z^4 
function caculator(x,y,z) {
    let result = 3 * Math.pow(x,2) - 5*x*y+Math.pow(z,4);
    return result;
}

let x = 5; let y =1; let z = 2;
let bieuthuc = caculator(x,y,z);
console.log("Gia tri cua bieu thuc la: ", bieuthuc);