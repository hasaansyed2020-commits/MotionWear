// Data model
const products = [
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Men's Running",
    type: "running",
    price: 180,
    oldPrice: 210,
    badge: "New",
    rating: 5.0,
    reviews: 324,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
    ],
    colors: ["#111111", "#ffffff", "#ff2d55"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    tags: ["running", "air", "max"],
  },
  {
    id: "adidas-ultraboost-22",
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "Men's Running",
    type: "running",
    price: 200,
    oldPrice: 230,
    badge: "Sale -20%",
    rating: 5.0,
    reviews: 198,
    images: [
      "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    colors: ["#4b5563", "#1f2937", "#0047ab"],
    sizes: [39, 40, 41, 42, 43],
    tags: ["running", "boost"],
  },
  {
    id: "nb-574",
    name: "New Balance 574",
    brand: "New Balance",
    category: "Men's Casual",
    type: "casual",
    price: 150,
    rating: 5.0,
    reviews: 154,
    images: [
      "https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/762519/pexels-photo-762519.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    colors: ["#10b981", "#4b5563", "#92400e"],
    sizes: [38, 39, 40, 41, 42, 43],
    tags: ["casual", "retro"],
  },
  {
    id: "puma-rs-x",
    name: "Puma RS-X",
    brand: "Puma",
    category: "Men's Sports",
    type: "sports",
    price: 160,
    rating: 5.0,
    reviews: 210,
    images: [
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/131558/pexels-photo-131558.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#ffffff", "#1d4ed8", "#22d3ee"],
    sizes: [38, 39, 40, 41, 42, 43],
    tags: ["sports", "chunky"],
  },
  {
    id: "reebok-club-c",
    name: "Reebok Club C",
    brand: "Reebok",
    category: "Men's Casual",
    type: "casual",
    price: 140,
    rating: 5.0,
    reviews: 96,
    images: [
      "https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#ffffff", "#111827"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    tags: ["tennis", "classic"],
  },
  {
    id: "nike-nightflyer-300",
    name: "NightFlyer 300",
    brand: "Nike",
    category: "Men's Lifestyle",
    type: "casual",
    price: 280,
    badge: "Limited",
    rating: 5.0,
    reviews: 412,
    images: [
      "https://images.pexels.com/photos/1407358/pexels-photo-1407358.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#020617", "#3b82f6", "#fbbf24"],
    sizes: [40, 41, 42, 43, 44],
    tags: ["lifestyle", "limited"],
  },
  {
    id: "motion-zen-trainer",
    name: "Zen Trainer Pro",
    brand: "Motion",
    category: "Men's Sports",
    type: "sports",
    price: 190,
    rating: 5.0,
    reviews: 88,
    images: [
      "https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#111827", "#16a34a", "#e5e7eb"],
    sizes: [39, 40, 41, 42, 43],
    tags: ["training", "gym"],
  },
  {
    id: "converse-chuck-70",
    name: "Converse Chuck 70",
    brand: "Converse",
    category: "Men's Casual",
    type: "casual",
    price: 130,
    rating: 5.0,
    reviews: 160,
    images: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#111827", "#ffffff"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    tags: ["canvas", "street"],
  },
  {
    id: "vans-old-skool",
    name: "Vans Old Skool",
    brand: "Vans",
    category: "Men's Casual",
    type: "casual",
    price: 145,
    rating: 5.0,
    reviews: 132,
    images: [
      "https://images.pexels.com/photos/2528476/pexels-photo-2528476.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#111827", "#f97316"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    tags: ["skate", "street"],
  },
  {
    id: "ua-hovr",
    name: "UA HOVR Phantom",
    brand: "Under Armour",
    category: "Men's Running",
    type: "running",
    price: 210,
    rating: 5.0,
    reviews: 95,
    images: [
      "https://images.pexels.com/photos/1315146/pexels-photo-1315146.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    colors: ["#111827", "#0ea5e9"],
    sizes: [39, 40, 41, 42, 43],
    tags: ["running", "performance"],
  },
];

let favorites = new Set();
let currentFilter = "all"; // category
let currentSort = "featured";
let currentBrand = "all";
let searchQuery = "";
let showingFavoritesOnly = false;

// Cart state
let cart = [];

// DOM helpers
const productGrid = document.getElementById("productGrid");
const latestScroll = document.getElementById("latestScroll");
const latestPrev = document.getElementById("latestPrev");
const latestNext = document.getElementById("latestNext");
const sortSelect = document.getElementById("sortSelect");
const brandSelect = document.getElementById("brandFilter");
const searchInput = document.getElementById("productSearch");
const searchDropdown = document.getElementById("searchDropdown");
const filterChips = document.querySelectorAll(".chip");
const bottomNav = document.querySelector(".bottom-nav");
const topNav = document.getElementById("topNav");

// Cart DOM
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartCountEl = document.getElementById("cartCount");
const cartCheckout = document.getElementById("cartCheckout");

// Modal elements
const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");
const modalColors = document.getElementById("modalColors");
const modalSizes = document.getElementById("modalSizes");
const modalFavorite = document.getElementById("modalFavorite");
const carouselDots = document.getElementById("carouselDots");
const modalQty = document.getElementById("modalQty");
const modalAddToCart = document.getElementById("modalAddToCart");
const sizeGuideModal = document.getElementById("sizeGuideModal");
const sizeGuideTriggers = document.querySelectorAll(".link-button--small");
const sizeGuideClosers = document.querySelectorAll("[data-size-guide-close]");

// Reviews DOM
const reviewsScoreEl = document.getElementById("reviewsScore");
const reviewsMetaEl = document.getElementById("reviewsMeta");
const reviewsListEl = document.getElementById("reviewsList");
const reviewsFiltersEl = document.getElementById("reviewsFilters");
const writeReviewBtn = document.getElementById("writeReviewBtn");

// Lightbox DOM
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxClosers = document.querySelectorAll("[data-lightbox-close]");

let activeProduct = null;
let activeImageIndex = 0;
let selectedColor = null;
let selectedSize = null;
let selectedQty = 1;
let activeReviewFilter = "all";
let lightboxIndex = 0;

// Initialization
function init() {
  restoreFavorites();
  restoreCart();
  renderProducts();
  renderLatest();
  bindFilters();
  bindSort();
  bindBrandFilter();
  bindSearch();
  bindScrollButtons();
  bindBottomNav();
  bindLatestCarousel();
  bindCart();
  bindSizeGuide();
  bindLightbox();
  initRevealOnScroll();
  initStickyNav();
  initModal();
  initThree();
}

// Favorites persistence
function restoreFavorites() {
  try {
    const raw = window.localStorage.getItem("motionwear:favorites");
    if (raw) {
      favorites = new Set(JSON.parse(raw));
    }
  } catch (e) {
    favorites = new Set();
  }
}

function persistFavorites() {
  try {
    window.localStorage.setItem("motionwear:favorites", JSON.stringify([...favorites]));
  } catch (e) {
    // ignore
  }
}

// Rendering
function getFilteredSortedProducts() {
  let list = products.slice();

  if (currentFilter !== "all") {
    list = list.filter((p) => p.type === currentFilter);
  }

  if (currentBrand !== "all") {
    list = list.filter((p) => p.brand === currentBrand);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }

  if (showingFavoritesOnly) {
    list = list.filter((p) => favorites.has(p.id));
  }

  if (currentSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === "newest") {
    list = list.slice().reverse();
  }

  return list;
}

function renderProducts() {
  const list = getFilteredSortedProducts();
  productGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = showingFavoritesOnly
      ? "No favorites yet. Tap the heart icon on a product to add it to your favorites."
      : "No products found for this filter.";
    empty.style.color = "var(--muted)";
    empty.style.fontSize = "0.9rem";
    productGrid.appendChild(empty);
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.productId = product.id;

    card.innerHTML = `
      ${product.badge ? `<span class="badge ${product.badge.includes("Sale") ? "badge--sale" : ""}">${
        product.badge
      }</span>` : ""}
      <div class="product-card-header">
        <span class="brand-pill">${product.brand}</span>
        <button class="icon-button icon-button--heart ${favorites.has(product.id) ? "is-active" : ""}" data-heart>
          <span class="icon-heart"></span>
        </button>
      </div>
      <div class="product-image-wrapper">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-meta">
        <div>
          <div class="product-name">${product.name}</div>
          <div class="product-category">${product.category}</div>
        </div>
        <div class="color-dots">
          ${product.colors
            .slice(0, 3)
            .map((c) => `<span class="color-dot" style="background:${c}"></span>`)
            .join("")}
        </div>
      </div>
      <div class="product-bottom-row">
        <div>
          ${product.oldPrice ? `<span class="product-price-old">$${product.oldPrice}</span>` : ""}
          <span class="product-price">$${product.price}</span>
        </div>
        <div class="rating">
          <span class="rating-stars">★★★★★</span>
          <span class="rating-score">${product.rating.toFixed(1)}</span>
        </div>
      </div>
      <button class="btn btn-primary btn-full" data-quick-add>Add to Cart</button>
    `;

    card.addEventListener("click", (evt) => {
      const heartClicked = evt.target.closest("[data-heart]");
      if (heartClicked) {
        evt.stopPropagation();
        toggleFavorite(product.id, heartClicked);
        return;
      }

      const quickAdd = evt.target.closest("[data-quick-add]");
      if (quickAdd) {
        evt.stopPropagation();
        addToCart(product, 1);
        return;
      }
      openModal(product.id);
    });

    productGrid.appendChild(card);
  });
}

function renderLatest() {
  latestScroll.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "latest-card";
    card.dataset.productId = product.id;
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
      <div class="latest-name">${product.name}</div>
      <div class="latest-price">$${product.price}</div>
    `;
    card.addEventListener("click", () => openModal(product.id));
    latestScroll.appendChild(card);
  });
}

// Favorites
function toggleFavorite(id, heartButtonEl) {
  if (favorites.has(id)) {
    favorites.delete(id);
    if (heartButtonEl) heartButtonEl.classList.remove("is-active");
  } else {
    favorites.add(id);
    if (heartButtonEl) heartButtonEl.classList.add("is-active");
  }
  persistFavorites();

  const modalId = activeProduct?.id;
  if (modalId === id) {
    modalFavorite.classList.toggle("is-active", favorites.has(id));
  }

  if (showingFavoritesOnly) {
    renderProducts();
  }
}

// Filters & sorting
function bindFilters() {
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("chip--active"));
      chip.classList.add("chip--active");
      currentFilter = chip.dataset.filter || "all";
      showingFavoritesOnly = false;
      renderProducts();
      updateBottomNavActive();
    });
  });
}

function bindSort() {
  if (!sortSelect) return;
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderProducts();
  });
}

function bindBrandFilter() {
  if (!brandSelect) return;
  brandSelect.addEventListener("change", () => {
    currentBrand = brandSelect.value || "all";
    showingFavoritesOnly = false;
    renderProducts();
  });
}

function debounce(fn, delay) {
  let handle;
  return (...args) => {
    clearTimeout(handle);
    handle = setTimeout(() => fn(...args), delay);
  };
}

function bindSearch() {
  if (!searchInput) return;
  const handler = debounce((value) => {
    searchQuery = value.trim();
    showingFavoritesOnly = false;
    renderProducts();
    renderSearchDropdown();
    persistRecentSearch(value.trim());
  }, 200);

  searchInput.addEventListener("input", (e) => handler(e.target.value));
  searchInput.addEventListener("focus", () => renderSearchDropdown());
  document.addEventListener("click", (evt) => {
    if (!searchDropdown) return;
    if (!evt.target.closest("#searchShell")) {
      searchDropdown.classList.remove("is-open");
    }
  });
}

// Search suggestions
const POPULAR_SEARCHES = [
  "Nike Air Max",
  "Ultraboost",
  "New Balance 574",
  "Puma RS-X",
  "White sneakers",
  "Running shoes",
];

function getRecentSearches() {
  try {
    const raw = localStorage.getItem("motionwear:recent-searches");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function persistRecentSearch(term) {
  if (!term) return;
  const list = getRecentSearches().filter((t) => t.toLowerCase() !== term.toLowerCase());
  list.unshift(term);
  const trimmed = list.slice(0, 6);
  try {
    localStorage.setItem("motionwear:recent-searches", JSON.stringify(trimmed));
  } catch {
    // ignore
  }
}

function renderSearchDropdown() {
  if (!searchDropdown) return;
  const value = searchInput ? searchInput.value.trim() : "";
  const recent = getRecentSearches();

  let html = "";
  if (recent.length) {
    html += '<div class="search-section-label">Recent</div>';
    html += recent
      .map((term) => `<div class="search-item" data-search-term="${term.replace(/"/g, "&quot;")}">${term}</div>`)
      .join("");
  }
  html += '<div class="search-section-label">Popular</div>';
  html += POPULAR_SEARCHES.map(
    (term) => `<div class="search-item" data-search-term="${term.replace(/"/g, "&quot;")}">${term}</div>`
  ).join("");

  if (!html) {
    searchDropdown.classList.remove("is-open");
    return;
  }

  searchDropdown.innerHTML = html;
  searchDropdown.classList.add("is-open");

  searchDropdown.querySelectorAll(".search-item").forEach((item) => {
    item.addEventListener("click", () => {
      const term = item.getAttribute("data-search-term") || "";
      if (searchInput) {
        searchInput.value = term;
      }
      searchQuery = term;
      persistRecentSearch(term);
      renderProducts();
      renderSearchDropdown();
    });
  });
}

