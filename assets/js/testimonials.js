document.addEventListener("DOMContentLoaded", () => {
    const splide = new Splide("#testimonialSplide", {
        type: "loop",
        perPage: 1,
        gap: "30px",
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: true,
        pagination: true,
        speed: 650,
    });

    // OPTIONAL: stop video saat slide pindah
    splide.on("move", () => {
        document.querySelectorAll("#testimonialSplide iframe").forEach((iframe) => {
            iframe.src = iframe.src;
        });
    });

    splide.mount();
});
