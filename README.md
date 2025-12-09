#  Gaurav Chauhan — Portfolio Website  
A modern, fully responsive portfolio website built using **React + Vite**, showcasing my work, skills, experience, and contact system with EmailJS integration.

 **Live Website:** https://gauravchauhan.vercel.app  
 **Repository:** https://github.com/gaurav5268/portfolio
 

---

##  Features

###  Modern UI/UX  
- Glassmorphism + smooth animations  
- Clean, minimal and developer-friendly design  
- Fully responsive across all devices  

### Built with React + Vite  
- Lightning-fast development environment  
- Component-based clean architecture  

### Smooth Animations  
- Powered by **Framer Motion**  
- Page transitions + smooth fade & slide effects  

###Dynamic Navbar  
- Desktop & mobile–friendly  
- Hamburger menu on mobile  
- React Router pages: Home, About, Skills, Gallery, Resume, Contact  

### Resume Section  
- In-website quick overview  
- Embedded PDF viewer  
- Resume download button  

### Contact Form (EmailJS)  
- Direct message delivery to my email  
- Form validation  
- User-friendly notifications  

###  Gallery Page  
- Responsive photo grid  
- Clean preview system  

---

## Tech Stack

| Category | Technologies |
|---------|--------------|
| Frontend | React, Vite, JavaScript |
| Styling | CSS3, Framer Motion, Glass UI |
| Routing | React Router DOM |
| Utilities | EmailJS, Vercel Hosting |
| Version Control | Git & GitHub |

---

## Folder Structure (Important Files)

/src
├── components/
│ ├── Navbar.jsx
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Skills.jsx
│ ├── Gallery.jsx
│ ├── Resume.jsx
│ └── Contact.jsx
├── styles/
│ ├── Navbar.css
│ ├── Contacts.css
│ └── Other component-specific CSS
├── App.jsx
├── main.jsx
/public
├── COM_BACK.jpg (background image)
├── resume.pdf
└── icons (github, linkedin, etc.)


---

## Environment Variables (Required for Contact Form)

Create a `.env` file in the root:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


`.env` is added to `.gitignore` to keep credentials secure.

---

## Deployment (Vercel)

A `vercel.json` file is used to fix React Router 404 issue:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
Contact Me

Portfolio: https://gauravchauhan.vercel.app

GitHub: https://github.com/gaurav5268

LinkedIn: https://www.linkedin.com/in/gaurav-chauhan-277085228/

Email: gauravchau0@gmail.com


🙌 Thank You for Visiting My Portfolio!