// Smooth scroll
function smoothScrollTo(targetSelector) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = rect.top + window.scrollY - 16;
  window.scrollTo({ top: absoluteY, behavior: "smooth" });
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-target");
      if (target) smoothScrollTo(target);
    });
  });
}

// Bottom nav
function bindBottomNav() {
  if (!bottomNav) return;
  bottomNav.addEventListener("click", (evt) => {
    const item = evt.target.closest(".bottom-nav-item");
    if (!item) return;

    const favFilter = item.getAttribute("data-filter");
    if (favFilter === "favorites") {
      showingFavoritesOnly = true;
      currentFilter = "all";
      filterChips.forEach((c) => c.classList.remove("chip--active"));
      renderProducts();
      updateBottomNavActive(item);
      return;
    }

    const target = item.getAttribute("data-scroll-target");
    if (target) {
      smoothScrollTo(target);
      updateBottomNavActive(item);
    }
  });
}

function updateBottomNavActive(activeItem) {
  const items = document.querySelectorAll(".bottom-nav-item");
  items.forEach((i) => i.classList.remove("bottom-nav-item--active"));

  if (activeItem) {
    activeItem.classList.add("bottom-nav-item--active");
  } else {
    const home = document.querySelector('.bottom-nav-item[data-scroll-target="#hero"]');
    if (home) home.classList.add("bottom-nav-item--active");
  }
}

