const Slider = (function IIFE() {
  let slider;
  let sliderContainer;
  let items;

  let prev;
  let next;

  let itemWidth;
  let size;

  let index;
  let width;

  function init() {
    slider = document.getElementById('slider');
    sliderContainer = document.getElementById('slider-container');
    items = document.querySelectorAll('.Slider-item');
    prev = document.getElementById('prev');
    next = document.getElementById('next');
    itemWidth = slider.offsetWidth;
    size = items.length;
    index = 1;
    width = 0;

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
  }

  function move(width) {
    sliderContainer.style.transform = `translateX(-${width}px)`;
  }

  function prevSlide(e) {
    if (index === 1) {
      index = size;
      width = sliderContainer.offsetWidth - itemWidth;

      move(width);
      return;
    }

    width -= itemWidth;
    index -= 1;

    move(width);
  }

  function nextSlide(e) {
    if (index === size) {
      move(0);
      index = 1;
      width = 0;
      return;
    }

    width += itemWidth;
    move(width);
    index += 1;
  }

  return {
    init,
  };
})();
