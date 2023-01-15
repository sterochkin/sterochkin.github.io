// Calc //
button = document.querySelector('.summ')
button.onclick = function() {
    var result;
    var num1 = Number(document.getElementById("dm").value);
    var num2 = Number(document.getElementById("Mydm").value);
    result = (num2*num2)/(num1*num1);
    document.getElementById("result").innerHTML = result;
}
// Clear //
  clearButton = document.querySelector('.clearButton')
  clearButton.onclick = function() {
    document.getElementById("dm").value = "";
    document.getElementById("Mydm").value = "";
}