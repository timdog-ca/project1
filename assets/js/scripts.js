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

// Squirrel Facts

const rndInt = Math.floor(Math.random() * 6) + 1;

const sqfacts = [
  {"fact":"Squirrels can find food buried beneath a foot of snow."},
  {"fact":"A squirrel's front teeth never stop growing."},
  {"fact":"Squirrels may lose 25 percent of their buried food to thieves."},
  {"fact":"They zigzag to escape predators."},
  {"fact":"Squirrels may pretend to bury a nut to throw off potential thieves."},
  {"fact":"A newborn squirrel is about an inch long."},
  {"fact":"Humans introduced squirrels to most of our major city parks."},
  {"fact":"Squirrels are acrobatic, intelligent, and adaptable."},
  {"fact":"They get bulky to stay warm during the winter."},
  {"fact":"Squirrels don't dig up all of their buried nuts, which results in more trees!"},
  {"fact":"The Word 'Squirrel' Comes From Greek for 'Shadow Tail'"},
  {"fact":"Only a Few Squirrels Hibernate"},
  {"fact":"Some Ground Squirrels Make 'Rattlesnake Perfume'"},
  {"fact":"There are 22 different species of squirrel found in Canada"}
];

console.log(sqfacts[rndInt]);

document.getElementById("squirrelfacts").innerHTML = sqfacts[rndInt].fact;







