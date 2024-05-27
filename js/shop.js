const products = [
    {
        id: 'product1',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product2',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    },
    {
        id: 'product3',
        name: 'Headphones',
        price: 'Ksh. 5,000',
        condition: 'New',
        model: 'Sony',
        image: 'images/product_1.jpg'
    }

    // Add more products as needed
];

function loadProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => viewProduct(product.id);
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
            </div>
        `;
        container.appendChild(productDiv);
    });
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);

    // Update modal content
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-condition').innerText = `Condition: ${product.condition}`;
    document.getElementById('product-model').innerText = `Model: ${product.model}`;

    // Display modal
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}


// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);
