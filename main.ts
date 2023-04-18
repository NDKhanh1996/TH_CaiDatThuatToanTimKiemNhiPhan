function find(array:Array<number>, value: number) {
    let first = 0;
    let last = array.length - 1;
    let result = -1;
    while (first <= last){
        let mid = Math.floor((first + last) / 2);
        if (value < array[mid]){
            last = mid - 1;
        }
        else if (value > array[mid]) {
            first = mid + 1;
        }
        else {
            result = mid;
            return `${array[result]} have index ${result}`
        }
    }
}

let arr = [1,2,3,4,5,6,7];
let value = 6;
console.log(find(arr,value))