const fibonacci = (num) => {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

//console.log(fibonacci(8))

let dataset = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9];

function filter(cb) {
    const arr = [];

    for (let i = 0; i < dataset.length; i++) {
        if (cb(dataset[i])) {
            arr.push(dataset[i]);
        }
    }

    return arr;
}

//console.log(filter((a) => a % 2))

function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result = result * x;
    }

    return result;
}

//console.log(pow(20, 3))

function powList(numArr, power) {
    return numArr.map((num) => {
        return pow(num, power);
    });
}

//console.log(powList([1, 2, 3, 4], 3))

function powAndFilter(numArr, power, minNum) {
    dataset = powList(numArr, power);

    return filter((a) => a < minNum)
}

// console.log(powAndFilter([1,2,3,4], 3, 10))

function sum(handler) {
    const arr = handler();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }

    return function () {
        return result;
    };
}

const handler = () => [1, 2, 3, 4];
const calc = sum(handler)
//console.log(calc())