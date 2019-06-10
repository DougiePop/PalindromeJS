// Use modulo operations to reverse the second half of original number and compare it with the first half
const isPalindrome = (x) => {
    // EDGE cases
    // if the number is negative as -242 does not equal 242-
    // if number has a zero as the last digit where x is not zero, since zero by itself is a palindrome
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }
    // our strategy is to use modulo operations to isolate the last digit
    // then remove the last digit from the original number
    // After, we get the second last digit from the original number
    // we multiply the first last digit by 10 and add the second last digit to get our reversed number
    // we repeat this as long as original number (x) is greater than the reversed number
    let reversedNumber = 0;
    while( x > reversedNumber ) {
        // get the last digit from the original number (x) passed into the function 
        const lastDigit = x % 10;
        // on the first pass through, reversedNumber will be the last digit
        // then on the second pass through, we take the first pass through's last digit which is reversedNumber
        // and multiply it by ten and also add the second pass through's last digit
        reversedNumber = reversedNumber * 10 + lastDigit;
        // take out the last digit from the original number (x) by getting the whole quotient number only
        // repeat as long as reversed number is less than x
        x = Math.floor(x / 10)
    }
    // if palindrome number has odd length, then just simply remove the middle number 
    // since middle number always equals itself and doesn't matter
    // we do this by taking our odd Length reversed number and dividing it by 10
    // and taking the whole quotient number only
    const oddLengthMiddleNumberRemoved = Math.floor(reversedNumber / 10);
    // return when first half of original number, now x, is equal to second half of which has been reversed in variable reversedNumber
    // or return when first half of original number, now x, is equal to second half of which palindrome number was an odd length in variable oddLengthMiddleNumberRemoved
    return x === reversedNumber || x === oddLengthMiddleNumberRemoved;
}
