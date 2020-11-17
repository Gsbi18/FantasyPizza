function gomb(){
   let osszeg=document.getElementById("ennyit").value*1;
   document.getElementById("kosar").style.display="block";
   let pizza=document.getElementById("ara").value*1;
   osszeg+=pizza;
   document.getElementById("ennyit").value=osszeg;
   console.log(osszeg);
   console.log(pizza);
}