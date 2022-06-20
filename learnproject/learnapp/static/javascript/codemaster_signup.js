function validation(){
    var status = 1
    var name = document.getElementById('name')
    var age = document.getElementById('age')
    var phone = document.getElementById('phone')
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    if(name.value == ""){
      document.getElementById('name').style.borderColor="red"
      document.getElementById('name_error').innerHTML="** Please Enter Your Name **"
      document.getElementById('name_error').style.color="red"
      document.getElementById('name_error').style.display="block"
      var status = 0
    }

    else{
      document.getElementById('name').style.borderColor="black"
      document.getElementById('name_error').style.display="none"
      var status = 1
    }

    if(age.value == ""){
      document.getElementById('age').style.borderColor="red"
      document.getElementById('age_error').innerHTML="** Please Enter Your Age **"
      document.getElementById('age_error').style.color="red"
      document.getElementById('age_error').style.display="block"
      var status = 0
    }

    else{
      document.getElementById('age').style.borderColor="black"
      document.getElementById('age_error').style.display="none"
      var status = 1
    }

    if(phone.value == ""){
      document.getElementById('phone').style.borderColor="red"
      document.getElementById('phone_error').innerHTML="** Please Enter Your Phone Number **"
      document.getElementById('phone_error').style.color="red"
      document.getElementById('phone_error').style.display="block"
      var status = 0
    }

    else{
      document.getElementById('phone').style.borderColor="black"
      document.getElementById('phone_error').style.display="none"
      var status = 1
    }

    if(email.value == ""){
      document.getElementById('email').style.borderColor="red"
      document.getElementById('email_error').innerHTML="** Please Enter Your Email Id **"
      document.getElementById('email_error').style.color="red"
      document.getElementById('email_error').style.display="block"
      var status = 0
    }

    else{
      document.getElementById('email').style.borderColor="black"
      document.getElementById('email_error').style.display="none"
      var status = 1
    }

    if(password.value == ""){
      document.getElementById('password').style.borderColor="red"
      document.getElementById('password_error').innerHTML="** Please Enter Your Password **"
      document.getElementById('password_error').style.color="red"
      document.getElementById('password_error').style.display="block"
      var status = 0
    }

    else{
      document.getElementById('password').style.borderColor="black"
      document.getElementById('password_error').style.display="none"
      var status = 1
    }

    if(status == 0){
      return false
    }

    if(status == 1){
      return true
    }

}

function namevalid(){
    var name = document.getElementById('name').value
    if(isNaN(name)){
      document.getElementById('name').style.borderColor="black"
      document.getElementById('name_error').style.display="none"
    }

    else{
      document.getElementById('name').style.borderColor="red"
      document.getElementById('name_error').innerHTML="** Please Enter A Valid Name **"
      document.getElementById('name_error').style.color="red"
      document.getElementById('name_error').style.display="block"
    }
}

function agevalid(){
    var age = document.getElementById('age').value
    if(isNaN(age)){
        document.getElementById('age').style.borderColor="red"
        document.getElementById('age_error').innerHTML="** Please Enter Your Age **"
        document.getElementById('age_error').style.color="red"
        document.getElementById('age_error').style.display="block"
    }

    else{
        document.getElementById('age').style.borderColor="black"
        document.getElementById('age_error').style.display="none"
    }
     
}

  
function phonevalid(){
    var phone = document.getElementById('phone').value
    if(isNaN(phone)){
      document.getElementById('phone').style.borderColor="red"
      document.getElementById('phone_error').innerHTML="** Please Enter A Valid Mobile Number **"
      document.getElementById('phone_error').style.color="red"
      document.getElementById('phone_error').style.display="block"
    }

    if(phone.length<=0){
      document.getElementById('phone').style.borderColor="red"
      document.getElementById('phone_error').innerHTML="** Mobile Number Must Have 10 Digits **"
      document.getElementById('phone_error').style.color="red"
      document.getElementById('phone_error').style.display="block"
    }

    if(phone.length == 10){
      document.getElementById('phone').style.borderColor="green"
      document.getElementById('phone_error').innerHTML="** You Entered A Perfect Mobile Number **"
      document.getElementById('phone_error').style.color="green"
      document.getElementById('phone_error').style.display="block"
    }

    if(phone.length == 11){
      document.getElementById('phone').style.borderColor="red"
      document.getElementById('phone_error').innerHTML="** Mobile Number Must Have 10 Digits **"
      document.getElementById('phone_error').style.color="red"
      document.getElementById('phone_error').style.display="block"
    }

}

function emailvalid(){
    var email = document.getElementById('email').value
    if(isNaN(email)){
      document.getElementById('email').style.borderColor="black"
      document.getElementById('email_error').style.display="none" 
   }
   
   else{
      document.getElementById('email').style.borderColor="red"
      document.getElementById('email_error').innerHTML="** Please Enter A Valid Email Id **"
      document.getElementById('email_error').style.color="red"
      document.getElementById('email_error').style.display="block"
   }
}

function passwordvalid(){
    var pass = document.getElementById('password').value
    if(pass.length <= 8){
       document.getElementById('password').style.borderColor="red"
       document.getElementById('password_error').innerHTML="** Password Must Have 8 Characters **"
       document.getElementById('password_error').style.color="red"
       document.getElementById('password_error').style.display="block" 
    }

    if(pass.length == 8){
        document.getElementById('password').style.borderColor="green"
        document.getElementById('password_error').innerHTML="** You Entered A Perfect Password **"
        document.getElementById('password_error').style.color="green"
        document.getElementById('password_error').style.display="block"
    }

    if(pass.length == 9){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Password Must Have 8 Characters **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block" 
    }
    
}