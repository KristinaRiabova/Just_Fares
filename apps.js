
const content = { 
  Eu: {
    text : ` Begin your adventure in the heart of Europe, where centuries of history meet modern-day splendor. 
    Traverse the enchanting streets of Paris, Rome, and Barcelona. Immerse yourself in the majestic landscapes of the Swiss Alps. 
    Taste authentic pasta in Italy, witness the grandeur of the Eiffel Tower, and experience the mesmerizing art and culture that Europe is renowned for.

    `,
    img : `./img/Europe.jpg`
  }, 
  US: {
    text : ` Discover the diverse beauty of the United States. 
    From the bustling streets of New York City to the serene landscapes of the Grand Canyon, the USA offers something for every traveler. 
    Explore the iconic Route 66, indulge in the culinary wonders of New Orleans, and witness the grandeur of the nation's capital, Washington D.C.`,
    img : `./img/Usa.jpg`
  },
   Mexico: {
    text : ` Step into the colorful world of Mexico. Explore ancient Mayan ruins, relax on pristine beaches, and savor the flavors of Mexican cuisine. 
    Dive into the crystal-clear waters of the Yucatan Peninsula, marvel at the historic architecture in Mexico City, and witness the Day of the Dead celebrations that highlight the country's rich traditions.`,  
    img : `./img/Mexico.jpg`
  },
   Bali: {
    text : ` Find your paradise in Bali, where lush landscapes, pristine beaches, and spiritual tranquility converge. 
    Visit the sacred temples of Uluwatu, soak in the vibrant energy of Ubud, and indulge in world-class wellness retreats.
     With its welcoming culture and stunning scenery, Bali promises an idyllic escape.`, 
    img : `./img/Bali.jpg`
  },
  Asia: {
    text : ` Asia offers an incredible diversity of experiences. 
    Journey through the bustling streets of Tokyo, explore the ancient temples of Angkor Wat, and unwind on the serene beaches of Phuket.
    Discover the rich tapestry of cultures, from the vibrant markets of India to the harmonious traditions of Bhutan.`, 
    img : `./img/Asia.jpg`
  },
    Dom: {
    text : ` End your journey in the sun-kissed Caribbean paradise of the Dominican Republic.
     Enjoy the white sandy beaches, clear blue waters, and vibrant nightlife in Punta Cana. Explore the historic charm of Santo Domingo, and savor the flavors of the local cuisine, all set against a backdrop of breathtaking natural beauty.

    `,
    img : `./img/dom.jpg` 
  } 
} 


function changeActive(newActiveId) {
  const serviceItems = document.getElementsByClassName('services-item');
  for(let i = 0; i < serviceItems.length; i++) {
    const li = serviceItems[i];
    li.classList.remove('active');
    if (li.id === newActiveId) {
      li.classList.add('active');
    }

  }
}
function setContent(key) {
  const div = document.getElementById('content');
  changeActive(key);
  div.innerHTML = `
      <img class="services-item-content-img" src="${content[key].img}" alt="" />
      <p class="services-item-content-text">${content[key].text}</p>
    `;
}
window.addEventListener(
  'load',
  function() {
    setContent('Eu');
  }
);

  
const tabsNameWork = document.querySelectorAll(".third-page-item");
const tabsDescriptionWork = document.querySelectorAll(".work-photo-list");
const buttonLoad = document.querySelector(".button.load");
tabsNameWork.forEach((name) => {
  name.addEventListener("click", function () {
    const dataTab = name.dataset.worktab;
    document.querySelector(".third-page-item.active").classList.remove("active");
    name.classList.add("active");

    tabsDescriptionWork.forEach((element) => {
      const dataTabDescription = element.dataset.workdescription; 

      dataTabDescription === dataTab
        ? (element.style.display = "block")
        : (element.style.display = "none");
      if (dataTab === "All") {
        element.style.display = "block";
      }
    });
  });
});



const moreImages = [
  'us-img/c1.jpg',
  'us-img/c2.jpg', 
  'us-img/c3.jpg',
  'us-img/c4.jpg',
  'us-img/c5.jpg',
  'us-img/c6.jpg',
  'us-img/c7.jpg',
  'us-img/c8.jpg',
  'us-img/c9.jpg',
  'us-img/c10.jpg',
  'us-img/c11.jpg', 
  'us-img/c12.jpg',
];

function loadMore() {
  const worklist = document.getElementById('work-list'); 
  const buttonload = document.getElementById('loadMore');

  for( let i = 0; i<moreImages.length; i+=1){
    const image = moreImages[i];
    const li = document.createElement('li');
    li.setAttribute('class', 'work-photo-list');
    li.innerHTML = `
    <li class="work-photo-list" data-workdescription="Eu">
                <img class="work-photo-img" src="${image}" alt="Graphics" />
                <div class="work-photo-description"> 
                    <a href="#">
                        <img class="work-photo-icon" src="./sections-img/work-links.svg" alt="Graphics" /></a>
                    <h4 class="work-photo-description-title">COUNTRY</h4>
                    <p class="work-photo-description-text">Europe</p>
                </div>
            </li>
    `;
    worklist.appendChild(li);
  } 
  buttonload.parentNode.removeChild(buttonload);
  
}



const buttonLoadGallery = document.querySelector(".button-load1");
buttonLoadGallery.addEventListener("click", function () {
  loadMoreGallery();
});

function loadMoreGallery() {
  document
    .querySelector(".gallery-add.additionally")
    .classList.remove("additionally");
  buttonLoadGallery.style.display = "none";
}



new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-forvard",
    prevEl: ".swiper-button-back", 
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  thumbs: {
    swiper: {
      el: ".slider-mini",
      slidesPerView: 4,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
}); 

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-bar-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1); 
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
