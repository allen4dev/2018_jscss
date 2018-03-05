const slider = document.getElementById('slider');
const sliderContainer = document.getElementById('slider-container');
const items = document.querySelectorAll('.Slider-item');
const size = items.length;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const itemWidth = slider.offsetWidth;

let index = 1;
let width = 0;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(e) {
  // if index is equal to the first item
  // set index to the last item index
  // set the width to the full size of sliderContainer
  if (index === 1) {
    index = size;
    width = sliderContainer.offsetWidth - itemWidth;
    console.log('INDEX', index);
    console.log('WIDTH', width);
    sliderContainer.style.transform = `translateX(-${width}px)`;
    return;
  }

  // otherwise decrease the width by itemWidth
  // decrease the index by 1
  width -= itemWidth;
  index -= 1;
  console.log('INDEX', index);
  console.log('WIDTH', width);
  sliderContainer.style.transform = `translateX(-${width}px)`;
}

function nextSlide(e) {
  // if the index is equal to the last item translate to 0
  // and return to index 0
  if (index === size) {
    sliderContainer.style.transform = 'translateX(0px)';
    index = 1;
    width = 0;
    return;
  }

  // otherwise translate the sliderContainer one slot
  // and increment the index in 1
  width += itemWidth;
  sliderContainer.style.transform = `translateX(-${width}px)`;
  index += 1;
}
