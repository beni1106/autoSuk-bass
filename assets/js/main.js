document.addEventListener("DOMContentLoaded", () => {
    /* ================= NAVBAR ================= */
    fetch("navbar.html")
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById("navbar-container");
            if (!container) return;

            container.innerHTML = html;

            const navbar = document.querySelector("header");
            if (navbar && document.body.classList.contains("marketing-plan-page")) {
                navbar.classList.add("fixed", "top-0", "left-0", "w-full", "z-[9999]");
                document.body.style.paddingTop = navbar.offsetHeight + "px";
            }

            const menuBtn = document.getElementById("menu-btn");
            const mobileMenu = document.getElementById("mobile-menu");

            if (!menuBtn || !mobileMenu) return;

            let isOpen = false;

            menuBtn.addEventListener("click", () => {
                isOpen = !isOpen;
                mobileMenu.classList.toggle("-translate-x-full");
                menuBtn.textContent = isOpen ? "✕" : "☰";
            });

            document.querySelectorAll("#mobile-menu a").forEach(link => {
                link.addEventListener("click", () => {
                    mobileMenu.classList.add("-translate-x-full");
                    menuBtn.textContent = "☰";
                    isOpen = false;
                });
            });
        })
        .catch(err => console.error("Navbar load error:", err));


    /* ================= FOOTER ================= */
    fetch("footer.html")
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById("footer-container");
            if (container) container.innerHTML = html;
        });


    /* ================= HERO SLIDER ================= */
    const slider = document.getElementById("hero-slider");
    if (slider) {

        const slides = Array.from(slider.children);
        const totalSlides = slides.length;

        const btnNext = document.getElementById("hero-next");
        const btnPrev = document.getElementById("hero-prev");

        let currentSlide = 0;
        let autoSlideInterval;
        let isAnimating = false;

        function animateText(index) {
            slides.forEach(slide => {
                slide.querySelectorAll(".hero-line").forEach(line => {
                    line.classList.remove("show");
                });
            });

            slides[index].querySelectorAll(".hero-line").forEach(line => {
                const delay = Number(line.dataset.delay) || 0;
                setTimeout(() => line.classList.add("show"), delay);
            });
        }

        function updateSlider() {
            if (isAnimating) return;
            isAnimating = true;

            slider.style.transform = `translate3d(-${currentSlide * 100}%, 0, 0)`;
            animateText(currentSlide);

            setTimeout(() => {
                isAnimating = false;
            }, 950);
        }

        btnNext?.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
            resetAutoSlide();
        });

        btnPrev?.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
            resetAutoSlide();
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        animateText(0);
        startAutoSlide();
    }


    /* ================= REVEAL OBSERVER ================= */
    const revealSections = document.querySelectorAll(".reveal-section");
    const revealItems = document.querySelectorAll(".reveal-item");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(sec => sectionObserver.observe(sec));

    const itemObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                itemObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    });

    revealItems.forEach(item => itemObserver.observe(item));

});
