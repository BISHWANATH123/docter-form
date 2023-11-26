function student(name,roll_no,clas,section,math,hindi,eng,science){
    this.name = name;
    this.roll_no = roll_no;
    this.class = clas;
    this.section = section;
    this.math = math;
    this.hindi = hindi;
    this.eng = eng;
    this.science = science;
  }
  
  
  
  var student1 = new student("rahul",20,5,"a",20,30,40,50);
  
  
  
  console.log("############","report card",
              student1,
              
        `###########`);