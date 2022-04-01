
    // Get the modal
    var modal = document.getElementById('id01');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
      // Automatic Slideshow - change image every 4 seconds
      var myIndex = 0;
      
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 4000);    
      }
      
      // Used to toggle the menu on small screens when clicking on the menu button
      function myFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
      }
      
      // When the user clicks anywhere outside of the modal, close it
      var modal = document.getElementById('ticketModal');
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


// Script for sidebar ------------------------------



function openNav() {
  document.getElementById("mySidenav").style.width = "380px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Script for sidebar ------------------------------