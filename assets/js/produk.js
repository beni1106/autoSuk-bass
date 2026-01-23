const produkList = [
    { slug: "botani", webp: "../assets/img/Produk_Botani.webp", title: "Botani" },
    { slug: "eikana", webp: "../assets/img/Produk_Eikana.webp", title: "Eikana" },
    { slug: "gilcampropolis", webp: "../assets/img/Produk_Gilcam_Propolis.webp", title: "Gilcam Propolis" },
    { slug: "kopidongkrak", webp: "../assets/img/Produk_Kopi_Dongkrak.webp", title: "Kopi Dongkrak" },
    { slug: "ordinate", webp: "../assets/img/Produk_Ordinate.webp", title: "Ordinate" },
    { slug: "bioVIT", webp: "../assets/img/Produk_BioVIT.webp", title: "BioVIT" },
    { slug: "bioLIFE", webp: "../assets/img/Produk_BioLIFE.webp", title: "BioLIFE" },
];


const container = document.getElementById("produk-list");

produkList.forEach((produk, index) => {
    const card = document.createElement("div");
    card.className =
        "bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", index * 100);

    card.innerHTML = `
        <div class="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
            <img
                src="${produk.webp}"
                alt="${produk.title}"
                class="object-contain max-h-48"
                loading="lazy"
            />
        </div>

        <h3 class="mt-5 text-white font-inter text-md font-semibold">
            ${produk.title}
        </h3>

        <a
            href="./produk-detail.html?slug=${produk.slug}"
            class="mt-4 px-4 py-2 bg-yellow-500 text-white font-inter rounded-lg "
        >
            Lihat Detail
        </a>
    `;

    container.appendChild(card);
});
