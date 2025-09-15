$(document).ready(function () {
    let input = $("#user-input");  
    let expression = "";          

   
    $(".button").click(function () {
        let value = $(this).text(); 

        if (value === "AC") {
            expression = "";
            input.text("0");
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.text(expression || "0");
        } else if (value === "=") {
        
            expression = eval(expression).toString();
            input.text(expression);
            
        } else {
            expression += value;
            input.text(expression);
        }
    });
});
