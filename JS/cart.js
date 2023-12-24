let span = document.querySelectorAll(".spanClass");
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", function () {
    span[i].classList.add("active");
  });
}

let productArr;
if (localStorage.getItem("item") === null) {
  productArr = [];
} else {
  productArr = JSON.parse(localStorage.getItem("item"));
  DisplayOne();
}
if (localStorage.getItem("items") === null) {
  productArr = [];
} else {
  productArr = JSON.parse(localStorage.getItem("items"));
  DisplayOne();
}

function DisplayOne() {
  let sum = "";
  sum += `
            <div class="col-xl-1 col-lg-1 imgg">
                <div class="imgLeft">
                  <img src="${productArr.img}" alt="" />
                  <img src="${productArr.img}" alt="" />
                </div>
              </div>
              <div class="col-xl-5 col-lg-5">
              <figure
                    class="zoom"
                    onmousemove="zoom(event)"
                    style="
                      background-image: url(${productArr.img});
                    "
                  >
                    <img src="${productArr.img}" />
                  </figure>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="content">
                  <h1>${productArr.title}</h1>
                  <h2>${productArr.price}</h2>
                  <div class="info">
                    <i class="fa-solid fa-star" style="color: #fec42d"></i>
                    <i class="fa-solid fa-star" style="color: #fec42d"></i>
                    <i class="fa-solid fa-star" style="color: #fec42d"></i>
                    <i class="fa-solid fa-star" style="color: #fec42d"></i>
                    <i class="fa-solid fa-star" style="color: #fec42d"></i>
                  </div>
                  <p>
                    Nunc vehicula quam semper odio varius tincidunt. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posue.
                  </p>
                  <div class="firstPrice">
                    <h5 class="name">Image Ratio</h5>
                    <span class="spanClass active">9:16 </span>
                    <span class="spanClass">14:8 </span>
                  </div>
                  <h5 class="name">Orientation</h5>
                  <span class="spanClass active">Square </span>
                </div>
                <div class="add">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12">
                      <div class="row">
                        <div class="col-xl-3 col-lg-3">
                          <div class="inp">
                            <button class="cc btn">
                              <span class="">-</span>
                            </button>
                            <input class="cc" type="number" value="1" />
                            <button class="cc btn">
                              <span class="">+</span>
                            </button>
                          </div>
                        </div>
                        <div class="col-xl-7 col-lg-7">
                          <div class="addToCard">
                            <button class="btn btn-info">ADD TO CARD</button>
                          </div>
                        </div>
                        <div class="col-xl-2 col-lg-2">
                          <div class="addToCard">
                            <button class="btn btn-info">
                              <i class="fa-regular fa-heart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12">
                      <div class="buyItNow">
                        <button class="btn">BUY IT NOW</button>
                      </div>
                      <ul>
                        <li>
                          <img
                            src="./Imgs/About/icon/ul/shop-detail-image-3.png"
                            alt=""
                          />2k high-resolution
                        </li>
                        <li>
                          <img
                            src="./Imgs/About/icon/ul/shop-detail-image-1.png"
                            alt=""
                          />7 day trial
                        </li>
                        <li>
                          <img
                            src="./Imgs/About/icon/ul/shop-detail-image-2.png"
                            alt=""
                          />Generate 200 images for free
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
        `;

  document.getElementById("productDisplay").innerHTML = sum;
}

function zoom(e) {
  let zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

let desBu = document.getElementById("desBu");
let desBu2 = document.getElementById("desBu2");
let dis = document.getElementById("dis");
let disp = document.getElementById("disp");
desBu.addEventListener("click", function () {
  disp.style.display = "none";
  dis.style.display = "block";
});

desBu2.addEventListener("click", function () {
  dis.style.display = "none";
  disp.style.display = "block";
});

let showH = document.getElementById("showH");
let commentBu = document.getElementById("commentBu");
showH.addEventListener("click", function () {
  commentBu.classList.toggle("displayy");
});

(async function () {
  let API = await fetch("./API.json");
  let data = await API.json();
  let finalDataHome = data.popularProducts;
  displayRecommended(finalDataHome);
})();

function displayRecommended(product) {
  let sum = "";
  for (let i = 0; i < product.length; i++) {
    sum += `
  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div class="card wow fadeInUp" data-wow-duration="1.5s">
        <div class="card-img">
        <img class="card-img-top" src="${product[i].img}" alt="Card image cap" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${product[i].title}</h5>
          <p class="card-text">${product[i].price}</p>
        </div>
      </div>
    </div>
  `;
  }
  document.getElementById("roww").innerHTML = sum;
}
