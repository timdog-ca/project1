// NAVIGATION
document.addEventListener("scroll", showMenu, true);

function showMenu() {
  if (document.documentElement.scrollTop > 25) {
    document.getElementById("navigation").style.top = "0";
    document.getElementById("navigation").style.opacity = "1";

  } else {
    document.getElementById("navigation").style.top = "-75px";
    document.getElementById("navigation").style.opacity = "0";
  }
}
