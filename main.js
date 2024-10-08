// 1.create function
// 2.get input as in number
// 3.check it is empty and greater than 100,less than 0
// if empty than display invalid field
// else display their grades according to their marks
// clear each times

var mark = document.getElementById("mark")
var error = document.getElementById("error")
var display = document.getElementById("display")

function gradeCheck(){
    if (mark.value ==="" || mark.value >= 101 || mark.value < 0){
      error.innerHTML= " Enter valid number"
      display.innerHTML= " "
    }
    else if( mark.value <= 59){
        error.innerHTML= " "
        display.innerHTML = "Your grade is F" 
    }
    else if (mark.value === 60 || mark.value <= 69) {
        error.innerHTML= " "
        display.innerHTML = "Your grade is D" 
    }
    else if (mark.value === 70 || mark.value <= 79) {
        error.innerHTML= " "
        display.innerHTML = "Your grade is C" 
    }
    else if (mark.value === 80 || mark.value <= 89) {
        error.innerHTML= " "
        display.innerHTML = "Your grade is B" 
    }
    else if ( mark.value >= 90){
        error.innerHTML= " "
        display.innerHTML = "Your grade is A" 
    }

}