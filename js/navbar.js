const toggleButton = document.querySelector(".navbar .toggle");
const navbarBody = document.querySelector(".navbar .body");
const navbarBodyItems = navbarBody.querySelectorAll(".item");


(function setNavbarItemsStyle() {
  navbarBodyItems.forEach(item => {
    const backgroundColor = item.dataset.color;
    item.style.borderBottom = `2px solid var(--${backgroundColor})`;
  })
})();

(function setNavbarItemsHover() {
  navbarBodyItems.forEach(item => {
    item.addEventListener('mouseover', e => {
      const backgroundColor = e.target.dataset.color;
      e.target.style.color = "white";
      e.target.style.backgroundColor = `var(--${backgroundColor})`;
    });

    item.addEventListener('mouseleave', e => {
      e.target.style.color = "black";
      e.target.style.backgroundColor = "white";
    });
  });
})();


toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle("open");
  navbarBody.classList.toggle("open");
});

export default {}