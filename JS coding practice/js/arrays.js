// 1. Print the prime numbers from an array
arrayPrimeNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isPrime = true;

    for (let j = 2; j < num; j++) {
      if (num % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
};

/*------------------------------------------------------------------------------------------------------ */
// 2. Sort the array numbers
sortArray = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
};
