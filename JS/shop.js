let dataaa = [];
(async function () {
  let API = await fetch("./API.json");
  let data = await API.json();
  dataaa = data.gallery;
  shop(dataaa);
})();

function shop(product) {
  let sum = "";
  for (let i = 0; i < product.length; i++) {
    sum += `
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
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
  document.getElementById("shopProducts").innerHTML = sum;
}

function product(product) {
  localStorage.setItem("items", JSON.stringify(dataaa[product]));
}
