/* this javascript was written by Phillip Abraham and modified by Seyi Idowu*/

function destChoose() {
    let dest = localStorage.getItem("listvalue");
    console.log(dest);
    
   if (dest == "Canada") { 
      document.getElementById("d1").style.display='block';
      document.getElementById("d2").style.display='block';
    } 
    
   else if (dest == "Europe") { 
      document.getElementById("d7").style.display='block';
      document.getElementById("d8").style.display='block';
    } 

  else if (dest == "USA") { 
      document.getElementById("d9").style.display='block';
      document.getElementById("d10").style.display='block';
    } 

   else if (dest == "Dominican Republic") { 
      document.getElementById("d3").style.display='block';
      document.getElementById("d3").style.display='block';
    } 

   else if (dest == "Jamaica") { 
      document.getElementById("d4").style.display='block';
      document.getElementById("d4").style.display='block';

    } 

    else if (dest == "Asia") { 
      document.getElementById("d5").style.display='block';
      document.getElementById("d6").style.display='block';
    } 

    else {
      document.getElementById("d5").style.display='none'
      document.getElementById("d6").style.display='none';
}
  
  document.getElementById("result").innerHTML = localStorage.getItem("listvalue");
}

 