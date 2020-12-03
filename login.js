var attempt = 3;



function checkFormEntry()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == ""){
        alert("Please Enter a Valid Username");
    }else{
	if(username.length<5)
	{
		alert("The username must be at least 5 Characters");
    }
}
	if(password == ""){
        alert("Please enter a valid Password");
    }else{
	if(password.length<8)
	{
		alert("Please Type Correct 8 digit Password");
    }
    if(username!="" && password!="" && password.length>=8 && username.length>=5){
        var elem = document.getElementById("myBar");   
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
    }
}

    // if(attempt==0){
    //     document.getElementById("username").disabled = true;
    //     document.getElementById("password").disabled = true;
    //     document.getElementById("submitBtn").disabled = true;
    //     return false;
    // }
    	
}

