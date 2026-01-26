document.addEventListener('DOMContentLoaded', () => {
    // SCROLL SMOOTH KE PRODUK
    const produkBtn = document.querySelector('a[href="#produk-terjual"]');
    const produkSection = document.querySelector('#produk-terjual');

    if (produkBtn && produkSection) {
        produkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            produkSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // SCROLL SMOOTH KE LEGALITAS
    const legalBtn = document.querySelector('a[href="#legalitas"]');
    const legalSection = document.querySelector('#legalitas');

    if (legalBtn && legalSection) {
        legalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            legalSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // INTERSECTION OBSERVER UNTUK ANIMASI
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
