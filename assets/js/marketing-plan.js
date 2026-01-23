const images = Array.from({ length: 19 }, (_, i) =>
    `../assets/images-marketing/${i + 1}.webp`
);

const container = document.getElementById("marketing-images");

// LOAD NAVBAR
fetch("navbar.html")
    .then(res => res.text())
    .then(html => document.getElementById("navbar-container").innerHTML = html);

// LOAD FOOTER
fetch("footer.html")
    .then(res => res.text())
    .then(html => document.getElementById("footer-container").innerHTML = html);

// RENDER IMAGES
images.forEach((src, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "w-full overflow-hidden opacity-0 translate-y-6 transition-all duration-500";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Marketing Plan ${index + 1}`;
    img.loading = index === 0 ? "eager" : "lazy";
    img.className = "w-full h-auto block";

    wrapper.appendChild(img);
    container.appendChild(wrapper);
});

// ANIMATION OBSERVER (FRAMER-MOTION FEEL)
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-6");
                entry.target.classList.add("opacity-100", "translate-y-0");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll("#marketing-images > div")
    .forEach(el => observer.observe(el));
