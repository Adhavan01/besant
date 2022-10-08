
const cont_val =document.getElementById("cont_val")
const dec =document.getElementById("dec")
const inc =document.getElementById("inc")
const cartnum =document.getElementById("cartnum")
const additam =document.getElementById("additam")
const cartwindo =document.getElementById("cartwindo")
const cartlogo =document.getElementById("cartlogo")
const innercrtnum =document.getElementById("innercrtnum")
const remove_cart =document.getElementById("remove_cart")
const innerCart =document.getElementById("innerCart")
let a = 0
inc.addEventListener('click',()=>{
    a++;
    a=(a<10) ? "0"+a : a;
    cont_val.innerText =a;
    })

    dec.addEventListener('click',()=>{
        if(a>1){
            a--;
            a=(a<10) ? "0"+a : a;
        }
      cont_val.innerText =a;

        })

additam.addEventListener('click',()=>{
    cartnum.innerText= cont_val.innerText
    cartnum.innerText= cont_val.innerText
    innercrtnum.innerText= cont_val.innerText
    innercrtnum.innerText= cont_val.innerText

})
cartlogo.addEventListener('click',()=>{
    if(cartwindo.style.display==="none"){
        cartwindo.style.display="block" 
    }else{
        cartwindo.style.display="none"
    }
})

//remove
remove_cart.addEventListener('click',()=>{
    innerCart.style.display="none"
})