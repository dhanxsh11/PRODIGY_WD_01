
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    var logo = document.getElementsByClassName("logo")[0];
    var title = document.getElementsByClassName("title")[0];
  
    if (currentScrollPos > 250) {
      navbar.style.backgroundColor = "#1522b0";
      navbar.style.top = "0";
      logo.style.display = "block";
      title.style.display = "block";
      navbar.style.transition = "background-color 0.5s"; // Adding transition effect
    } else {
      navbar.style.backgroundColor = "rgba(21, 34, 176, 0)";
      logo.style.display = "none";
      title.style.display = "none";
      navbar.style.transition = "background-color 0.5s"; // Adding transition effect
    }
  }
  