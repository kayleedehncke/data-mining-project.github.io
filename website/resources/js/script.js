// Fetch the navbar HTML and insert it into the page
fetch('../../views/layouts/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        let currentPage = window.location.pathname.split("/").pop().toLowerCase().split("?")[0].split("#")[0];
        if (!currentPage) 
        {
            currentPage = "intro.html";
        }
        const navLinks = document.querySelectorAll('#navbar-placeholder .nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href').toLowerCase() === currentPage) 
            {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } 
            else 
            {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    })
    .catch(error => console.error('Error loading navbar:', error));

fetch('../../')

// Navigation toggle functionality
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');

toggle.addEventListener('click', () => 
{
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
});
document.addEventListener('keydown', (e) => 
{
    if (e.key === 'Escape' && header.classList.contains('nav-open')) 
    {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    }
});