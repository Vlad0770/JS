function getSum(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

function getMax(arr) {
    let result;

    for(let i=0; i < arr.length; i++) {
        if( i === 0) {
            result = arr[i];
        } else if (result < arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

function getMin(arr) {
    let result;

    for(let i=0; i < arr.length; i++) {
        if( i === 0) {
            result = arr[i];
        } else if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

let arr = [75,5465,5451,59,441,414,25,541,36,952];

let sum = getSum(arr);
let max = getMax(arr);
let min = getMin(arr);

console.log(sum + "sum");
console.log(max + "max");
console.log(min + "min")






