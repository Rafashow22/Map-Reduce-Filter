const list = document.querySelector('ul');
const buttonAll = document.querySelector('#buttonShow');
const buttonMapeado = document.querySelector('#buttonMap');
const ButtonSomado = document.querySelector('#buttonReduce');
const buttonFull = document.querySelector('#buttonFilter');



function showALL() {
    let myLy = '';
    menuOptions.forEach((product) => {
        myLy += `
    <li>
    <img src="${product.src}" />
    <p>${product.name}</p>
    <p class="item-price">R$ ${product.price}</p>
    </li>
    `
    })
    list.innerHTML = myLy
}

function showMap() {
    console.log("Aquiiiiiiii!")
}

function showReduce() {
    console.log("Aquiiiiiiii!")
}
function showFilter() {
    console.log("Aquiiiiiiii!")
}



buttonAll.addEventListener('click', showALL);
buttonMapeado.addEventListener('click',showMap);
ButtonSomado.addEventListener('click',showReduce);
buttonFull.addEventListener('click',showFilter);



