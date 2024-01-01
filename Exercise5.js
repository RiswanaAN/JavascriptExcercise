let input= "it's important to note that writing an entire paragraph .in all lowercase letters can be seen as informal or unconventional in many contexts .as standard writing conventions typically .involve using capital letters at the beginning of sentences .and for proper nouns.however, if you specifically need a paragraph .entirely in lowercase letters, here's an example";

//split this string into array
let stringArray= input.split(".");
let capitalize= []
for(let i=0; i<stringArray.length; i++){
    //capitalize first letter and concatinate with remaining letters
   capitalize[i]= stringArray[i].charAt(0).toUpperCase()+ stringArray[i].slice(1);
}
let outputString= capitalize.join(". ");
console.log(outputString);