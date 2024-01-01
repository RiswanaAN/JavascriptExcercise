(function(){
    console.log("Loading User Details...");
})();
let greetingMessage= (fname, lname)=>{
    let msg= greeting()+" " +fname +" " +lname;

    function greeting(){
        return "Good Morning";
    }

    return msg;
}


let message= greetingMessage("Athira", "Prasad");
console.log(message);