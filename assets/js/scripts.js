// Toggle Menu Bar
document.addEventListener("scroll", showMenu, true);

function showMenu() {
  if (document.documentElement.scrollTop > 50) {
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


// Load Squirrel Facts & Set the P tag with random fact
fetch('./assets/data/facts.json')
  .then(response => response.json())
  .then(data => {
    const rndInt = Math.floor(Math.random() * data.length) + 1;
    document.getElementById("squirrelfacts").innerHTML = data[rndInt].fact;
  })
  .catch(error => console.error('Error:', error));


// set degree of linear-gradient for home section
const rndDeg = Math.floor(Math.random() * 60) + 20;
document.getElementById("home").setAttribute = ("background","linear-gradient(-" + rndDeg + "deg, #c68b59, #fcdec0, #c68b59);");


// hightlight active menu item
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('header nav .main-navitems ul li');

window.addEventListener("scroll", () => {

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navli.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
