# Thandeka's Gig Economy Project 🛵

A three-page website about gig work in South Africa, built with **HTML, CSS and JavaScript**.
It has a light blue colour scheme, photos of different types of gig work, and made-up contact
details for each gig category.

---

## 📁 Project Structure

```javascript
thandeka-gigs/
├── index.html      ← Home page (concept, how to get a gig, types of gig work, contact form)
├── economy.html    ← Gig work & the South African economy
├── skills.html     ← Skills, education & requirements per gig type
├── style.css       ← All styling (light blue theme, responsive layout)
├── script.js       ← Interactivity (menu, accordion, animations, form validation)
└── images/         ← Photos used on the site
```

## 🚀 How to View the Website

1. Keep all the files in **one folder** (the images folder must stay next to the HTML files).
2. Double-click **`index.html`** — it opens in your browser. No server needed!

> ℹ️ If links or images break, make sure you opened the file from its own folder and that
> `style.css`, `script.js` and the `images/` folder are in the same place as the HTML files.

## 🌐 Pages

| Page | What it covers |
| --- | --- |
| `index.html` | What gig work is, how simple it is to get a gig job, types of gig work (Uber, food delivery, transport, courier), FAQ, contact info & form |
| `economy.html` | Gig work's contributions to the SA economy and whether it can replace traditional work |
| `skills.html` | Education levels, requirements and qualifications needed for each gig type |

## 🔗 How the `index.html#contact` Link Works

`index.html#contact` is a **link with an anchor**. The part after `#` matches the
`id="contact"` attribute on a section in `index.html`:

```html
<!-- In index.html — the target (the "anchor") -->
<section id="contact"> ... </section>
```

```html
<!-- The link that jumps straight to it -->
<a href="index.html#contact">Contact Us</a>
```

Clicking that link opens `index.html` **and scrolls straight down to the Contact section**
instead of stopping at the top. It works from any page of the site.

## ✨ JavaScript Features (script.js)

- Mobile hamburger menu
- Scroll-reveal animations
- FAQ accordion on the Home page
- Animated stat counters on the Economy page
- Contact form validation (name, email, message)
- Back-to-top button
- Auto-updating footer year

## 📧 Contact Details (made up, per gig type)

| Gig | Email | Phone |
| --- | --- | --- |
| Uber / E-hailing | rides@thandekagigs.co.za | +27 82 555 0147 |
| Food Delivery | food@thandekagigs.co.za | +27 83 555 0239 |
| Transport Services | transport@thandekagigs.co.za | +27 84 555 0312 |
| Courier Service | courier@thandekagigs.co.za | +27 85 555 0478 |
| General | hello@thandekagigs.co.za | +27 11 555 0100 |