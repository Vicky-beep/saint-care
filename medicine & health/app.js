const footerDate = document.querySelector(".footer-company-name");
const currentYear = new Date().getFullYear();

footerDate.innerHTML = "Saint Care Pharmaceutical @ " + currentYear;

function openForm(){
 if(document.getElementById("myForm").style.display === "none") {
    document.getElementById("myForm").style.display = "block";
 } else{
    document.getElementById("myForm").style.display = "none";
 }
  
 
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

function myFunction(){
    var x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}