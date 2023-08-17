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

function loadFaq() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'faq.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('faq-container').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}
loadHeader();
loadFaq();
loadBook();
loadFooter();


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 40,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
      }, 
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: 'horizontal',
    
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
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
    
      
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 20
      },
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





document.addEventListener('DOMContentLoaded', function() {
   
  const menuBtn = document.querySelector('.menuBtns');

      menuBtn.addEventListener('click', () => {
        console.log('dsakjhkj');
          document.body.classList.toggle('open');
      });
  }
);
