// кнопка 'наверх'
const scrollBtn = document.querySelector(".scroll-top-btn");
let section = document.querySelector("section");

scrollBtn.addEventListener("click", (event) => {
  console.log(event.target);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // section.scrollIntoView({
  //     behavior: "smooth"
  // });
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 150) {
    scrollBtn.style.visibility = "visible";
    scrollBtn.style.opacity = "0.8";

    // hover
    scrollBtn.addEventListener("mouseover", () => {
      scrollBtn.style.opacity = "1";
    });
    // unhover
    scrollBtn.addEventListener("mouseleave", () => {
      scrollBtn.style.opacity = "0.8";
    });
    // ---
  } else {
    scrollBtn.style.visibility = "hidden";
    scrollBtn.style.opacity = "0";
  }
});

// отправка файлов
// const fileDropArea = document.getElementById("file-drop-area");

// fileDropArea.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   fileDropArea.classList.add("drag-over");
// });

// fileDropArea.addEventListener("dragleave", () => {
//   fileDropArea.classList.remove("drag-over");
// });

// fileDropArea.addEventListener("drop", (event) => {
//   event.preventDefault();
//   fileDropArea.classList.remove("drag-over");

//   const files = event.dataTransfer.files;
//   // Do something with the dropped files
// });

// наведение на фото
const imgDir = "src/img/events/";
const events = ["first", "second", "third", "fourth", "fifth"];

for (let i = 0; i < events.length; i++) {
  document.querySelector(`.${events[i]}`).addEventListener("mouseover", (e) => {
    const mainImg = document.querySelector(".main-img");
    if (!mainImg.src.endsWith(`${imgDir}${events[i]}.jpg`)) {
      // проверяем, что фото еще не установлено
      mainImg.style.opacity = 0; // устанавливаем прозрачность 0
      setTimeout(() => {
        // задержка на 0.5 секунды
        mainImg.src = `${imgDir}${events[i]}.jpg`;
        mainImg.style.opacity = 1; // устанавливаем прозрачность 1
      }, 100);

      // Добавляем класс "active" текущему элементу
      document.querySelector(`.${events[i]}`).classList.add("active");

      // Удаляем класс "active" у всех остальных элементов
      for (let j = 0; j < events.length; j++) {
        if (j !== i) {
          document.querySelector(`.${events[j]}`).classList.remove("active");
        }
      }
    }
  });
}

// flickity
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: 2500,
  pauseAutoPlayOnHover: false,
  fade: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});





// scroll to links
const navLinks = document.querySelectorAll('.link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', (e)=>{
    e.preventDefault();  
  });
};



document.querySelector('#linkAbout').addEventListener('click', (e)=> {
  document.querySelector('#about').scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector('#linkGallery').addEventListener('click', (e)=> {
  document.querySelector('#gallery').scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector('#linkEvents').addEventListener('click', (e)=> {
  document.querySelector('#events').scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector('#linkDemo').addEventListener('click', (e)=> {
  document.querySelector('#demo').scrollIntoView({
    behavior: "smooth"
  });
});




// hamburger

const showMenu = document.querySelector("#showMenu");
const navMenu = document.querySelector(".menu");

let mobileVisible = false;

showMenu.addEventListener("click", (e) => {
  if (!mobileVisible) {
    navMenu.classList.add("active");
    mobileVisible = true;

    document.querySelector('#mobileGallery').addEventListener('click', (e)=> {
      document.querySelector('#gallery').scrollIntoView({
        behavior: "smooth"
      });
    });

    document.querySelector('#mobileEvents').addEventListener('click', (e)=> {
      document.querySelector('#events').scrollIntoView({
        behavior: "smooth"
      });
    });

    document.querySelector('#mobileDemo').addEventListener('click', (e)=> {
      document.querySelector('#demo').scrollIntoView({
        behavior: "smooth"
      });
    });
  } else {
    navMenu.classList.remove("active");
    mobileVisible = false;
  }
});

// mobile nav
const mobileLinks = document.querySelectorAll(".mobile-link");

for (let l = 0; l < mobileLinks.length; l++) {
  mobileLinks[l].addEventListener('click', (e)=> {
    e.preventDefault();

    navMenu.classList.remove("active");
    mobileVisible = false;
  });
}


// github links hover effects
const gitLinks = document.querySelectorAll('.gitlink-item');
for (let i = 0; i < gitLinks.length; i++) {
  gitLinks[i].addEventListener('mouseover', (e)=> {
    e.preventDefault();
    gitLinks[i].classList.add('active');
    

    // if (gitLinks[i].classList.entries('gitlink-img')) {
    //   console.log(true);
    // }
  });

  gitLinks[i].addEventListener('mouseout', () => {
    gitLinks[i].classList.remove('active');
  });
};