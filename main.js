function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('header-container').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}
loadHeader();
function loadFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('footer-container').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}

function loadBook() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'book.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('book-container').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}
loadFooter();
loadBook();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 40,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

const inputs = document.querySelectorAll('.form-group input');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    input.parentElement.classList.toggle('filled', input.value.trim() !== '');
  });
});

