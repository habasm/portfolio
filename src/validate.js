function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function validateForm() {
      let x = document.forms["myForm"]["contact_email"].value;
      //var emailRegex = /^[a-z]+@[a-z-0-9-]+\.[a-z-0-9-.]+$/;
      if(containsUppercase(x)) {
        alert("Name must be filled out");
        return false;
      }
    }