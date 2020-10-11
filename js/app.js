/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
//Create list of sections

const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
const topButton = document.querySelector("#topButton");
const navMenu = document.querySelector("#navMenu");
let navLink = "";
let newTarget = "";
let navItems = "";
let newRect = "";




/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *


*/



// build the navBar
buildNav = () => {
  for (section of sections){
    let id = section.id;
    let dataName = section.dataset.name;
    navItems += `<li><a id="navLink__${id}" class="menu__link" data-target="${id}" href="">${dataName}</a></li>`;
  }
  return buildNav;
};




// Add class 'active' to section when near top of viewport

isInViewport = () => {
  for (const section of sections) {
    let rect = section.getBoundingClientRect();
    sectionView = document.querySelector(`#${section.id}`);
    navLink = document.querySelector(`#navLink__${section.id}`);
    if (rect.top <= 200 && rect.bottom >= 200) {
      console.log("In viewport")
      sectionView.classList.add("your-active-class");
      navLink.classList.add("your-active-link");
    } else {
      console.log("Not in viewport")
      sectionView.classList.remove("your-active-class");
      navLink.classList.remove("your-active-link");
    }
  }
}






// Scroll to anchor ID using scrollTo event

navBarClick = (ev) => {
  ev.preventDefault();
  newTarget = document.querySelector(`#${ev.target.dataset.target}`);;
  newTarget.scrollIntoView({behavior: 'smooth'});
};


//Top button

scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

buildNav();


navbarList.insertAdjacentHTML('beforeend', navItems);



// Scroll to section on link click
navbarList.addEventListener("click", navBarClick);

//Top button
topButton.addEventListener("click", scrollToTop);

// Set sections as active

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop < 435) {
    topButton.style.display = "none";}
  else {
    topButton.style.display = "block";}
});

window.addEventListener("scroll", isInViewport);
