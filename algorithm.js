const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberForSearch = 9;

console.log("Результат алгоритму лінійного пошуку:");
const linearSearchResult = linearSearch(array, numberForSearch);

if (linearSearchResult === -1) {
    console.log("Елементу не існує в заданому масиві");
} else {
    console.log(`Елемент ${numberForSearch} знаходиться під індексом ${linearSearchResult}`);
}

console.log("Результат алгоритму бінарного пошуку:");
const binarySearchResult = binarySearch(array, numberForSearch);

if (binarySearchResult === -1) {
    console.log("Елементу не існує в заданому масиві");
} else {
    console.log(`Елемент ${numberForSearch} знаходиться під індексом ${binarySearchResult}`);
}

function linearSearch(array, numberForSearch) {
    for (let i = 0; i < array.length; i++) {
        if (numberForSearch === array[i]) {
            return i;
        }
    }
    return -1;
}

function binarySearch(array, numberForSearch) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (numberForSearch > array[mid]) {
            left = mid + 1;
        } else if (numberForSearch < array[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}