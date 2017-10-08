/* Create an HTML page with two buttons that argue with each other.
When one button is clicked, the text "I'm right" should be placed next to it.
When the other button is clicked, the text is replaced with, "No, I'm right!" */

function buttonClick1 (){
	document.getElementById("buttontext").innerHTML="I'm Right";
}
function buttonClick2(){
	document.getElementById("buttontext").innerHTML="No, I'm Right";
}

/* Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"*/

function imgHover() {
  document.getElementById("imgText").innerText="Hey, I told you not to hover over me!";
}
/* Create an HTML page with javascript that listens for a keypress.
When the user presses that key, the text of the H1 should show the value of the key they have pressed.
Example: If the user presses "J", the text inside the H1 should be "J".*/

var keypress = document.getElementById("imgText2")
document.addEventListener("keydown", function(e){
imgText2.innerHTML = e.key
})

/* Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a
submit button. In a Javascript file, write code that does the following things:
1. checks that the password is 12345678
2. checks that the username contains at least one number
3. if anything is wrong, send an alert message saying "incorrect"
4. Your page should also include an H1 tag. If the information in the form
is correct, have Javascript change the text in the H1.*/

function pwValidation () {
	var password
	password=document.getElementById("passwordtext").value;
	if (password!="12345678") {
		alert ("Wrong Password Input")
		password=false
	} else{
		return true;
	}
}

function unValidation(){
	var username
	username=document.getElementById("usernametext").value;
	if (username.includes(1,2,3,4,5,6,7,8,9)){
		username=true
	} else {
		alert("Username must contain at least one number")
		username=false
		}
	}

function emValidation(){
	var email
	email=document.getElementById("emailtext").value;
	if(email.includes("@")){
		email=true
	} else {
		alert("incorrect email format")
		email=false
	}
}

function formSubmit(){
	if(email,password,username=true){
		document.getElementById("submittext").innerText="Your Information has been succesfully submitted"
	}
}
