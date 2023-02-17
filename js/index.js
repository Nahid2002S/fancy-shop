
let serial = 1;
let total = 0;

function getData(pName, pPrice, pQuantity, result){
    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${result}</td>
    `;
    tableContainer.appendChild(tr);
}

document.getElementById('first-btn').addEventListener('click', function(){
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('second-btn').addEventListener('click', function(){
    const productName = document.getElementById('second-name').innerText;
    const productPrice = document.getElementById('second-price').innerText;
    const productQuantity = document.getElementById('second-quantity').innerText;

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('third-btn').addEventListener('click', function(){
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('fourth-btn').addEventListener('click', function(){
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('fifth-btn').addEventListener('click', function(){
    const productName = document.getElementById('fifth-name').innerText;
    const productPrice = document.getElementById('fifth-price').innerText;
    const productQuantity = document.getElementById('fifth-quantity').innerText;

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('sixth-btn').addEventListener('click', function(){
    const productName = document.getElementById('fifth-name').innerText;
    const productPrice = document.getElementById('sixth-price').value;
    const productQuantity = document.getElementById('sixth-quantity').value;

    if(productPrice <= 0 || productQuantity <= 0 || typeof productPrice !== 'number' || typeof productQuantity !== 'number'){
        return alert('Please Enter A Valid Amount')
    }

    const totalProductPrice = parseInt(productPrice) * parseInt(productQuantity);
    getData(productName, productPrice, productQuantity, totalProductPrice);
    serial += 1;
    total += totalProductPrice;
});

document.getElementById('total-btn').addEventListener('click', function(){
    const tableContainer = document.getElementById('table-container');
    const tr =document.createElement('tr');
    tr.innerHTML = `
    <td>${'Total:'}</td>
    <td>${''}</td>
    <td>${''}</td>
    <td>${''}</td>
    <td>${total}</td>
    `;
    if(total === 0){
        return alert('Please Buy Something')
    }
    tableContainer.appendChild(tr);
})