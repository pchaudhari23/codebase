class ArrayOps {
    constructor(array) {
        this.array = array;
    }

    arrayPrint = () => {
        console.log('Array is: ', this.array)
    }
}

let arr = new ArrayOps([1,2,3,4])
// arr.arrayPrint()