// Modal
function initModal() {
  document.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  productModal.addEventListener("click", (evt) => {
    if (evt.target === productModal) closeModal();
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && productModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  activeProduct = product;
  activeImageIndex = 0;
  selectedColor = product.colors[0] || null;
  selectedSize = product.sizes[0] || null;
   selectedQty = 1;

  modalName.textContent = product.name;
  modalCategory.textContent = product.category;
  modalPrice.textContent = `$${product.price}`;
  modalRating.textContent = product.rating.toFixed(1);
   if (modalQty) {
     modalQty.textContent = String(selectedQty);
   }

  renderModalImages();
  renderModalColors();
  renderModalSizes();
  renderReviews(product);

  modalFavorite.classList.toggle("is-active", favorites.has(product.id));

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
}

function renderModalImages() {
  if (!activeProduct) return;
  const imgs = activeProduct.images;
  const safeIndex = Math.min(activeImageIndex, imgs.length - 1);
  activeImageIndex = safeIndex;

  modalImage.src = imgs[safeIndex];
  modalImage.alt = activeProduct.name;

  carouselDots.innerHTML = "";
  imgs.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot" + (index === activeImageIndex ? " carousel-dot--active" : "");
    dot.addEventListener("click", () => {
      activeImageIndex = index;
      renderModalImages();
    });
    carouselDots.appendChild(dot);
  });
}

