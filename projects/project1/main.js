const sidebar =document.querySelector(".sidebar");
const click=document.querySelector(".menu-click");
const img=document.querySelector(".click-img");
const main=document.querySelector(".main")
const cross=document.querySelector(".cross")



click.addEventListener("click",()=>{
    sidebar.style.display="block"
})
img.addEventListener("click",()=>{
    sidebar.style.display="none"
})
cross.addEventListener("click",()=>{
    main.style.display="none"
})