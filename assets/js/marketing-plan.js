const images = Array.from({ length: 14 }, (_, i) =>
    `assets/images-marketing/${i + 1}.webp`
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

// RENDER
images.forEach((src, index) => {
    const wrapper = document.createElement("div");
    wrapper.className =
        "w-full overflow-hidden opacity-0 translate-y-6 transition-all duration-700 will-change-transform";

    const img = document.createElement("img");
    img.dataset.src = src;
    img.alt = `Marketing Plan ${index + 1}`;
    img.loading = index < 2 ? "eager" : "lazy";
    img.decoding = "async";
    img.className = "w-full h-auto block";

    wrapper.appendChild(img);
    container.appendChild(wrapper);
});

// OBSERVER
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const img = entry.target.querySelector("img");

            // LOAD IMAGE
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            }

            // ANIMATION
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");

            observer.unobserve(entry.target);
        });
    },
    {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.15
    }
);

document.querySelectorAll("#marketing-images > div")
    .forEach(el => observer.observe(el));
