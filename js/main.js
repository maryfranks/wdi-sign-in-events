document.addEventListener('DOMContentLoaded', function() {

  var modalWindow = document.querySelector('.modal');
  var signIn = document.querySelector('.signin');
  var closeButton = document.querySelector('.close');
  var submitButton = document.querySelector('.submit');
  var textField = document.querySelector('#user');
  var passwordField = document.querySelector('#pass');


  signIn.addEventListener('click', function() {
    modalWindow.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    modalWindow.style.display = 'none';
  });

  submitButton.addEventListener('click', function() {
    textField.className = "error";
    passwordField.className = "error";
  });

  textField.addEventListener('click', function() {
    this.className = "";
  });

  passwordField.addEventListener('click', function() {
    this.className = "";
  });

});
