//Evaluate input= ((3+5-2)/2)*4= 12
function stringCalculator(input){
    replacedInput= input.replace(/plus/gi, "+")
                     .replace(/minus/gi, "-")
                     .replace(/divide/gi, "/")
                     .replace(/multiply/gi, "*");
    let output= eval(replacedInput);
    return output;
}

let stringInput= "((3plus5minus2)divide2)multiply4Minus2";
let answer= stringCalculator(stringInput);
console.log(stringInput+" = "+answer);