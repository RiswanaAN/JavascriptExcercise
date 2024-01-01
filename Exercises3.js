let data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245111111", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]

for(let i=0; i< data.length; i++){
    console.log("Record: "+(i+1))
    let obj= data[i];
    let fname= obj.firstname.trim();
   
    let lname= obj.lastname.trim();
    
    //Concatinating fname and lname
    console.log("Name: "+fname+" "+lname);
    //Phone Number
    if(obj.phone.length==10){
        console.log("phone: "+obj.phone)
    }
    else if(obj.phone.length< 10){
        let range= 10-obj.phone.length;
        for(let i=0; i< range; i++){
            obj.phone= "0"+obj.phone
        }
        console.log("phone: "+obj.phone)        
    }
    else{
        let phoneNum= obj.phone.slice(0,10);
        console.log("phone: "+phoneNum)
    }
    //Triming Zip
    let trimmedZip= obj.zip.trim();
    let zipCode= trimmedZip.split(' ')
    let result= zipCode.join("")
    console.log("zip: "+result)
    //Checking for Age
    if(obj.age>0 && obj.age<150){
        console.log("Age: "+ obj.age)
    }
    else{
        console.log("Age: NA");
    }
    
    //Printing Masked Id
    
    let maskId= obj.id.trim();
    let maskedId= "###"+maskId.slice(3);
    console.log("Id: "+maskedId);
    
}
