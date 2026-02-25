const list = document.querySelector('ul');
const buttonAll = document.querySelector('#buttonShow');
const buttonMapeado = document.querySelector('#buttonMap');
const ButtonSomado = document.querySelector('#buttonReduce');
const buttonFull = document.querySelector('#buttonFilter');


function moeda(valor){
const valorMoeda = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    return valorMoeda

}


function showALL(mostratudo) {
    let myLy = '';
    mostratudo.forEach((product) => {
        myLy += `
    <li>
    <img src="${product.src}" />
    <p>${product.name}</p>
function moeda(valor){
    <p class="item-price">R$ ${moeda(product.price)}</p>
    </li>
    `
    })
    list.innerHTML = myLy
}

function showMap() {
const desconto = menuOptions.map((desc) => {
return{...desc, price: desc.price * 0.9} 
})   
showALL(desconto)      

}




function showReduce() {
    const total = menuOptions.reduce((acc, item) => acc + item.price, 0);
    
    list.innerHTML = `
    <li>
    <p>O total dos Itens deu R$ ${moeda(total)}</p>
    </li>
    `
    showALL(total)
}


    function showFilter() {
    const veganos = menuOptions.filter((item) => item.vegan);
    console.log(veganos);
    showALL(veganos)
}



buttonAll.addEventListener('click', () => showALL(menuOptions));
buttonMapeado.addEventListener('click',showMap);
ButtonSomado.addEventListener('click',showReduce);
buttonFull.addEventListener('click',showFilter);



