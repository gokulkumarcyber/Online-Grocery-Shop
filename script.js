document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let cart = [];
    let total = 0;

    // Add products to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            // Add product to cart array
            cart.push({ name: productName, price: productPrice });

            // Update cart UI
            updateCart();
        });
    });

    // Update cart display
    function updateCart() {
        // Clear cart items
        cartItems.innerHTML = '';

        // Add items to cart
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });

        // Calculate total
        total = cart.reduce((sum, item) => sum + item.price, 0);
        totalElement.textContent = total.toFixed(2);

        // If the cart is empty
        if (cart.length === 0) {
            cartItems.innerHTML = '<li>Your cart is empty.</li>';
        }
    }

    // Checkout button
    document.getElementById('checkout').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let cart = [];
    let total = 0;

    // Add products to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            // Add product to cart array
            cart.push({ name: productName, price: productPrice });

            // Update cart UI
            updateCart();
        });
    });

    // Update cart display
    function updateCart() {
        // Clear cart items
        cartItems.innerHTML = '';

        // Add items to cart
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} -$${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });

        // Calculate total
        total = cart.reduce((sum, item) => sum + item.price, 0);
        totalElement.textContent = total.toFixed(2);

        // If the cart is empty
        if (cart.length === 0) {
            cartItems.innerHTML = '<li>Your cart is empty.</li>';
        }
    }

    // Checkout button
    document.getElementById('checkout').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
        }
    });
});
