# 🖤 Swift Designs Studio — Multipage Portfolio Website  

![Swift Designs Studio](https://img.shields.io/badge/Swift%20Designs-PHP%20Portfolio-black?style=for-the-badge&logo=php)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Custom-lightgrey?style=for-the-badge)
![Built by](https://img.shields.io/badge/Built%20by-Corey%20Shamburger-%23000000?style=for-the-badge)

---

## 💡 Overview
**Swift Designs Studio** is a modern, responsive multipage portfolio website built using **HTML5**, **CSS3**, **JavaScript**, and **PHP**.  
It serves as the official website and showcase for **Corey Shamburger** — highlighting web development projects, client services, and professional achievements with a sleek, dynamic interface.

---

## 🚀 Features
- ⚡ **Responsive Multi-Page Layout** — Home, About, Services, Portfolio, Testimonials, and Contact  
- 🔁 **Reusable Header/Footer** powered by PHP includes  
- 📬 **Functional Contact Form** with validation, CSRF protection, and anti-spam honeypot  
- 💫 **Animated Sections** using WOW.js, Animate.css, and Owl Carousel  
- 🧩 **Modular Structure** for easy customization and scaling  
- 🛡️ **Secure Form Handling** (CSRF tokens, spam protection, rate limiting)  
- 🧠 **SEO-Friendly Setup** with meta tags and clean markup  

---

## 🧩 Tech Stack
| Category | Technologies |
|-----------|---------------|
| **Frontend** | HTML5, CSS3, JavaScript, Bootstrap, jQuery |
| **Backend** | PHP (includes, mail handling) |
| **Animation / UX** | WOW.js, Animate.css, Owl Carousel |
| **Hosting** | Compatible with any PHP-enabled host (GoDaddy, Namecheap, Hostinger, etc.) |

---

## 🗂️ Folder Structure
```
swift-designs/
web/
 ├─ app/
 │   ├─ layout.tsx              # site shell (uses header/footer)
 │   ├─ page.tsx                # /            ← from index.php
 │   ├─ about/
 │   │   └─ page.tsx            # /about       ← from about.php
 │   ├─ services/
 │   │   └─ page.tsx            # /services    ← from services.php
 │   ├─ portfolio/
 │   │   └─ page.tsx            # /portfolio   ← from portfolio.php
 │   ├─ testimonials/
 │   │   └─ page.tsx            # /testimonials← from testimonial.php
 │   ├─ blog/
 │   │   └─ page.tsx            # /blog        ← from blog.php or old blog index
 │   ├─ contact/
 │   │   └─ page.tsx            # /contact     ← from contact.php
 │   ├─ privacy/
 │   │   └─ page.tsx            # /privacy     ← from privacy.php
 │   ├─ terms/
 │   │   └─ page.tsx            # /terms       ← from terms.php
 │   └─ api/
 │       └─ contact/
 │           └─ route.ts        # replaces data-processing.php (form handler)
 │
 ├─ components/
 │   ├─ Header.tsx              # from header.php
 │   └─ Footer.tsx              # from footer.php
 │
 ├─ public/
 │   ├─ images/                 # move old /images here
 │   ├─ fonts/                  # move fonts here (or keep where they are & fix paths)
 │   └─ (optional) css/js       # if you keep legacy CSS/JS
 └─ package.json


---

## ⚙️ Setup Instructions
1. **Upload all files** to your server root directory (`public_html/` or `/var/www/html/`).  
2. **Copy your assets** into the `/css`, `/js`, `/images`, and `/fonts` folders.  
3. **Set your contact email** in `contact.php`:  
   ```php
   $to = "info@swiftdesigns.studio";
   ```
4. Test the form — if your host blocks `mail()`, switch to **SMTP/PHPMailer**.
5. Done ✅ — your professional portfolio is live!

---

## 🧰 Optional Add-ons
| Feature | Description |
|----------|--------------|
| 💬 **GoHighLevel Chat** | Embed real-time chat widget for client communication |
| 🔐 **reCAPTCHA v3** | Add invisible spam protection to your contact form |
| 📊 **Google Analytics** | Track visitor behavior and conversions |
| 🚀 **Vercel Static Version** | Optional build for frontend-only hosting |

---

## 🖼️ Screenshots
| Home Page | About Page | Portfolio |
|------------|-------------|------------|
| ![Home Screenshot](https://via.placeholder.com/600x350.png?text=Home+Page) | ![About Screenshot](https://via.placeholder.com/600x350.png?text=About+Page) | ![Portfolio Screenshot](https://via.placeholder.com/600x350.png?text=Portfolio) |

> _Replace these placeholders with actual screenshots once your site is hosted._

---

## 🧑‍💻 Author
**Corey Shamburger**  
🖥️ https://swiftdesignsstudio.com  
📧 info@swiftdesignsstudio.com  
📍 San Diego, CA  

---

## 📄 License
© 2025 **Swift Designs Studio**. All rights reserved.  
You may use or modify this template for personal or portfolio use with credit to **Corey Shamburger**.

---

## ⭐ Support
If you like this project, please give it a ⭐ on GitHub and follow for updates!
