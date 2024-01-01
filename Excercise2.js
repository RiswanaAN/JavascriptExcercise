(function(){
    console.log("Loading User Details...");
})();
let greetingMessage= (fname, lname)=>{
    let msg= greeting();
    function greeting(){
        return "Good Morning"+" " +fname +" " +lname;

    }

    return msg;
}


let message= greetingMessage("Athira", "Prasad");
console.log(message);