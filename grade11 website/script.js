
/* ============================================
   Thandeka's Gig Economy Project — script.js
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile navigation ---------- */
  const hamburger = document.querySelector(".hamburger");
  const navLinks  = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });

    // Close the menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.textContent = "☰";
      });
    });
  }

  /* ---------- Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item  = btn.parentElement;
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");

      // Close any other open item
      document.querySelectorAll(".accordion-item.open").forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });

      item.classList.toggle("open", !isOpen);
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll(".stat .num[data-target]");
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const value = target * progress;
        el.textContent = (target % 1 !== 0 ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Back-to-top button ---------- */
  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 350);
    });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg   = document.getElementById("formMsg");
      const name  = form.name.value.trim();
      const email = form.email.value.trim();
      const area  = form.area.value;
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        msg.textContent = "Please fill in your name, email and message.";
        msg.className = "form-msg err";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        msg.className = "form-msg err";
        return;
      }

      msg.textContent = `Thank you, ${name}! Your message about "${area}" has been received. We will reply within 24 hours.`;
      msg.className = "form-msg ok";
      form.reset();
    });
  }

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll(".year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});