'use strict';


let price = 0, totalCost = 0;


const addButton = document.querySelector('#add-to-cart-button');
const addDelivery = document.querySelector('#Delivery');
const selectedProduct = document.querySelector('#select-id');



function addToCart() {

    const productNumber = document.querySelector('#product-number');
    let checkbox = document.querySelector('#Delivery');


    if (selectedProduct.value === 'Backpack for kids') price = 15.50;
    if (selectedProduct.value === 'School backpack') price = 18.00;
    if (selectedProduct.value === 'Backpack for girls') price = 24.80;
    if (selectedProduct.value === 'Hiking backpack') price = 30.00;
    if (selectedProduct.value === 'Delivery') price = 10.00;

    totalCost = totalCost + +productNumber.value * price;

    const cartTable = document.querySelector('#cart-table');


    const cartProduct = document.createElement('li');

    cartProduct.classList.add('cart-product');


    const cartProductName = document.createElement('span');

    cartProductName.classList.add('cart-product-name');

    cartProductName.textContent = selectedProduct.value;

    cartProduct.appendChild(cartProductName);


    const cartProductNumber = document.createElement('span');

    cartProductNumber.classList.add('cart-product-number');

    cartProductNumber.textContent = productNumber.value;

    cartProduct.appendChild(cartProductNumber);


    const cartProductCost = document.createElement('span');

    cartProductCost.classList.add('cart-product-cost');

    cartProductCost.textContent = '$' + (+productNumber.value * price).toFixed(2);

    cartProduct.appendChild(cartProductCost);


    cartTable.appendChild(cartProduct);


    const totalCostBlock = document.querySelector('#total-cost');

    totalCostBlock.textContent = `Total Cost: ${totalCost.toFixed(2)}`;

    console.log('totalCostBlock', totalCostBlock.innerHTML);

    document.querySelector('#cart-block').style.display = 'block';

    selectedProduct.value = '';

    productNumber.value = '';

    if (checkbox.checked === true) {
        console.log('checked checkbox');
    } else {
        console.log('unchecked checkbox');
    }

}

addButton.addEventListener('click', addToCart);

   addDelivery.addEventListener('change', (event) => {

    console.dir()

    if (event.target.checked) {
        totalCost += 10;
    } else {
        totalCost -= 10;
    }

    console.log(totalCost)

    const totalCostBlock = document.querySelector('#total-cost');
    totalCostBlock.textContent = `total Cost: ${totalCost.toFixed(2)}`;
    console.log('totalCostBlock', totalCostBlock.value)

   
   
   
   
   
   
    // let num = '123'

    // if (addDelivery.checked == true) {
    //     // totalCostBlock.innerHTML + 10;
    //     // let totCost = totalCostBlock.innerHTML;
    //     console.log((totCost));
    //     console.log((totCost) + 1);
    //     addToCart()
    // } else {
    //     console.log('Unchecked')
    //     addToCart()
    // }




 })