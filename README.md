 Nyajha Olive — Interactive Portfolio Website

This repository contains a personal portfolio website built with HTML, CSS, and JavaScript.
It follows the course rubric: Home, About, Projects, Resume, Contact; includes a simple chatbot and a QR code link area.

## Files
- `index.html` — Home page
- `about.html` — About / skills / experience
- `projects.html` — Projects with GitHub links (replace placeholders)
- `resume.html` — View and download resume (PDF included)
- `contact.html` — Contact form (demo handler) and mailto fallback
- `style.css` — Pink & grey theme styling
- `script.js` — Chatbot and simple interaction logic
- `profile.jpg` — Placeholder profile image
- `resume.pdf` — Your uploaded resume (included if present)

## How to run locally
1. Download or clone the repository.
2. Open `index.html` in your web browser (no server required for basic viewing).

## Chatbot implementation
A simple rule-based chatbot is implemented in `script.js` (function `createChatWidget`). It matches user input to a list of FAQs and returns canned responses. For a production chatbot, consider using Dialogflow, Rasa, or a hosted service.

## QR Code
The homepage includes an image tag that uses an external QR generation service. After you publish the site to GitHub Pages, replace `REPLACE_WITH_YOUR_PUBLISHED_URL` in `index.html` with your actual GitHub Pages URL to produce a QR code that links to your live site.

## Contact form
The contact form currently functions as a demo and displays a confirmation message on submit. To receive messages, integrate with Formspree, Netlify Forms, or a server endpoint.

## To-do (Replace placeholders)
- Update `projects.html` with links to your actual GitHub repositories.
- Replace `profile.jpg` with your professional headshot.
- Replace QR image data URL with your published GitHub Pages URL.
- Optionally connect the contact form to a form processor (Formspree / Netlify).

---
