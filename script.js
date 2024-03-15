      function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = '';
    let numbers=/\d/;
    let letters=/[a-zA-Z]/;
    let SpecialChar= /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
   
if(input.startsWith("pet_")   && letters.test(input.split('_')[1]) && numbers.test(input.split('_')[1]) ){


  result="valid syntax";
}

  else{
    result="invalid syntax";
  }
      if(SpecialChar.test(input))
    {
    result="invalid syntax";
    }

  document.getElementById('result').innerText = result;


}         
      
