      function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = '';
    let numbers=/\d/;
    let letters=/[a-zA-Z]/;
   
if(input.startsWith("pet_") ){


  result="valid syntax";
}
  else{
    result="invalid syntax";
  }

  document.getElementById('result').innerText = result;


}         
      
