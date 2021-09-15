let genderValue = masculino.checked ? "masculino" : "femenino"

function getGender() {
    return document.querySelector('input[nombre="genero"]:checked')
   }
   document.addEventListener("DOMContentLoaded", function() {
    fields.nombre = document.getElementById('nombre');
    fields.apellido = document.getElementById('apellido');
    fields.email = document.getElementById('email');
    fields.pais = document.getElementById('pais');
    fields.pregunta = document.getElementById('pregunta');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(email) {
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.nombre, isNotEmpty);
    valid &= fieldValidation(fields.apellido, isNotEmpty);
    valid &= fieldValidation(fields.genero, isNotEmpty);
    valid &= fieldValidation(fields.pais, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.pregunta, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }

   class User {
    constructor(nombre, apellido, genero, pais, email, pregunta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.pais = pais;
    this.email = email;
    this.pregunta = pregunta;
    }
   }

   