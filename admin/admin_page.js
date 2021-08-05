function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  /* JS FOR CONTENT */
  var button = document.getElementsByClassName('but'),
      tabContent = document.getElementsByClassName('tab-content');
      button[0].classList.add('active');
      tabContent[0].style.display = 'block';


function set(e, set) {
  var i;
  for (i = 0; i < button.length; i++) {
      tabContent[i].style.display = 'none';
      button[i].classList.remove('active');
  }

  document.getElementById(set).style.display = 'block';
  e.currentTarget.classList.add('active');
}
