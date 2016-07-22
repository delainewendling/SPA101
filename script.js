var nav = document.querySelectorAll("li");
var pages = document.querySelectorAll(".page");

for (let i=0; i<nav.length; i++) {
  nav[i].addEventListener("click", clickedNavLink);
    // console.log(evt.target.hash); This give us the #contact, or #home, the place where the link directs us
    console.dir(document.querySelector(evt.target.hash)); //This brings up the DOM element where the link is pointing us to
}


function clickedNavLink(evt) {
    //This for loop will add the class of hidden to all of the elements with the class page.
    for (j=0; j<pages.length; j++) { //Need new variable if this is inside the function above. If not, this can be i again.
      pages[j].classList.add("hidden");
    }
    document.querySelector(evt.target.hash).classList.remove('hidden'); //This will remove the hidden class from the selected item

    showPage(evt.target.hash);
}

function showPage (id) {
  if (id) { //empty string is falsey so if hash is empty it will be false, otherwise it will be true
      document.querySelector(id).classList.remove("hidden")
    } else {
      document.querySelector("#home").classList.remove("hidden");
    }
}

showPage(location.hash);




