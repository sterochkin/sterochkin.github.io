// функция расчёта
button = document.querySelector('.summ')

button.onclick = function() {
    var result;
    var promresult;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("dm").value);
    var num2 = Number(document.getElementById("Mydm").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    promresult = Math.round((num2*num2)/(num1*num1)*100)/100
    promresult = function(number){
        return Math.round(parseFloat(number) * 100) / 100;
    }
    result == promresult
    document.getElementById("result").innerHTML = result;
  }