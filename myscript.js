document.getElementById("ageday").onclick = function() {
    let age = document.getElementById("agesubmit").value;
    let myAge;
    myAge = 13;
    if (age == myAge) {
        alert("You got it right!");
    }
    
    else {
        alert("You got it wrong! Try again.");
    }
};