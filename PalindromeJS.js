const isPalindrome = (x) => {
    // EDGE cases
    // if the number is negative as -242 does not equal 242-
    // and if number has a zero as the last digit where x is not zero since zero by itself is a palindrome
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }
    // our strategy is to use modulo operations to isolate the last digit
    // then remove the last digit from the original number
    // After, we get the second last digit from the original number
    // we multiply the first last digit by 10 and add the second last digit to get our reversed number
    // we repeat this until original number is less than or equal to the reversed number
    let reversedNumber = 0;
    while( x > reversedNumber ) {
        // get the last digit from the original number (x) passed into the function 
        const lastDigit = x % 10;
        // on the first pass through, reversedNumber will be the last digit
        // then on the second pass through, we take the first pass through's last digit which is reversedNumber
        // and mulitply it by tena and also add the second pass through's last digit
        reversedNumber = reversedNumber * 10 + lastDigit;
        // take out the last digit from the original number (x) by getting the whole quotient number only
        // repeat until reversedNumber is equal to or greater than x
        x = Math.floor(x / 10)
    }
    // if palindrome number has odd length, then just simply remove the middle number since it always equals itself and doesn't matter
    const oddLengthMiddleNumberRemoved = Math.floor(reversedNumber / 10);
    // return when first half of original number, now x, is equal to second half of which has been reversed in variable reversedNumber
    // or return when first half of original number, now x, is equal to second half of which palindrome number was an odd length in variable oddLengthMiddleNumberRemoved
    return x === reversedNumber || x === oddLengthMiddleNumberRemoved;
}