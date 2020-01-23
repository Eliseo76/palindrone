function palindrome(str) {
    let newStr = str.toLowerCase();
    let cleanedStr = newStr.replace(/[^0-9a-z]/gi, "");
    let cleanSplitArray = cleanedStr.split("");
    let reversedArray = cleanedStr.split("").reverse();
    let answer = false;
    for (let i=0; i<cleanSplitArray.length; i++ ){
        if(cleanSplitArray[i] === reversedArray[i]){
            answer = true;
        }else{
            console.log(cleanedStr,false);
            return false;
        }
    }
    console.log( cleanedStr, answer);
    return answer;
}


console.log(

    palindrome("_eye"), //should return true.
    palindrome("race car"), //should return true.
    palindrome("not a palindrome"), //should return false.
    palindrome("A man, a plan, a canal. Panama"), //should return true.
    palindrome("never odd or even"), //should return true.
    palindrome("nope"),// should return false.
    palindrome("almostomla"), //should return false.
    palindrome("My age is 0, 0 si ega ym."),// should return true.
    palindrome("1 eye for of 1 eye."),// should return false.
    palindrome("0_0 (: /-\ :) 0-0"),// should return true.
    palindrome("five|\_/|four"),// should return false.
);