$(document).ready(function(){
	document.getElementById('myForm').style.display = 'none';
});


$(".btn").click(function(){
	document.forms["myForm"].submit();
});