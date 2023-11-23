//Cau 2 : tinh gia tri bieu thuc: 3X^2 - 5xy + z^4 
function caculator(x,y,z) {
    let result = 3 * Math.pow(x,2) - 5*x*y+Math.pow(z,4);
    return result;
}

let x = 5; let y =1; let z = 2;
let bieuthuc = caculator(x,y,z);
console.log("Gia tri cua bieu thuc la: ", bieuthuc);

//Cau 3: Cho mang mot chieu. In ra cac phan tu cua mang
let arr = [5, 1, 2, 2, 7];
for ( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//cau 4: tinh tong phan tu trong mang
let sum = 0;
for (let i = 0; i< arr.length; i++){
    sum += arr[i];
}
console.log("tong cac phan tu trong mang la: " +sum);