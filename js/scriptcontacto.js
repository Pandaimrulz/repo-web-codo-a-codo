function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Por favor ingrese nombre valido";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 4){
      text = "Por favor ingrese subject correcto";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor ingrese un email valido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 60){
      text = "Por favor ingrese mas de 60 caracteres en su mensaje";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulario enviado con exito!");
    return true;
  }