// функция расчёта
button = document.querySelector('.summ')

button.onclick = function() {
    var result;

    // получаем первое и второе число
    var num1 = Number(document.getElementById("dm").value);
    var num2 = Number(document.getElementById("Mydm").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    result = (num2*num2)/(num1*num1);

    document.getElementById("result").innerHTML = result;
  }