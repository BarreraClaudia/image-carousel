let list = document.querySelector('.carousel-list');
let items = document.querySelectorAll('.carousel-item');
let dots = document.querySelectorAll('.carousel-dots li');
let previousBtn = document.querySelector('#previous-img-btn');
let nextBtn = document.querySelector('#next-img-btn');

let activeIndex = 0;
let itemsLength = items.length - 1;

nextBtn.addEventListener('click', () => {
  if (activeIndex + 1 > itemsLength) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  reloadCarousel();
});

previousBtn.addEventListener('click', () => {
  if (activeIndex - 1 < 0) {
    activeIndex = itemsLength;
  } else {
    activeIndex--;
  }
  reloadCarousel();
});

let autoScrollCarousel = setInterval(() => {
  nextBtn.click();
}, 5000);

function reloadCarousel() {
  let leftPosition = items[activeIndex].offsetLeft;
  list.style.left = -leftPosition + 'px';

  let lastActiveDot = document.querySelector('.active-carousel-dot');
  lastActiveDot.classList.remove('active-carousel-dot');
  dots[activeIndex].classList.add('active-carousel-dot');

  clearInterval(autoScrollCarousel);
  autoScrollCarousel = setInterval(() => {
    nextBtn.click();
  }, 5000);
}

dots.forEach((li, index) => {
  li.addEventListener('click', () => {
    activeIndex = index;
    reloadCarousel();
  });
});