function renderModalColors() {
  modalColors.innerHTML = "";
  if (!activeProduct) return;

  activeProduct.colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "color-swatch" + (color === selectedColor ? " is-selected" : "");
    btn.style.background = color;
    btn.addEventListener("click", () => {
      selectedColor = color;
      renderModalColors();
    });
    modalColors.appendChild(btn);
  });
}

function renderModalSizes() {
  modalSizes.innerHTML = "";
  if (!activeProduct) return;

  activeProduct.sizes.forEach((size) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "size-pill" + (size === selectedSize ? " is-selected" : "");
    btn.textContent = size;
    btn.addEventListener("click", () => {
      selectedSize = size;
      renderModalSizes();
    });
    modalSizes.appendChild(btn);
  });
}

modalFavorite.addEventListener("click", () => {
  if (!activeProduct) return;
  toggleFavorite(activeProduct.id, modalFavorite);
});

// Modal quantity and cart
document.querySelectorAll(".qty-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!activeProduct) return;
    const dir = btn.getAttribute("data-qty");
    if (dir === "inc") {
      selectedQty = Math.min(10, selectedQty + 1);
    } else if (dir === "dec") {
      selectedQty = Math.max(1, selectedQty - 1);
    }
    if (modalQty) {
      modalQty.textContent = String(selectedQty);
    }
  });
});

