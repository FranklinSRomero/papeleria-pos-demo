const categories = [
  "Todos",
  "Cuadernos",
  "Escritura",
  "Arte",
  "Oficina",
  "Escolar",
  "Impresión",
];

const products = [
  {
    sku: 8920,
    name: "Libreta Clásica A5",
    category: "Cuadernos",
    oldPrice: 420,
    price: 345,
    stock: 8,
    imageClass: "img-book",
  },
  {
    sku: 4412,
    name: "Bolígrafo Vector Blue",
    category: "Escritura",
    price: 189,
    stock: 24,
    imageClass: "img-pen",
  },
  {
    sku: 3301,
    name: "Set Acrílicos Pro 12u",
    category: "Arte",
    price: 560,
    stock: 2,
    imageClass: "img-paint",
  },
  {
    sku: 1109,
    name: 'Carpeta de Argollas 2"',
    category: "Oficina",
    price: 85,
    stock: 50,
    imageClass: "img-folder",
  },
  {
    sku: 5567,
    name: "Lápices de Color Terra",
    category: "Escolar",
    price: 210,
    stock: 15,
    imageClass: "img-pencils",
  },
];

const ticket = [
  { name: "Libreta Clásica A5", quantity: 2, unitPrice: 345, imageClass: "img-book" },
  { name: "Bolígrafo Vector Blue", quantity: 1, unitPrice: 189, imageClass: "img-pen" },
  { name: 'Carpeta de Argollas 2"', quantity: 3, unitPrice: 85, imageClass: "img-folder" },
];

const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});

const themeKey = "pos-theme";
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = themeToggle.querySelector(".theme-toggle-label");
const themeIcon = themeToggle.querySelector(".theme-toggle-icon");

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const isLight = theme === "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeLabel.textContent = isLight ? "Modo oscuro" : "Modo claro";
  themeIcon.textContent = isLight ? "☼" : "☾";
  localStorage.setItem(themeKey, theme);
}

const storedTheme = localStorage.getItem(themeKey);
applyTheme(storedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
});

function renderCategories() {
  const root = document.getElementById("categories");
  root.innerHTML = categories
    .map(
      (category, index) => `
        <button class="category-pill ${index === 0 ? "active" : ""}">${category}</button>
      `
    )
    .join("");
}

function renderProducts() {
  const root = document.getElementById("products");
  root.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <span class="sku-badge">SKU:${product.sku}</span>
          <div class="product-image ${product.imageClass}"></div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-category">${product.category}</div>
          <div class="price-line">
            ${
              product.oldPrice
                ? `<span class="old-price">${money.format(product.oldPrice)}</span>`
                : ""
            }
            <span class="current-price">${money.format(product.price)}</span>
          </div>
          <div class="stock-line">
            <span class="stock-dot"></span>
            <span>${product.stock} disp.</span>
          </div>
          <button class="add-button">Añadir al ticket</button>
        </article>
      `
    )
    .join("");
}

function renderTicket() {
  const root = document.getElementById("ticket-items");
  root.innerHTML = ticket
    .map((item) => {
      const total = item.quantity * item.unitPrice;
      return `
        <div class="ticket-item">
          <div class="ticket-thumb ${item.imageClass}"></div>
          <div class="item-info">
            <h3>${item.name}</h3>
            <p>${item.quantity} unidades x ${money.format(item.unitPrice)}</p>
          </div>
          <div class="item-meta">
            <div class="item-price">${money.format(total)}</div>
            <div class="qty-row"><span>-</span><span>${item.quantity}</span><span>+</span></div>
          </div>
        </div>
      `;
    })
    .join("");

  const subtotal = ticket.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const taxes = subtotal * 0.16;
  const discount = 50;
  const total = subtotal + taxes - discount;

  document.getElementById("subtotal").textContent = money.format(subtotal);
  document.getElementById("taxes").textContent = money.format(taxes);
  document.getElementById("discount").textContent = `-${money.format(discount)}`;
  document.getElementById("total").textContent = money.format(total);
}

renderCategories();
renderProducts();
renderTicket();
