console.log("JS loded !!");

AOS.init();

const products = [
    {
        id: 1,
        name: "Brinjals - 1KG",
        price: 440.00,
        image: "assets/imges/i1.jpg",
    },
    {
        id: 2,
        name: "Snake Gourd - 1KG",
        price: 232.00,
        image: "assets/imges/i2.jpg",
    },
    {
        id: 3,
        name: "Pineapple - Unit 1",
        price: 338.00,
        image: "assets/imges/i3.jpg",
    },
    {
        id: 4,
        name: "Green Chillies - 1KG",
        price: 176.00,
        image: "assets/imges/i4.jpg",
    },
    {
        id: 5,
        name: "Coconut - Unit 1",
        price: 189.00,
        image: "assets/imges/i5.jpg",
    },
    {
        id: 6,
        name: "Papaya - Unit 1",
        price: 160.00,
        image: "assets/imges/i6.jpg",
    },
    {
        id: 7,
        name: "Maliban Lemon Puff - 200g",
        price: 187.00,
        image: "assets/imges/i7.jpg",
    },
    {
        id: 8,
        name: "Ambewela Full Cream Fresh Milk Tetra - 1L",
        price: 160.00,
        image: "assets/imges/i8.jpg",
    },
    {
        id: 9,
        name: "Keells Marie Biscuit - 80g",
        price: 81.00,
        image: "assets/imges/i9.jpg",
    },
    {
        id: 10,
        name: "Keells Cheese Snacks - 50g",
        price: 179.00,
        image: "assets/imges/i10.jpg",
    },
    {
        id: 11,
        name: "Keells Peanut Spread Crunchy - 200g",
        price: 770.00,
        image: "assets/imges/i11.jpg",
    },
    {
        id: 12,
        name: "Keells Chocolote Spread Crunchy - 200g",
        price: 1000.00,
        image: "assets/imges/i12.jpg",
    },
    {
        id: 13,
        name: "Star Gold Brown Sugar - 1KG",
        price: 304.00,
        image: "assets/imges/i13.jpg",
    },
    {
        id: 14,
        name: "Anchor Non-Fat Milk Powder Packet - 400g",
        price: 1152.00,
        image: "assets/imges/i14.jpg",
    },
    {
        id: 15,
        name: "Flora Facial Tissue Box 2Ply 160S - Unit 1",
        price: 427.00,
        image: "assets/imges/i15.jpg",
    },
    {
        id: 16,
        name: "Keells Kurakkan Bread - 400g",
        price: 350.00,
        image: "assets/imges/i16.jpg",
    },
    {
        id: 17,
        name: "Keells Hot Dog Bun 2S - Unit 1",
        price: 210.00,
        image: "assets/imges/i17.jpg",
    },
    {
        id: 18,
        name: "Keells Dishwash Bar - 100g",
        price: 63.00,
        image: "assets/imges/i18.jpg",
    },
    {
        id: 19,
        name: "Keells Dill Seeds - 100g",
        price: 92.00,
        image: "assets/imges/i19.jpg",
    },
    {
        id: 20,
        name: "Keells Mustard Seeds - 100g",
        price: 95.00,
        image: "assets/imges/i20.jpg",
    },
    {
        id: 21,
        name: "Big Onions",
        price: 180.00,
        image: "assets/imges/i21.jpg",
    },
    {
        id: 22,
        name: "Red Rice Kekulu Bulk KG - Local",
        price: 189.00,
        image: "assets/imges/i22.jpg",
    },
    {
        id: 23,
        name: "Rice Supiri Keeri Samba Bulk KG",
        price: 260.00,
        image: "assets/imges/i23.jpg",
    },
    {
        id: 24,
        name: "Potatoes",
        price: 340.00,
        image: "assets/imges/i24.jpg",
    },
    {
        id: 25,
        name: "Nel Farm Brown Eggs Large 10S",
        price: 520.00,
        image: "assets/imges/i25.jpg",
    },
    {
        id: 26,
        name: "White Kekulu Samba Bulk KG - Local",
        price: 240.00,
        image: "assets/imges/i26.jpg",
    },
    {
        id: 27,
        name: "White Sugar Bulk KG",
        price: 218.00,
        image: "assets/imges/i27.jpg",
    },
    {
        id: 28,
        name: "Keells Soya Meat Cuttlefish - 90g",
        price: 120.00,
        image: "assets/imges/i28.jpg",
    },
    {
        id: 29,
        name: "Keells Marshmallow Assorted - 70g",
        price: 118.00,
        image: "assets/imges/i29.jpg",
    },
    {
        id: 30,
        name: "Keells Papadam - 60g",
        price: 105.00,
        image: "assets/imges/i30.jpg",
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
    updateCartCount();
});

// Load products on home page
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onclick="showFullImage('${product.image}')">
                    </div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">Rs. ${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                `;
        productsGrid.appendChild(productCard);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartCount();
    showAddedToCartFeedback();
}

// Update cart
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Show feedback when item is added
function showAddedToCartFeedback() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.1)';
    cartIcon.style.background = '#18a318';

    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.background = '#18a318';
    }, 200);
}

// Show cart page
function showCart() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('orderPage').classList.add('active');
    loadCartItems();
}

// Show home page
function showHome() {
    document.getElementById('orderPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
}

// Load cart items on order page
function loadCartItems() {
    const cartContainer = document.getElementById('cartContainer');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <h3>Your cart is empty</h3>
                        <p>Add some adorable teddy bears to your cart!</p>
                        <a href="#" class="back-to-shop" onclick="showHome()">Continue Shopping</a>
                    </div>
                `;
        return;
    }

    let cartHTML = '<div class="cart-items">';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" style="width:100%; height:100%; border-radius:10px;">
                </div>
                <div>
                    <div>${item.name}</div>
                    <div>LKR ${item.price.toFixed(2)} each</div>
                </div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <div>
                <div style="font-weight:bold; margin-bottom:10px;">LKR ${itemTotal.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `;
    });

    cartHTML += `
                <div class="cart-total">
                    <div class="total-price">Total: LKR ${total.toFixed(2)}</div>
                    <button class="place-order-btn" onclick="placeOrder()">Place Order</button>
                </div>
            </div>`;

    cartContainer.innerHTML = cartHTML;
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            loadCartItems();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    loadCartItems();
}

// Place order (simulated)
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderNumber = Math.floor(Math.random() * 10000) + 1000;

    document.getElementById('cartContainer').innerHTML = `
                <div class="success-message">
                    <h2>🎉 Order Placed Successfully!</h2>
                    <p style="margin: 1rem 0;">Thank you for your purchase!</p>
                    <p><strong>Order Number:</strong> #${orderNumber}</p>
                    <p><strong>Total Amount:</strong> LKR ${total.toFixed(2)}</p>
                    <p style="margin-top: 1rem;">Your Order will be shipped within 1-3 business days.</p>
                    <div style="margin-top: 2rem;">
                        <button class="nav-btn" onclick="continueShopping()">Continue Shopping</button>
                    </div>
                </div>
            `;

    // Clear cart after order
    cart = [];
    updateCartCount();
}

// Continue shopping after placing order
function continueShopping() {
    showHome();
}

// Show Full Image
function showFullImage(imageUrl) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imageUrl;
}

// Close Full Image
function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

