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

//Generate list of sections based on index.html
const sections = document.querySelectorAll("section");

//other global variables
const navbarList = document.querySelector("#navbar__list");
const topButton = document.querySelector("#topButton");
const navMenu = document.querySelector("#navMenu");
let navLink = "";
let newTarget = "";
let navItems = "";

// build the navBar
buildNav = () => {
  for (section of sections){
    let id = section.id;
    let dataName = section.dataset.name;
    navItems += `<li><a id="navLink__${id}" class="menu__link" data-target="${id}" href="">${dataName}</a></li>`;
  }
  return buildNav;
};

buildNav();

navbarList.insertAdjacentHTML('beforeend', navItems);

// Add class 'active' to section when near top of viewport

isInViewport = () => {
  for (const section of sections) {
    let rect = section.getBoundingClientRect();
    sectionView = document.querySelector(`#${section.id}`);
    navLink = document.querySelector(`#navLink__${section.id}`);
    if (rect.top <= 200 && rect.bottom >= 200) {
      // console.log("In viewport")
      sectionView.classList.add("your-active-class");
      navLink.classList.add("your-active-link");
    } else {
      // console.log("Not in viewport")
      sectionView.classList.remove("your-active-class");
      navLink.classList.remove("your-active-link");
    }
  }
}

window.addEventListener("scroll", isInViewport);

// Scroll to anchor ID using scrollTo event

navBarClick = (ev) => {
  ev.preventDefault();
  newTarget = document.querySelector(`#${ev.target.dataset.target}`);;
  newTarget.scrollIntoView({behavior: 'smooth'});
};

navbarList.addEventListener("click", navBarClick);

//Top button

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop < 435) {
    topButton.style.display = "none";}
  else {
    topButton.style.display = "block";}
});

scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

topButton.addEventListener("click", scrollToTop);
