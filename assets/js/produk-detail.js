const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const produkData = {
    botani: {
        title: "Botani",
        image: "Produk_Botani.webp",
        description:
            "Botani adalah NUTRISI TAMANAN.",
        memiliki4jenis: [
            "SOIL TREATMENT(Olah Tanah)",
            "BOTANI(Nutrisi Tanaman)",
            "SUPER NPK(Natrium,Kalium,Pospat)",
            "PESTIDA NABATI(Pemberantas HAMA)"
        ],
        manfaat: [
            "Membantu menyuburkan tanah",
            "Mengembalikan unsur hara & struktural tanah",
            "Mengurangi ketergantungan pupuk kimia",
            "Meningkatkan berat panen & kualitas tanaman",
            "Tanaman lebih sehat, alami dan organic",
            "Tanaman lebih kuat, dan tahan hama",
        ],
        hargaKons: "Botani : Rp 300.000",
        hargaDist: "Botani : Rp 200.000",

    },
    eikana: {
        title: "Eikana",
        image: "Produk_Eikana.webp",
        description:
            "Eikana cara tepat DETOKS tubuh dan menurunkan Berat Badan.",
        kandungan:
            "Serat Jagung, manggis bubuk, psyllium husk, tomat bubuk, stroberi bubuk, oak bubuk, bit merah bubuk, anggur bubuk, antioksidan asam askorbat, ekstrak buah dan sayur, ekstrak tebu, kalsium dari ekstrak ganggang laut, sirsak bubuk, wortel bubuk, minyak ikan, apel bubuk, L-Glutation, Billberry bubuk, L-Arginin, pengatur keasaman asam sitrat, premiks vitamin dan mineral, pewarna alami beta-karoten dari blakesla trispora",
        manfaat: [
            "Memperbaiki sistem pencernaan dan penyerarapan nutrisi",
            "Mengontrol berat badan",
            "Membantu menurunkan tekanan darah",
            "Menurunkan kolestrol",
            "Menyehatkan kulit dan mengandung antioksidant tinggi",
            "Menyehatkan organ reproduksi dan seksual",
            "Mengurangi lemak pada liver",
            "Membantu menghambat pertumbuhan sel kanker",
            "Mencegah penyakit kardiovaskuler (stroke, hipertensi, penyakit jantung coroner, dsb)",
            "Membantu mengatasi alergi",
            "Membantu menormalkan kadar gula darah",
        ],
        hargaKons: " : Rp 700.000",
        hargaDist: " : Rp 600.000",
    },
    gilcampropolis: {
        title: "Gilcam Propolis",
        image: "Produk_Gilcam_Propolis.webp",
        description:
            "Propolis dengan rasa mint yang enak dengan banyak manfaat, propolis, asam amino sangat baik untuk menjaga kesehatan dan antibiotik alami. propolis dikenal mempunyai sifat anti bakteri, anti virus, anti jamur, dan anti radang, dalam herbal ini dapat membantu memberikan perlindungan tubuh terhadap berbagai macam penyakit yang AMAN untuk BUMIL dan BAYI.",
        kandungan:
            "Madu trigona,Propolis,Asam amino,Royal jelly,Daun mint",

        manfaat: [
            "Membantu Mengobati Thypus, Diare Dan Muntaber",
            "Membantu Mengobati Flu Dan Tbc",
            "Membantu Mengobati HIV/AIDS, Sipilis/ Rajasigna",
            "Darah Tinggi, Jantung, Stroke, Diabetes Melitus Dan Cangrene",
            "Membantu Mengobati Asam Urat, Kolestrol, Triggliserin",
            "Sebagai Anti Batu Ginjal, Gagal Ginjal Dan Hepatitis",
            "Meredakan Gejala Herpes Genital",
            "Meningkatkan Trombosit Dan Mengobati Demam Berdarah",
            "Berfungsi Untuk Membersihkan Pembuluh Darah",
            "Dan Detoksifikasi",
        ],
        hargaKons: " : Rp 700.000",
        hargaDist: " : Rp 600.000",
    },
    kopidongkrak: {
        title: "Kopi Dongkrak",
        image: "Produk_Kopi_Dongkrak.webp",
        description:
            "Kopi Dongkrak",
        kandungan: "Ekstrak Ginseng,L-Arginin,Gula Aren,Vitamin B1,Vitamin B3",
        manfaatPria: [
            "Meningkatkan stamina dan gairah seksual",
            "Membantu mengatasi ejakulasi dini (tahan lama)",
            "Membantu menyembuhkan diabetes",
            "Membantu mengatasi gangguan pencernaan dan jantung",
            "Membantu memperbaiki fungsi organ reproduksi pria",
            "Memperlancar peredaran darah",
            "Membantu menurunkan hipertensi dan kolesterol",
            "Membantu mengatasi gejala stres dan susah tidur",
            "Meningkatkan daya tahan tubuh",
        ],
        manfaatWanita: [
            "Membantu mencegah MENOPAUSE dini",
            "Membantu memperbaiki fungsi organ reproduksi",
            "Meningkatkan gairah seksual wanita",
            "Membantu melancarkan haid",
            "Menghilangkan rasa nyeri haid/menstruasi",
            "Meningkatkan sistem imun/ daya tahan tubuh",
        ],
        hargaKons: " : Rp 350.000",
        hargaDist: " : Rp 300.000",
    },
    ordinate: {
        title: "Ordinate",
        image: "Produk_Ordinate.webp",
        description:
            "ORDINATE STRAWBERRY merupakan minuman serbuk instan segar dengan ekstrabuah-buahan seperti Strawberry, Apel, Anggur di campur dengan kolagen ikan EROPA 4800 mg, L-Glutation 300mg yang diformulasikan secara khusus untuk ANTI AGING dan kecantikan kulit, Rambut, Gigi, Sendi, Tulang, Kuku dan Juga Regenerasi Sel.",
        kandungan:
            "L-Gluthatione / GSH (master antioxidant/ The Mother of All Antioxidants),Collagen, Strawberry, Apel, Anggur",
        manfaat: [
            "Mencukupi kebutuhan serat anda",
            "Menjaga dan meningkatkan kesehatan jantung anda",
            "Menjaga kesemutan, kolestrol dan asam urat",
            "Menstabilkan gula darah",
            "Mendetox hati",
            "Menghilangkan flek hitam",
            "Mengenyalkan dan menghaluskan kulit",
            "Mencerahkan kulit",
            "Mengurangi keriput dan selulit",
            "Mengecilkan pori-pori kulit wajah",
            "Menjadi sumber vitamin dan mineral",
            "Menyehatkan tulang, gigi, sendi, rambut, kuku dan kulit",
            "Sumber anti oksidan",
            "Anti aging",
            "Low GL",
        ],
        hargaKons: " : Rp 700.000",
        hargaDist: " : Rp 600.000",
    },
    bioLIFE: {
        title: "BioLIFE",
        image: "Produk_BioLIFE.webp",
        description:
            "Biowave Detox Patch diterapkan dengan teknologi Terahertz Quantum chip, yang membantu detoksifikasi menyeimbangkan energi dan memberikan rasa relaksasi.",
        manfaat: [
            "Memperlancar peredaran darah",
            "Meningkatkan metabolisme tubuh",
            "Memperbaiki dan mengaktifkan sel",
            "Obesitas (diet)",
            "Mengurangi ketegangan otot",
            "Membantu produksi kolagen",
            "Memperbaiki kerusakan limfa",
            "Menyeimbangkan fungsi organ tubuh",
            "Mengaktifkan bonad (kelenjar reproduksi)",
            "Mencegah peradangan",
            "Detoksifikasi",
            "Mencegah penuaan dini",
            "Mencegah dan mengurangi kerutan pada wajah",
            "Dll.",
        ],
    },
    bioVIT: {
        title: "BioVIT",
        image: "Produk_BioVIT.webp",
        description:
            "BioVit adalah produk herbal yang berbentuk tablet yang diramu secara tradisional dengan 100% berbahan alami dan halal. Ramuan berkhasiat ini telah ditemukan sejak puluhan tahun yang lalu dan terbukti dapat membantu menjaga kesehatan serta pemulihan berbagai macam keluhan penyakit ringan, sedang maupun berat, terutama penyakit yang berhubungan dengan Sendi dan Saraf. Membantu terapi dan pemulihan beberapa keluhan kesehatan.",
        kandungan: "Madu trigona,Propolis,Asam amino,Royal jelly,Daun mint",
        manfaat: [
            "Osteoporosis, sakit tulang, persendian dan syaraf",
            "Sakit punggung, sakit pinggang, dan sakit bahu",
            "Memperlancar peredaran darah",
            "Kebas kaki dan tangan",
            "Artritis, stroke, alzlaimer dan asam urat",
            "Gula darah, darah tinggi dan diabetes",
            "Asam lambung, asthma, sinusitis",
            "Batuk, radang tenggorokan",
            "Merawat & membersihkan paru-paru",
            "Nyeri haid kurang kesadaran",
            "Merawat masalah penglihatan",
            "Membersihkan toksin ginjal",
            "Meningkatkan sistem kekebalan tubuh",
        ],
        hargaKons: " : Rp 350.000",
        hargaDist: " : Rp 300.000",
    },
};

