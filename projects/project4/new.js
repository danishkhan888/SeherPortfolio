const sidebar = document.querySelector(".sidebar")
const cross = document.querySelector(".click-img");


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id')
const hero = document.querySelector(".product_text")
const Pimg = document.querySelector(".product-img")
const description = document.querySelector(".description")
const addCartBtn = document.querySelector(".addCartBtn");


addCartBtn.setAttribute("data-reflow-product",productId)

console.log(productId)

async function getProductDetails() {
    const call = await fetch(`https://api.reflowhq.com/v2/stores/1475971273/products/${productId}`)
    const data = await call.json()

    console.log(data)
    Pimg.src = data.image.md
    hero.innerHTML = `<h1>${data.name}</h1>
<p>${data.excerpt}</p>
<p><span class="edits">${data.price}</span></p>

`
    description.innerHTML = data.description;
}


getProductDetails()