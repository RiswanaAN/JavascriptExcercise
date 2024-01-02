
let array = ['apple','banana','mango']

console.log("1st loop using ForEach");
array.forEach((fruits)=>{
    console.log(fruits)
});


console.log("Next Iteration using map looping")
let arrayObject = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
let newArray= arrayObject.map((obj)=>{
    for(const x in obj){
        return obj[x]
    }
});

console.log(newArray.join(" \n"));

console.log("Next Iteration using for-in")
let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for(const fruit in object){
    console.log(object[fruit]);
}