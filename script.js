
 //Timer begins count 
 var start= new Date().getTime(); 
 
 //Generate random colour for the squre
 function getRandomColor()
 {
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for(var i = 0; i < 6; i++)
     {
         color += letters[Math.floor(Math.random() * 16)];
     }

     return color;
 }
 function makeShapeAppear()
 {
     //Random position - start 
     var top = Math.random() * 300;
     var left = Math.random() * 300;
     var width = Math.random() * 300;

     //Shape occasionally changes to circle

     if(Math.random() > 0.5)
     {
         document.getElementById("shapes").style.borderRadius = "50%";
     }
     else
     {
         document.getElementById("shapes").style.borderRadius = "0";
     }

     //Random color
     document.getElementById("shapes").style.backgroundColor = getRandomColor();
     document.getElementById("shapes").style.top = top + "px";
     document.getElementById("shapes").style.left = left + "px";
     //Position end
     document.getElementById("shapes").style.display = "block";
     var start= new Date().getTime(); 
 }
 function appearAfterDelay()
 {
     //Delay timer
     setTimeout(makeShapeAppear, Math.random()) * 2000;
 }
 appearAfterDelay();
  
 document.getElementById("shapes").onclick = function()
 {
     document.getElementById("shapes").style.display = "none";
 


 var end = new Date().getTime();
 var timeTaken = (end - start)/1000;
 document.getElementById("timeTaken").innerHTML = timeTaken + "s";

 //Make shape appear again
 appearAfterDelay();
 }
 
