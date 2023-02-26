<?php
	$servername: "localhost";
	$username: "root";
	$password: "password";
	
	$conn = new mysqli($servername, $username, $password);
	
	if ($conn->connect_error)
	{
		die("Connection failed: " . $conn->connect_error);
	}
	else
	{
		echo "Connection successful.";
	}
?>