
var isChecked=true;
function validate(config, segment){
    for(let key in config){
       if(config[key].type== "REQUIRED"){
        // console.log(segment[key]);
            if((segment[key]!= "") && (key.length >= segment[key].length)){
               isChecked= true;
            }
            else{
                isChecked= false;  
                return
            }   
        }   
    }
}

const GLConfig = {
    "CO" : { type: "REQUIRED"},
    "MAJ": { type: "NORMAL"},
    "SET": { type: "NORMAL"},
    "MIN": { type: "REQUIRED"}
}
const GLSegments = {
    "CO" : "10",
    "MAJ": "111",
    "SET": "111",
    "MIN": "000"
}

let result= validate(GLConfig, GLSegments);
if(isChecked== true){
    console.log("Validation passed")
}
else{
    console.log("Validation failed");
}