if (modalAddToCart) {
  modalAddToCart.addEventListener("click", () => {
    if (!activeProduct) return;
    addToCart(activeProduct, selectedQty);
  });
}

// Size guide modal
function bindSizeGuide() {
  sizeGuideTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!sizeGuideModal) return;
      sizeGuideModal.classList.add("is-open");
      sizeGuideModal.setAttribute("aria-hidden", "false");
    });
  });

  sizeGuideClosers.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!sizeGuideModal) return;
      sizeGuideModal.classList.remove("is-open");
      sizeGuideModal.setAttribute("aria-hidden", "true");
    });
  });
}

// Reviews
const SAMPLE_REVIEWS = [
  { productId: "nike-air-max-270", name: "Ali", rating: 5, text: "Amazing comfort for daily runs." },
  { productId: "adidas-ultraboost-22", name: "Sara", rating: 5, text: "Boost cushioning is unreal." },
  { productId: "nb-574", name: "Ahmed", rating: 4, text: "Great for casual wear, slightly narrow." },
  { productId: "puma-rs-x", name: "Zain", rating: 5, text: "Love the chunky silhouette." },
];

function renderReviews(product) {
  if (!reviewsListEl || !reviewsScoreEl || !reviewsMetaEl) return;
  const relevant = SAMPLE_REVIEWS.filter((r) => r.productId === product.id);
  const filtered = relevant.filter((r) => {
    if (activeReviewFilter === "all") return true;
    if (activeReviewFilter === "5") return r.rating === 5;
    if (activeReviewFilter === "4") return r.rating === 4;
    if (activeReviewFilter === "3") return r.rating <= 3;
    return true;
  });

  const avg = relevant.length
    ? relevant.reduce((sum, r) => sum + r.rating, 0) / relevant.length
    : product.rating || 5;

  reviewsScoreEl.textContent = avg.toFixed(1);
  reviewsMetaEl.textContent = `Based on ${relevant.length || product.reviews || 0} reviews`;

  if (!filtered.length) {
    reviewsListEl.innerHTML = '<p class="review-body">No reviews yet for this filter.</p>';
    return;
  }

  reviewsListEl.innerHTML = filtered
    .map(
      (r) => `
      <article class="review-card">
        <div class="review-header">
          <span class="review-name">${r.name}</span>
          <span class="review-stars">${"★".repeat(r.rating)}</span>
        </div>
        <p class="review-body">${r.text}</p>
      </article>
    `
    )
    .join("");

  if (reviewsFiltersEl) {
    reviewsFiltersEl.querySelectorAll(".chip").forEach((chip) => {
      const val = chip.getAttribute("data-review-filter") || "all";
      chip.classList.toggle("chip--active", val === activeReviewFilter);
      chip.onclick = () => {
        activeReviewFilter = val;
        renderReviews(product);
      };
    });
  }

  if (writeReviewBtn) {
    writeReviewBtn.onclick = () => {
      alert("Review submission form would appear here.");
    };
  }
}

// Lightbox
function openLightbox(index) {
  if (!activeProduct || !lightbox || !lightboxImg) return;
  const imgs = activeProduct.images || [];
  if (!imgs.length) return;
  lightboxIndex = ((index % imgs.length) + imgs.length) % imgs.length;
  lightboxImg.src = imgs[lightboxIndex];
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function bindLightbox() {
  if (!lightbox) return;

  lightboxClosers.forEach((btn) => {
    btn.addEventListener("click", closeLightbox);
  });

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
      if (!activeProduct) return;
      openLightbox(lightboxIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
      if (!activeProduct) return;
      openLightbox(lightboxIndex + 1);
    });
  }

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
    if (!activeProduct || !lightbox.classList.contains("is-open")) return;
    if (evt.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
    if (evt.key === "ArrowRight") openLightbox(lightboxIndex + 1);
  });
}

