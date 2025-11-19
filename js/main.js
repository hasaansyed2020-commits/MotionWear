/* ===========================
   MOTION WEAR - MAIN SCRIPT
   Dribbble Design Implementation
   =========================== */

import { loadProducts } from './products.js';

// ===========================
// STATE MANAGEMENT
// ===========================

let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentCategory = 'all';

// ===========================
// INITIALIZATION
// ===========================

async function init() {
    // Load products
    products = await loadProducts();
    
    // Render products
    renderProducts(products);
    
    // Initialize features
    initNavbar();
    initSmoothScroll();
    initScrollReveal();
    initCategoryCards();
    initFavorites();
    initCart();
    initNewsletter();
    
    // Update cart badge
    updateCartBadge();
}

// ===========================
// NAVBAR
// ===========================

function initNavbar() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.navbar__link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn?.addEventListener('click', openCart);
    
    // Search button (future implementation)
    const searchBtn = document.getElementById('searchBtn');
    searchBtn?.addEventListener('click', () => {
        console.log('Search functionality coming soon!');
    });
}

// ===========================
// SMOOTH SCROLL
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hero buttons
    const shopNowBtn = document.getElementById('shopNowBtn');
    const viewCollectionBtn = document.getElementById('viewCollectionBtn');
    
    shopNowBtn?.addEventListener('click', () => {
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    viewCollectionBtn?.addEventListener('click', () => {
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    });
}

// ===========================
// SCROLL REVEAL
// ===========================

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal, .product-card, .category-card').forEach(el => {
        observer.observe(el);
    });
}

// ===========================
// CATEGORY CARDS
// ===========================

function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
            
            // Scroll to products
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => 
            p.category.toLowerCase() === category.toLowerCase()
        );
        renderProducts(filtered);
    }
}

