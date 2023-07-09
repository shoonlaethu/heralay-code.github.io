document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var firstno = parseFloat(document.getElementById("firstno").value);
    var secondno = parseFloat(document.getElementById("secondno").value);
    var operator = document.getElementById("operator").value;
    
    var result;
    if (operator === "add") {
      result = firstno + secondno;
    } else if (operator === "subtract") {
      result = firstno - secondno;
    } else if (operator === "multiply") {
      result = firstno * secondno;
    } else if (operator === "divide") {
      result = firstno / secondno;
    }
    
    document.getElementById("result").innerHTML = "Result: " + result;
  });