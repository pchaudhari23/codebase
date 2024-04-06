// 1. Check given number is a Prime Number or Not
checkIfPrime = (number) => {
  let isPrime = true;

  if (number == 1) {
    console.log("1 is neither composite nor prime");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("Number is prime");
    } else {
      console.log("Number is not prime");
    }
  } else {
    console.log("Number is not prime");
  }
};

/*------------------------------------------------------------------------------------------------------*/
// 2. Calculate GCD of two numbers
calculateGCD = (a, b) => {
  let gcd = 1;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
  }
  console.log(gcd);
  return gcd
};
/*------------------------------------------------------------------------------------------------------*/
// 3. Calculate LCM of two numbers
calculateLCM = (a,b) => {
    let largerNumber = Math.max(a,b)
    let smallerNumber = Math.min(a,b)

    let i = largerNumber;
    while(i % smallerNumber !== 0) {
        i += largerNumber;
    }
    const lcm = i;
    console.log(lcm)
}

calculateLCM2 = (a,b) => {
    let gcd = calculateGCD(a, b);
    let lcm = (a*b)/gcd;
    console.log(lcm)
}
/*------------------------------------------------------------------------------------------------------*/