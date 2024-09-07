
var truenum = 14;

document.getElementById('btn').addEventListener('click', function() {
    let inputField = document.getElementById('input'); // 
    let input = inputField.value; // 
    
    if(input == truenum){
        alert("Wow!!! You guess right number...")
    }else if(input >11 && input < 17){
        alert("You are very close ,try again...")
    }else {
        alert("Oops!try again...")
    }
    
   
    inputField.value = ""; 
});
