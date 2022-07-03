const scrollToTopButton = document.getElementById("scrollToTop");
const burgerButton = document.querySelector(".page-header__burger");
const menu = document.querySelector(".page-header-nav");

const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } 
  else {
    scrollToTopButton.style.display = "none";
  }
};

const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};

function closeNav() {
  body.classList.remove("lock");
  burgerButton.classList.remove("active");
  menu.classList.remove("active");
}

document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function(e) {
  e.preventDefault();
  scrollToTop();
});