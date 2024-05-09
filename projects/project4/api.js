const api="https://api.reflowhq.com/v2/stores/1475971273/products/"
const products=document.querySelector(".products")


async function getusers(){
    const call = await fetch(api);
    const data = await call.json();

    console.log(data.data);
    for(let i=0; i<data.data.length;i++){
products.innerHTML+=`
<div class="products-img">
<img src="${data.data[i].image.md}" alt="">
<div class="products-text">
<h4>${data.data[i].name}</h4>
<p>${data.data[i].price} </p>  
</div>

<a href="./product.html?id=${data.data[i].id}">
<button class="product_btn">EXPLORE MUG</button>
</a>
 
</div>


`
    }
}

getusers();