function theGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    var greet = document.getElementById("greeting");

    if (hourNow >= 18) {
        greeting = "Good evening, my name is: ";
        greet.textContent = greeting;
    }
    else if (hourNow >= 12) {
        greeting = "Good afternoon, my name is: ";
        greet.textContent = greeting;
    }                    
    else if (hourNow > 0) {
        greeting = "Good morning, my name is: ";
        greet.textContent = greeting;
    }

    else {
        greeting = "Welcome!";
        greet.textContent = greeting;
    }
}

theGreeting();
                        
//document.write('<h3>' + greeting + '</h3>');
              