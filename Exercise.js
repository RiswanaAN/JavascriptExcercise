let array = ['apple','banana','mango']
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log("Next Iteration")
let arrayObject = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
for(let i=0; i< arrayObject.length; i++){
    let obj= arrayObject[i];
    for(const x in obj){
         console.log(obj[x])
    }
}

console.log("Next Iteration")
let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for(const fruit in object){
    console.log(object[fruit]);
}