const produk = produkData[slug];
const container = document.getElementById("produk-detail");

if (!produk) {
    container.innerHTML = `
        <h1 class="text-3xl font-bold font-inter text-white">
            Produk tidak ditemukan
        </h1>
    `;
} else {
    container.innerHTML = `
        <h1 class="reveal-item font-montserrat uppercase font-black text-white text-xl md:text-4xl leading-tight tracking-[-0.02em] mb-4">${produk.title}</h1>

        <img src="../assets/img/${produk.image}"
             class="mx-auto max-h-96 object-contain"
             alt="${produk.title}">

        <p class="text-white font-inter font-medium">
            ${produk.description}
        </p>

        ${produk.memiliki4jenis ? `
            <div class="text-left text-white">
                <h2 class="text-xl font-semibold mb-2 text-white">Jenis Produk</h2>
                <ul class="list-disc list-inside">
                    ${produk.memiliki4jenis.map(i => `<li>${i}</li>`).join("")}
                </ul>
            </div>
        ` : ""}

        ${produk.manfaat ? `
            <div class="text-left text-white">
                <h2 class="text-xl font-inter mb-2 text-white">Manfaat</h2>
                <ul class="list-disc list-inside">
                    ${produk.manfaat.map(i => `<li>${i}</li>`).join("")}
                </ul>
            </div>
        ` : ""}
        ${produk.manfaatPria ? `
    <div class="text-left text-white mt-6">
        <h2 class="text-xl font-inter font-md mb-2 text-white">
            Manfaat untuk Pria
        </h2>
        <ul class="list-disc list-inside text-white">
            ${produk.manfaatPria.map(i => `<li>${i}</li>`).join("")}
        </ul>
    </div>
` : ""}
${produk.manfaatWanita ? `
    <div class="text-left text-white mt-6">
        <h2 class="text-xl font-inter font-md mb-2 text-white">
            Manfaat untuk Wanita
        </h2>
        <ul class="list-disc list-inside text-white">
            ${produk.manfaatWanita.map(i => `<li>${i}</li>`).join("")}
        </ul>
    </div>
` : ""}


        <div class="flex justify-center gap-8 font-bold">
            ${produk.hargaDist ? `<p>Distributor: ${produk.hargaDist}</p>` : ""}
            ${produk.hargaKons ? `<p>Konsumen: ${produk.hargaKons}</p>` : ""}
        </div>
    `;
}
