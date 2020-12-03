function checkFormEntry()
{
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML="";

    var email = document.getElementById("emailEntry").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    
	var errors="";
	
	if(email.length<10 || !email.includes("@"))
	{
		alert("Enter a Valid Email Address");
    }
    if(pass1 == ""){
        alert("Please enter a password");
    }else{
    if(pass1.length<8)
	{
		alert("Your Password must be 8 characters length or more");
    }
    if(pass2 != pass1)
	{
		alert("The password you typed doesn't match the above one");
    }
}
    if(document.getElementById("checkBox").checked == false){
        errors+= "You need to agree to the license terms";
    }
    
    
	if(errors!="")
	{
		errorMessage.innerHTML=errors;
	}
	else{
        if(pass1.length>=8 && pass2 == pass1  && email.length>=10 && email.includes("@") ){
            var elem = document.getElementById("myBarr");   
            var width = 0;
            var id = setInterval(frame, 1);
            function frame() {
              if (width == 100) {
                clearInterval(id);
              } else {
                width++; 
                elem.style.width = width + '%'; 
              }
            }
            alert("Your Details are registered. ");
            setTimeout(function(){ 
                window.location.href="index.html";
            }, 1000);
            
        }
		
	}
	return false; 
}

