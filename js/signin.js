function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nYour discount code:#1010");
  }