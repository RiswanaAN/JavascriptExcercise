let a={
    parent: {
      student: { Name: 'Virat', Age: 24, RollNo: 101, marks: [{English:85}, {Science: 97}] },
      mobileNo: [ '9985746325', '7584963254' ]
    }
  }
  //using spread operator
let b= {...a};

b.parent= Object.assign({}, a.parent);

b.parent.student        = Object.assign({}, a.parent.student);
//modified each value of b without affecting a
b.parent.student.Name   = "Riswana Nas"
b.parent.student.Age    = 20
b.parent.student.RollNo = 301
b.parent.student.marks  = b.parent.student.marks.map((mark)=> Object.assign({}, mark));
b.parent.student.marks[0].English= 98;
b.parent.student.marks[1].Science= 99;
b.parent.mobileNo= b.parent.mobileNo.map((mb)=> Object.assign({}, mb))
b.parent.mobileNo[0]= "111111111";
b.parent.mobileNo[1]= "00000000000";
//printing old and modified value
console.log("Printing a= ");
console.log(JSON.stringify(a));
console.log("Printing b= ");
console.log(JSON.stringify(b));
