/**
 * Cracking The Coding Interview 
 * Question 1
 * Find if the string has all unique characters
 */

 const findUniqueCharacters = (string) => {
    let bool_char = new Array();

    // boolean array of ASCII values
    for (let i = 0; i < 128; i+=1)
        bool_char[i] = false;

    for (let i = 0; i < string.length; i+=1){
        let int_val = string.charAt(i);
        if (bool_char[int_val] === true)
            return false;
        bool_char[int_val] = true
    } 
    return true
       
}


if (findUniqueCharacters("AKSHAY"))
    console.log("Unique Characters in the string")
else
    console.log("No unique character in the string")