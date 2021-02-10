// var initialString="12345";
// initialString=initialString.split("");
// var palindromeString=[];
// for (let index = initialString.length-1; index >=0 ; index--) {
//     palindromeString.push(initialString[index]);  
// }
// const isPalindrome= true;
// const a="1";
// const b="2";
// c=a+b;
// console.log(c);
// console.log(palindromeString);
// console.log(initialString);

//let strTest="12345";

/*console.log(strTest);
console.log(strTest.length);
console.log(strTest.charAt(strTest.length-1));
console.log(strTest.substring(0,strTest.length-1));*/

function convertBackward(givenString) {
    
    let lengthStr=givenString.length;
    if (lengthStr==1) {
        return givenString;
    }
    return givenString.charAt(lengthStr-1)+convertBackward(givenString.substring(0,lengthStr-1));
}

function convertBackward1(givenString) {
    
    let lengthStr=givenString.length;
    if (lengthStr==0) {
        console.log(givenString)
        return false;
    }
    return givenString.charAt(lengthStr-1)+convertBackward1(givenString.substring(0,lengthStr-1));
}

function isPalindrome(initialString)
{
    let backwardString=convertBackward(initialString);
    if (backwardString==initialString) {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isPalindrome("racecar"));