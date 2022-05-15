function send(){
    number1 =  document.getElementById("number1").value;
    number2 =  document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)

    question_number = "<label>" +number1+ "X" +number2+ "</label>";
    input_box = "<br>Answer : <input type='text' id='input-check-box'>";
    check_button = "<br><br><button class= 'btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    number1 =  document.getElementById("number1").value = "";
    number2 =  document.getElementById("number2").value = "";

}