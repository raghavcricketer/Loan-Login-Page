function AddData() {
    var y = document.getElementById("name").value;
    var z = document.getElementById("email").value;
    const letters = "^[a-zA-Z]+$";
    const pattern = "^[$|^.*@.*\..*]+$";
    if (y.search(letters)==-1) {
        alert("Wrong Value Entered for name");
    }
    else if(z.search(pattern)==-1)
    {
        alert("Wrong Value Entered for email");
    } 
    else {
        var rows = "";
        var name = document.getElementById("name").value; ;
        var email = document.getElementById("email").value;
        var mob = document.getElementById("mob").value;
        var acctype = document.getElementById("acctype").value;

        rows += "<td>" + name + "</td><td>" + email + "</td><td>" + mob + "</td><td>" + acctype + "</td>";
        var tbody = document.querySelector("#list tbody");
        var tr = document.createElement("tr");

        tr.innerHTML = rows;
        tbody.appendChild(tr)

        //
    }
}

function ResetForm() {
    document.getElementById("person").reset();
}

function FirstName(){
    var x = document.getElementById("first-name").value;
    const letters = "^[a-zA-Z]+$";
    if (x.search(letters)==-1) {
        document.querySelector("#set-text-firstname").innerHTML="Please enter a valid first name!";
        document.querySelector("#set-text-firstname").style.color="red";
    } 
    else{
        document.querySelector("#set-text-firstname").innerHTML="";
    }
}

function LastName(){
    var x = document.getElementById("last-name").value;
    const letters = "^[a-zA-Z]+$";
    if (x.search(letters)==-1) {
        alert("Hi")
        document.querySelector("#set-text-lastname").innerHTML="Please enter a valid last name!";
        document.querySelector("#set-text-lastname").style.color="red";
    }
    else{
        document.querySelector("#set-text-lastname").innerHTML="";
    } 
}
function isEmail(){
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var x = document.getElementById("your_email").value;
    if (x.search(regexp)==-1) {
        document.querySelector("#set-text-email").innerHTML="Please enter a valid email address!";
        document.querySelector("#set-text-email").style.color="red";
    } 
    else{
        document.querySelector("#set-text-email").innerHTML="";
    }
}
function isNumber(){
    var re = /^[7-9][0-9]{9}$/;
    var x = document.getElementById("phone").value;
    if (x.search(re)==-1) {
        document.querySelector("#set-text-number").innerHTML="Please enter correct mobile number!";
        document.querySelector("#set-text-number").style.color="red";
    } 
    else{
        document.querySelector("#set-text-number").innerHTML="";
    }
}
function isPassword(){
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var x = document.getElementById("your_password1").value;
    if (x.search(regex)==-1) {
        document.querySelector("#set-text-password").innerHTML="Please enter a strong password!";
        document.querySelector("#set-text-password").style.color="red";
    } 
    else{
        document.querySelector("#set-text-password").innerHTML="";
    }
}
function isConfirm(){
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var x = document.getElementById("your_password2").value;
    if (x.search(regex)==-1 || (document.getElementById("your_password1").value)!=(document.getElementById("your_password2").value)) {
        document.querySelector("#set-text-confirm-password").innerHTML="Password entered don't match!";
        document.querySelector("#set-text-confirm-password").style.color="red";
    } 
    else{
        document.querySelector("#set-text-confirm-password").innerHTML="";
    }
}
function isBirthdate(){
  let today = new Date();
  today.setHours(0,0,0,0);

  // Parse the provided date in the default YYYY-MM-DD format.
  let birthdate = new Date(document.getElementById("birth").value);
  console.log(today)
  // Check whether the provided date is equal to or less than the current date.
  if (birthdate > today) {
    document.querySelector("#set-text-birthdate").innerHTML="Please enter a valid date of birth";
    document.querySelector("#set-text-birthdate").style.color="red";
  } else {
    document.querySelector("#set-text-birthdate").innerHTML="";
  }
}