// ===========================
// PRODUCTS
// ===========================

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    
    const isFavorite = favorites.includes(product.id);
    const discount = product.originalPrice ? 
        Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-card__image-wrapper">
            <img src="${product.images[0]}" 
                 alt="${product.name}" 
                 class="product-card__image"
                 loading="lazy">
            ${product.badge ? `<span class="product-card__badge product-card__badge--${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
            <button class="product-card__favorite ${isFavorite ? 'active' : ''}" 
                    data-id="${product.id}"
                    aria-label="Add to favorites">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="product-card__content">
            <h3 class="product-card__name">${product.name}</h3>
            <p class="product-card__category">${product.category}</p>
            <div class="product-card__rating">
                <span class="product-card__stars">★★★★★</span>
                <span class="product-card__rating-value">${product.rating}</span>
            </div>
            <div class="product-card__price-row">
                <span class="product-card__price">$${product.price}</span>
                ${product.originalPrice ? `
                    <span class="product-card__price-old">$${product.originalPrice}</span>
                    <span class="product-card__discount">${discount}% OFF</span>
                ` : ''}
            </div>
            ${product.colors && product.colors.length > 0 ? `
                <div class="product-card__colors">
                    ${product.colors.slice(0, 4).map(color => 
                        `<div class="product-card__color" style="background: ${color}"></div>`
                    ).join('')}
                </div>
            ` : ''}
            <button class="product-card__cta" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
    
    // Event listeners
    const favoriteBtn = card.querySelector('.product-card__favorite');
    favoriteBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(product.id, favoriteBtn);
    });
    
    const addToCartBtn = card.querySelector('.product-card__cta');
    addToCartBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });
    
    // Click card to view details
    card.addEventListener('click', () => {
        openProductModal(product);
    });
    
    return card;
}

// ===========================
// FAVORITES
// ===========================

function initFavorites() {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
}

function toggleFavorite(productId, button) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        button.classList.remove('active');
        button.innerHTML = '🤍';
    } else {
        favorites.push(productId);
        button.classList.add('active');
        button.innerHTML = '❤️';
        button.classList.add('animate-pulse');
        setTimeout(() => button.classList.remove('animate-pulse'), 600);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ===========================
// CART
// ===========================

function initCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(product) {
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast('Added to cart!');
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function openCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartContent = document.getElementById('cartContent');
    
    if (!cartDrawer || !cartContent) return;
    
    // Render cart items
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div style="padding: 40px; text-align: center;">
                <h3 style="margin-bottom: 16px;">Your cart is empty</h3>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Add some products to get started!</p>
                <button class="btn btn-primary" data-close-cart>Continue Shopping</button>
            </div>
        `;
    } else {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartContent.innerHTML = `
            <div style="padding: 24px;">
                <h2 style="margin-bottom: 24px;">Shopping Cart (${cart.length})</h2>
                <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
                    ${cart.map(item => `
                        <div style="display: flex; gap: 16px; padding: 16px; background: var(--bg-secondary); border-radius: 12px;">
                            <img src="${item.images[0]}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                            <div style="flex: 1;">
                                <h4 style="margin-bottom: 4px;">${item.name}</h4>
                                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;">$${item.price}</p>
                                <p style="font-size: 14px;">Qty: ${item.quantity}</p>
                            </div>
                            <button class="icon-btn" data-remove="${item.id}" style="align-self: flex-start;">🗑️</button>
                        </div>
                    `).join('')}
                </div>
                <div style="border-top: 1px solid var(--border-color); padding-top: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>Subtotal:</span>
                        <strong>$${subtotal.toFixed(2)}</strong>
                    </div>
                    <p style="font-size: 12px; color: var(--text-secondary);">Shipping calculated at checkout</p>
                </div>
                <button class="btn btn-primary" style="width: 100%;">Proceed to Checkout</button>
            </div>
        `;
        
        // Add remove button event listeners
        cartContent.querySelectorAll('[data-remove]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.remove);
                removeFromCart(id);
                openCart(); // Refresh cart display
            });
        });
    }
    
    cartDrawer.classList.add('is-open');
    
    // Close handlers
    cartDrawer.querySelectorAll('[data-close-cart]').forEach(btn => {
        btn.addEventListener('click', () => {
            cartDrawer.classList.remove('is-open');
        });
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

// ===========================
// PRODUCT MODAL
// ===========================

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    const isFavorite = favorites.includes(product.id);
    const discount = product.originalPrice ? 
        Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    modalContent.innerHTML = `
        <button class="modal__close" data-close-modal aria-label="Close">&times;</button>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 40px;">
            <div>
                <img src="${product.images[0]}" alt="${product.name}" style="width: 100%; border-radius: 16px; margin-bottom: 16px;">
                ${product.images.length > 1 ? `
                    <div style="display: flex; gap: 12px;">
                        ${product.images.slice(1, 4).map(img => 
                            `<img src="${img}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer;">`
                        ).join('')}
                    </div>
                ` : ''}
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
                    <div>
                        <h2 style="font-size: 32px; margin-bottom: 8px;">${product.name}</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 8px;">${product.category}</p>
                    </div>
                    <button class="icon-btn icon-btn-favorite ${isFavorite ? 'active' : ''}" data-modal-favorite="${product.id}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #FCD34D; font-size: 18px;">★★★★★</span>
                        <span style="font-weight: 600;">${product.rating}</span>
                        <span style="color: var(--text-secondary);">(${product.reviews} reviews)</span>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                    <span style="font-size: 32px; font-weight: 700;">$${product.price}</span>
                    ${product.originalPrice ? `
                        <span style="font-size: 20px; color: var(--text-light); text-decoration: line-through;">$${product.originalPrice}</span>
                        <span class="badge badge-success">${discount}% OFF</span>
                    ` : ''}
                </div>
                
                <p style="color: var(--text-secondary); line-height: 1.75; margin-bottom: 24px;">
                    ${product.description || 'Premium quality footwear designed for comfort and style. Perfect for everyday wear.'}
                </p>
                
                ${product.colors && product.colors.length > 0 ? `
                    <div style="margin-bottom: 24px;">
                        <h4 style="margin-bottom: 12px;">Colors</h4>
                        <div style="display: flex; gap: 12px;">
                            ${product.colors.map(color => 
                                `<div style="width: 32px; height: 32px; border-radius: 50%; background: ${color}; border: 2px solid var(--border-color); cursor: pointer;"></div>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${product.sizes && product.sizes.length > 0 ? `
                    <div style="margin-bottom: 32px;">
                        <h4 style="margin-bottom: 12px;">Sizes</h4>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            ${product.sizes.map(size => 
                                `<button class="btn btn-secondary btn-small" style="min-width: 60px;">${size}</button>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <button class="btn btn-primary" style="width: 100%; margin-bottom: 16px;" data-modal-add-cart="${product.id}">
                    Add to Cart
                </button>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 20px; background: var(--bg-secondary); border-radius: 12px; font-size: 14px;">
                    <div style="text-align: center;">
                        <div style="margin-bottom: 4px;">✅</div>
                        <div>Free Shipping</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="margin-bottom: 4px;">🔄</div>
                        <div>30-Day Returns</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="margin-bottom: 4px;">🔒</div>
                        <div>Secure Payment</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    
    // Event listeners
    modal.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', closeProductModal);
    });
    
    modal.querySelector('[data-modal-add-cart]')?.addEventListener('click', () => {
        addToCart(product);
        closeProductModal();
    });
    
    modal.querySelector('[data-modal-favorite]')?.addEventListener('click', function() {
        toggleFavorite(product.id, this);
    });
    
    modal.querySelector('.modal__backdrop')?.addEventListener('click', closeProductModal);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal?.classList.remove('is-open');
    document.body.style.overflow = 'auto';
}

// ===========================
// NEWSLETTER
// ===========================

function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            showToast('Thank you for subscribing! 🎉');
            form.reset();
        }
    });
}

// ===========================
// TOAST NOTIFICATIONS
// ===========================

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===========================
// START APPLICATION
// ===========================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for external use
window.MotionWear = {
    addToCart,
    toggleFavorite,
    openProductModal,
    filterByCategory
};
