// Mobile menu toggle (simple)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (nav.style.display === "flex") {
        nav.style.display = "";
        menuToggle.textContent = "☰";
      } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.gap = "12px";
        menuToggle.textContent = "✕";
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

  // World tabs: populate placeholder images and toggle views
  const worldData = {
    posts: [
      {
        img: "./assets/hero.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/quiz_page_pic.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/workshop_page_pic.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_1.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_2.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_3.png",
        href: "https://instagram.com/insys_artistry",
      },
    ],
    reels: [
      {
        img: "./assets/product_pic_4.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/craft_section_pic.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/hero.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/workshop_page_pic.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/quiz_page_pic.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_1.png",
        href: "https://instagram.com/insys_artistry",
      },
    ],
    tagged: [
      {
        img: "./assets/product_pic_2.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_3.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/product_pic_4.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/insy_logo.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/trust_icon.png",
        href: "https://instagram.com/insys_artistry",
      },
      {
        img: "./assets/puzzle_icon.png",
        href: "https://instagram.com/insys_artistry",
      },
    ],
  };

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
});
