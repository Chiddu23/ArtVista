function myFunction(a) {
    var y = "myDIV " + a;
    var z="read-more-btn "+a;
    var x = document.getElementById(y);
    var button = document.getElementById(z);
    
    if (x.style.display === "none") {
      x.style.display = "block";
      button.textContent = "Read Less";
    } else {
      x.style.display = "none";
      button.textContent = "Read More";
    }
  }
  