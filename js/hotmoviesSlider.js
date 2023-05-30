const container = document.querySelector(".hotmoviesSlider .container");
const leftArrow = document.createElement('button');
const rightArrow = document.createElement('button');

leftArrow.classList.add("prevArrowBtn");
rightArrow.classList.add("nextArrowBtn");

container.insertAdjacentElement('beforebegin', leftArrow);
container.insertAdjacentElement('afterend', rightArrow);


(function () {
  $('.hotmoviesSlider .container').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: leftArrow,
    nextArrow: rightArrow,
  });
})();


export default {};