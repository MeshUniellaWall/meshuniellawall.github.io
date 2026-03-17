document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        news: document.getElementById('section-news'),
        spec: document.getElementById('section-specialization'),
        socials: document.getElementById('section-socials')
    };

    const navLinks = document.querySelectorAll('nav a');

    function showPage(pageName) {
        Object.values(sections).forEach(s => {
            if (s) s.style.display = 'none';
        });

        if (pageName === 'all') {
            if (sections.news) sections.news.style.display = 'block';
            if (sections.spec) sections.spec.style.display = 'block';
        } else {
            const target = pageName === 'specialization' ? 'spec' : pageName;
            if (sections[target]) sections[target].style.display = 'block';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const page = e.target.getAttribute('data-page');
            showPage(page);
        });
    });

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    showPage('all');
});
