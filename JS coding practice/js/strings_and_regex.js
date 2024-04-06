/* 1. US Phone numbers
i. The number starts with '+1'
ii. The '+1' is followed by a space
iii. Space is followed by 4 digits, the first of which is either 6,7,8 or 9
iv. The four digits are followed by a space and then three digits
v. The three digits are followed by a space and three digits again
vi. For example, the number '+1 7206 666 687' is a valid US number
*/

usPhoneNumber = (phNumber) => {
  usPhoneRegex = /^[+][1]\s[6-9]{1}[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;
  console.log(usPhoneRegex.test(phNumber));
};

/*------------------------------------------------------------------------------------------------------ */
/*2. Split a given string into array based on special characters or spaces present in the string */
splitString = (str) => {
    // let newStr = str.replace(/\s+/g, '') // remove all whitespaces
    // const specialCharacters =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
    // let splitArray = str.split(specialCharacters)

    const noSpecialCharcaters = /[^A-Za-z0-9]/
    let splitArray = str.split(noSpecialCharcaters)
    console.log(splitArray)
}

splitString('A,COMPUTER,keyboard, mouse, processing unit, DISPLAY,17234, 987')
splitString('A/COMPUTER/keyboard/ mouse* processing unit! DISPLAY_17234 987')
/*------------------------------------------------------------------------------------------------------ */


/*3. Arrange given word in an array in lexicographic order (like in an english dictionary) */
arrange = (wordsList) => {
    let newWordsList = wordsList.sort()
    console.log(newWordsList)
}

// arrange(['Flower', 'apple', 'Banana', 'Orange', 'Jackfruit', 'grape', 'LEMON', 'BERRY', 'Citrus'])
/*------------------------------------------------------------------------------------------------------ */