// Three.js hero
function initThree() {
  const canvas = document.getElementById("shoeCanvas");
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0.4, 0.4, 2.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x080820, 1.1);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(2, 3, 4);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x3b82f6, 0.7);
  rimLight.position.set(-2, 1, -3);
  scene.add(rimLight);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.minDistance = 1.5;
  controls.maxDistance = 3.5;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.2;
  controls.rotateSpeed = 0.7;

  const loader = new THREE.GLTFLoader();
  const manager = new THREE.LoadingManager();

  manager.onError = () => {
    createFallbackShoe(scene);
  };

  const modelUrl =
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AdidasShoe/glTF-Binary/AdidasShoe.glb";

  loader.load(
    modelUrl,
    (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      model.scale.set(1.6, 1.6, 1.6);
      model.rotation.y = Math.PI / 6;
      scene.add(model);
    },
    undefined,
    () => {
      createFallbackShoe(scene);
    }
  );

  const planeGeo = new THREE.CircleGeometry(2, 64);
  const planeMat = new THREE.MeshStandardMaterial({
    color: 0x020617,
    emissive: 0x000000,
    roughness: 0.85,
    metalness: 0.1,
  });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -0.8;
  plane.receiveShadow = true;
  scene.add(plane);

  function onResize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  window.addEventListener("resize", onResize);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

function createFallbackShoe(scene) {
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(1.6, 0.5, 0.6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.4, roughness: 0.3 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 0;
  group.add(body);

  const soleGeo = new THREE.BoxGeometry(1.7, 0.18, 0.65);
  const soleMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.1, roughness: 0.6 });
  const sole = new THREE.Mesh(soleGeo, soleMat);
  sole.position.y = -0.22;
  group.add(sole);

  const collarGeo = new THREE.CylinderGeometry(0.2, 0.3, 0.3, 16);
  const collarMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.4, roughness: 0.3 });
  const collar = new THREE.Mesh(collarGeo, collarMat);
  collar.rotation.z = Math.PI / 2.4;
  collar.position.set(-0.45, 0.22, 0);
  group.add(collar);

  group.rotation.y = Math.PI / 6;
  group.position.y = -0.1;

  scene.add(group);
}

// Cart logic
function addToCart(product, qty) {
  const quantity = Number.isFinite(qty) && qty > 0 ? qty : 1;
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty = Math.min(99, existing.qty + quantity);
  } else {
    cart.push({ id: product.id, qty: quantity, price: product.price });
  }
  persistCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  persistCart();
  renderCart();
}

function updateCartQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    persistCart();
    renderCart();
  }
}

function calculateCartTotals() {
  let count = 0;
  let subtotal = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    count += item.qty;
    subtotal += product.price * item.qty;
  });
  return { count, subtotal };
}

function renderCart() {
  cartItemsEl.innerHTML = "";
  const { count, subtotal } = calculateCartTotals();

  cartCountEl.textContent = String(count);
  cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  if (!cart.length) {
    const empty = document.createElement("p");
    empty.textContent = "Your cart is empty. Start exploring the collection.";
    empty.style.color = "var(--muted)";
    empty.style.fontSize = "0.85rem";
    cartItemsEl.appendChild(empty);
    return;
  }

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" />
      <div class="cart-item-main">
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-meta">${product.brand} · ${product.category}</div>
        <div class="cart-item-footer">
          <div class="cart-item-qty">
            <button class="qty-btn" data-cart-qty="dec" data-id="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-cart-qty="inc" data-id="${item.id}">+</button>
          </div>
          <div>
            $${(product.price * item.qty).toFixed(2)}
          </div>
        </div>
        <button class="cart-remove" data-remove-id="${item.id}">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  cartItemsEl.querySelectorAll("[data-cart-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const dir = btn.getAttribute("data-cart-qty");
      updateCartQty(id, dir === "inc" ? 1 : -1);
    });
  });

  cartItemsEl.querySelectorAll("[data-remove-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-remove-id");
      removeFromCart(id);
    });
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function bindCart() {
  renderCart();
  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  cartCheckout.addEventListener("click", () => {
    alert("Checkout flow would start here.");
  });
}

// Reveal on scroll
function initRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Sticky nav state
function initStickyNav() {
  if (!topNav) return;
  const onScroll = () => {
    if (window.scrollY > 32) {
      topNav.classList.add("is-solid");
    } else {
      topNav.classList.remove("is-solid");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Latest carousel arrows
function bindLatestCarousel() {
  if (!latestScroll) return;
  if (latestPrev) {
    latestPrev.addEventListener("click", () => {
      latestScroll.scrollBy({ left: -latestScroll.clientWidth, behavior: "smooth" });
    });
  }
  if (latestNext) {
    latestNext.addEventListener("click", () => {
      latestScroll.scrollBy({ left: latestScroll.clientWidth, behavior: "smooth" });
    });
  }
}

// Kick off
window.addEventListener("DOMContentLoaded", init);
