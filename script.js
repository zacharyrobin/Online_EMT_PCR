
// function icon() {
//   document.getElementById("bar1").classList.toggle("change");

// }
  function togNav() {
    var nav = document.getElementById("mySidenav");
    if (nav.style.width == '250px') {
      nav.style.width = '0';
      document.getElementById("main").style.marginLeft = "0px";
    } else {
      nav.style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      }
  }
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
