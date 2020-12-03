<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="icon" href="images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="App.js"></script>
 
</head>
<header id="top_header" class="clearfix">
  <div class="wrapper">
    <a href="index.html"><h1 class="logo">Lockdown<span>&amp;</span>Chill</h1></a>
  
    <a href="#" class="menu"><i class="fa fa-bars"></i></a>
    <nav id="main_nav">

      <a href="login.html">Login</a>
      <a href="Register.html">Sign-up</a>        
      <a href="Movies.html" >Movies</a>
      <a href="TvShows.html" >TV Shows</a>
      <a href="Contact.html">Contact Us</a>
      <a href="About.html">About</a>
    </nav>
  </div>
  </header>
<body>
  <div id="myProgress">
		<div id="myBar"></div>
    </div>
    <?php include 'login_function.php'; ?>
  <div class="login-photo">
    <class class="form-container">
        <form method="post" id="form1" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <h2 class="text-center"> You are Ohana !<br><strong>Login</strong></h2>
            <div class="form-group"><input class="form-control" id="username" type="text" value="<?php echo $name;?>" name="name" placeholder="Username"></div>
            <span class="error">* <?php echo $nameErr;?></span>
            <div class="form-group"><input class="form-control" id="password" type="text" value="<?php echo $email;?>">name="email" placeholder="Email"></div>
            <span class="error">* <?php echo $emailErr;?></span>
            <div class="form-group">
            </div>
            <div class="form-group"><input class="btn btn-primary btn-block" type="button" value="Login" id="submit" onclick="checkFormEntry()"></div>
          </form>
          <?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;

?>
    </class>
</div>
  
  
</body>
</html>