//slide js
var splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
  type: "loop",
});
splide.mount();

// particlesJS
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 330,
        color: "#f14d28",
        opacity: 0.2,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

// Api
let dataa = [];
let secArr = [];
(async function () {
  let API = await fetch("./API.json");
  let data = await API.json();
  let finalDataHome = data.popularProducts;
  secArr = finalDataHome;
  dataa = data.gallery;
  display(finalDataHome);
  displayGallery(dataa);
  pagGallery(dataa);

})();

// display on page
function display(product) {
  let sum = "";
  for (let i = 0; i < product.length; i++) {
    sum += `
  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div class="card wow fadeInUp" data-wow-duration="1.5s">
        <a onclick="product(${i})" href="./products.html">
        <div class="card-img">
        <img class="card-img-top" src="${product[i].img}" alt="Card image cap" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${product[i].title}</h5>
          <p class="card-text">${product[i].price}</p>
        </div>
        </a>
      </div>
    </div>
  `;
  }
  document.getElementById("row").innerHTML = sum;
}
function product(product) {
  localStorage.setItem("item", JSON.stringify(secArr[product]));
}

//gallery sec
function displayGallery(galleryProduct) {
  for (let i = 0; i < 5; i++) {
    document.getElementById(`img-${i}`).src = galleryProduct[i].img;
    document.getElementById(`ti-${i}`).innerHTML = galleryProduct[i].title;
  }
}

// Pricing Cards
let up = document.getElementById("cardPriceCenter");
up.addEventListener("mouseover", function () {
  up.style.top = "50px";
});
up.addEventListener("mouseout", function () {
  up.style.top = "80px";
});

let downOne = document.getElementById("cardPriceCenterOne");
downOne.addEventListener("mouseover", function () {
  downOne.style.top = "50px";
});
downOne.addEventListener("mouseout", function () {
  downOne.style.top = "0px";
});

let downTwo = document.getElementById("cardPriceCenterTwo");
downTwo.addEventListener("mouseover", function () {
  downTwo.style.top = "50px";
});
downTwo.addEventListener("mouseout", function () {
  downTwo.style.top = "0px";
});

// youtube
let hide = document.getElementById("videoPopupCon");
let openn = document.getElementById("open");
let closee = document.getElementById("close");
openn.addEventListener("click", function () {
  hide.style.display = "block";
});

closee.addEventListener("click", function () {
  hide.style.display = "none";
});
