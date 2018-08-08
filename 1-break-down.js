true || (("abc" > "abd") && (4 >= "3"));
   //S1 true
   //  (bool, true)
   
   //S2 ("abc" > "abd")
   // (bool, false)
   
   //S3 (4 >= "3")
   // (bool, true)

   //S4 (1) && (2)
   // (bool, false)

   //S5 true || S3
   // (bool, true)
   

// ideal for python tutor

//console.log("true || (("abc" > "abd") && (4 >= "3"));");

{ //
    const step_1 = true; 
    
    const step_2 = ("abc" > "abd") ; 
    
    const step_3 =(4 >= "3");
    
    const step_4 = step_2 && step_3;
    const step_5 = step_1 || step_4
    output = step_5;
};


console.log("- actual: " + output );
