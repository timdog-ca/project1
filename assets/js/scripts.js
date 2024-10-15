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

// Send Email

function submitForm(form) {
  window.open("mailto:info@brownsquirreldesign.ca?subject=" + form.subject.value + "&body=Name:%20" + form.name.value + "%0D%0AMessage:%20" + form.message.value);
  return false; /* cancel submit or else page reloads */
}

fetch('../assets/data/facts.json').then().then().catch();