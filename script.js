// Product data
const productData = [
  {
    image: "./assets/product_pic_1.webp",
    name: "Ink Plates",
    alt: "Ink Plates",
  },
  {
    image: "./assets/product_pic_2.webp",
    name: "Mosaic Cup Holders",
    alt: "Mosaic Cup Holders",
  },
  {
    image: "./assets/product_pic_3.webp",
    name: "Mosaic Plates",
    alt: "Mosaic Plates",
  },
  {
    image: "./assets/product_pic_4.webp",
    name: "Season Cups",
    alt: "Season Cups",
  },
];

// World tabs: populate placeholder images and toggle views
const worldData = {
  posts: [
    {
      img: "./assets/hero.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/quiz_page_pic.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/workshop_page_pic.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_1.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_2.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_3.webp",
      href: "https://instagram.com/insys_artistry",
    },
  ],
  reels: [
    {
      img: "./assets/product_pic_4.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/craft_section_pic.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/hero.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/workshop_page_pic.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/quiz_page_pic.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_1.webp",
      href: "https://instagram.com/insys_artistry",
    },
  ],
  tagged: [
    {
      img: "./assets/product_pic_2.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_3.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/product_pic_4.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/insy_logo.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/trust_icon.webp",
      href: "https://instagram.com/insys_artistry",
    },
    {
      img: "./assets/puzzle_icon.webp",
      href: "https://instagram.com/insys_artistry",
    },
  ],
};

// Mobile menu toggle (simple)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle) {
    // accessibility state
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("is-open");
      menuToggle.textContent = opened ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", String(opened));
    });

    // close mobile menu when resizing to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          menuToggle.textContent = "☰";
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  // Smooth scroll for CTAs
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const target = this.getAttribute("href");
      if (target.length > 1) {
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  const gridEl = document.getElementById("world-grid");
  const tabButtons = document.querySelectorAll(".world-tab");

  function renderWorld(tabKey) {
    if (!gridEl || !worldData[tabKey]) return;
    gridEl.innerHTML = "";
    worldData[tabKey].forEach((item) => {
      const a = document.createElement("a");
      a.className = "world-item";
      a.href = item.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = "Instagram post";
      a.appendChild(img);

      gridEl.appendChild(a);
    });
  }

  function setActiveTab(clickedBtn) {
    tabButtons.forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    });
    clickedBtn.classList.add("is-active");
    clickedBtn.setAttribute("aria-selected", "true");
    renderWorld(clickedBtn.dataset.tab || "posts");
  }

  // wire up click handlers
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveTab(btn);
      }
    });
  });

  // initial render - use the active button or default to posts
  const active =
    document.querySelector(".world-tab.is-active") ||
    document.querySelector('.world-tab[data-tab="posts"]');
  if (active) renderWorld(active.dataset.tab || "posts");

  // Function to generate product cards
  function createProductCard(product) {
    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.alt}" />
        </div>
        <div class="product-meta">
          <div class="product-name">${product.name}</div>
        </div>
      </article>
    `;
  }

  // Render product cards
  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    productGrid.innerHTML = productData.map(createProductCard).join("");
  }
});
