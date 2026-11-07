/* =====================================================================
   DATA KONTEN — edit di sini. Setiap teks berbentuk {id:"...", en:"..."}.
   Teks [ISI ...] = placeholder: ganti dengan data resmi terverifikasi.
   ===================================================================== */
const PH = "[ISI DENGAN DATA RESMI TERBARU]";
const COLORS = {c1:"c1",c2:"c2",c3:"c3",c4:"c4"}; // kelas warna placeholder foto
// FOTO: simpan file di folder assets/images/ lalu isi "img" dengan path relatif, mis. img:"assets/images/kereta1.jpg".
// Galeri: tambahkan elemen ketiga, mis. ["train","c1","assets/images/kereta1.jpg"]. Kosong = placeholder warna.

const DATA = {
  nav: [
    ["home",{id:"Beranda",en:"Home"}],["about",{id:"Tentang KAI",en:"About KAI"}],["services",{id:"Layanan",en:"Our Services"}],
    ["info",{id:"Informasi",en:"Information"}],["gallery",{id:"Galeri",en:"Gallery"}],["org",{id:"Organisasi",en:"Organization"}],["contact",{id:"Kontak",en:"Contact Us"}]
  ],
  ui: {
    aboutBtn:{id:"Tentang KAI",en:"About KAI"}, svcBtn:{id:"Jelajahi Layanan",en:"Explore Services"},
    more:{id:"Baca selengkapnya",en:"Read more"}, sim:{id:"Konten Simulasi",en:"Simulated Content"},
    detail:{id:"Informasi resmi",en:"Official information"}, all:{id:"Semua",en:"All"},
    quick:{id:"Navigasi Cepat",en:"Quick Links"}, contact:{id:"Kontak",en:"Contact"}, social:{id:"Media Sosial",en:"Social Media"},
    disclaimer:{id:"Website ini merupakan proyek simulasi akademik dan bukan merupakan situs resmi PT Kereta Api Indonesia (Persero).",en:"This website is an academic simulation project and is not the official website of PT Kereta Api Indonesia (Persero)."},
    soon:{id:"Placeholder — tempelkan ID video YouTube resmi di DATA.videos",en:"Placeholder — paste an official YouTube video ID in DATA.videos"},
    mapPh:{id:"Peta lokasi kantor pusat — sematkan peta (embed) setelah alamat diverifikasi",en:"Head office map — embed a map once the address is verified"}
  },
  hero:{
    h:{id:"Menghubungkan Indonesia, Menggerakkan Masa Depan.",en:"Connecting Indonesia, Moving the Future."},
    s:{id:"Melalui layanan transportasi perkeretaapian yang mengutamakan keselamatan, kenyamanan, dan konektivitas, KAI terus berperan dalam mendukung mobilitas masyarakat Indonesia.",en:"Through railway transportation services that prioritise safety, comfort and connectivity, KAI continues to support the mobility of the Indonesian people."}
  },
  intro:{t:{id:"Mengenal KAI",en:"Getting to Know KAI"},
    p:{id:"PT Kereta Api Indonesia (Persero) adalah badan usaha milik negara yang bergerak di bidang transportasi perkeretaapian di Indonesia. KAI berperan dalam mendukung mobilitas orang dan barang serta berkomitmen pada pelayanan masyarakat.",en:"PT Kereta Api Indonesia (Persero) is a state-owned enterprise engaged in railway transportation in Indonesia. KAI supports the movement of people and goods and is committed to serving the public."}},
  stats:[ // JANGAN isi angka sebelum diverifikasi
    {v:"[ISI ANGKA]",l:{id:"Penumpang per tahun",en:"Passengers per year"}},
    {v:"[ISI ANGKA]",l:{id:"Panjang jalur (km)",en:"Track length (km)"}},
    {v:"[ISI ANGKA]",l:{id:"Jumlah stasiun",en:"Number of stations"}},
    {v:"[ISI ANGKA]",l:{id:"Jumlah pegawai",en:"Employees"}}],
  services:[
    {c:"c1",t:{id:"Angkutan Penumpang",en:"Passenger Transport"},d:{id:"Layanan perjalanan kereta api antarkota dan perkotaan yang dioperasikan KAI.",en:"Intercity and urban railway passenger services operated by KAI."},who:"KAI",url:"https://www.kai.id"},
    {c:"c2",t:{id:"Angkutan Barang",en:"Freight Transport"},d:{id:"Layanan pengangkutan barang dan logistik melalui jaringan kereta api.",en:"Goods and logistics transport through the railway network."},who:"KAI",url:"https://www.kai.id"},
    {c:"c3",t:{id:"Layanan Pariwisata",en:"Tourism Services"},d:{id:"Perjalanan wisata dengan kereta api. [Verifikasi cakupan layanan di situs resmi]",en:"Rail-based tourism travel. [Verify service scope on the official site]"},who:"KAI",url:"https://www.kai.id"},
    {c:"c4",t:{id:"Layanan Pendukung Perkeretaapian",en:"Railway Support Services"},d:{id:"Layanan penunjang operasional perkeretaapian. [ISI DENGAN DATA RESMI TERBARU]",en:"Services supporting railway operations. [FILL WITH LATEST OFFICIAL DATA]"},who:"KAI",url:"https://www.kai.id"},
    {c:"c1",t:{id:"Ekosistem Bisnis Perkeretaapian",en:"Railway Business Ecosystem"},d:{id:"Layanan yang dijalankan anak perusahaan atau entitas lain dalam ekosistem KAI, bukan dioperasikan langsung oleh perusahaan induk. [Daftar anak perusahaan: ISI DENGAN DATA RESMI]",en:"Services run by subsidiaries or other entities in the KAI ecosystem, not directly operated by the parent company. [Subsidiary list: FILL WITH OFFICIAL DATA]"},who:"SUB",url:"https://www.kai.id"}],
  whoLabel:{KAI:{id:"Dioperasikan PT KAI (induk)",en:"Operated by PT KAI (parent)"},SUB:{id:"Anak perusahaan / entitas lain",en:"Subsidiary / other entity"}},
  about:{
    title:{id:"Tentang PT Kereta Api Indonesia (Persero)",en:"About PT Kereta Api Indonesia (Persero)"},
    profile:{id:"PT Kereta Api Indonesia (Persero) adalah BUMN penyelenggara jasa transportasi perkeretaapian di Indonesia. Sejarah perkeretaapian di Indonesia bermula sejak masa kolonial dan berkembang hingga menjadi perusahaan negara modern. Lengkapi profil formal dari publikasi resmi KAI.",en:"PT Kereta Api Indonesia (Persero) is a state-owned enterprise providing railway transport services in Indonesia. Railways in Indonesia date back to the colonial era and developed into a modern state company. Complete the formal profile from official KAI publications."},
    timeline:[
      {y:"1864–1867",t:{id:"Pembangunan jalur kereta api pertama di Hindia Belanda dimulai (1864) dan jalur Semarang–Tanggung dibuka untuk umum (1867).",en:"Construction of the first railway in the Dutch East Indies began (1864) and the Semarang–Tanggung line opened to the public (1867)."}},
      {y:"1945",t:{id:"Setelah kemerdekaan, perkeretaapian diambil alih oleh bangsa Indonesia; tanggal 28 September diperingati sebagai Hari Kereta Api.",en:"After independence, the railways were taken over by Indonesians; 28 September is commemorated as Railway Day."}},
      {y:"[TAHUN]",t:{id:"Perubahan bentuk badan hukum bertahap hingga menjadi PT Kereta Api Indonesia (Persero). [Verifikasi tahun dan tahapan di sumber resmi]",en:"Gradual changes in legal form until becoming PT Kereta Api Indonesia (Persero). [Verify years and stages in official sources]"}},
      {y:"[TAHUN]",t:{id:"[ISI DENGAN DATA RESMI TERBARU] — tonggak perkembangan perusahaan.",en:"[FILL WITH LATEST OFFICIAL DATA] — company development milestones."}}],
    visionT:{id:"Visi",en:"Vision"}, missionT:{id:"Misi",en:"Mission"},
    vision:{id:"[ISI VISI RESMI KAI TERBARU]",en:"[FILL WITH KAI'S LATEST OFFICIAL VISION]"},
    mission:{id:"[ISI MISI RESMI KAI TERBARU]",en:"[FILL WITH KAI'S LATEST OFFICIAL MISSION]"},
    tlT:{id:"Sejarah Singkat",en:"Brief History"}, valT:{id:"Nilai Budaya AKHLAK",en:"AKHLAK Corporate Values"},
    values:[["Amanah",{id:"Memegang teguh kepercayaan yang diberikan",en:"Upholding the trust given"}],["Kompeten",{id:"Terus belajar dan mengembangkan kapabilitas",en:"Continuously learning and developing capability"}],["Harmonis",{id:"Saling peduli dan menghargai perbedaan",en:"Caring for each other and respecting differences"}],["Loyal",{id:"Berdedikasi dan mengutamakan kepentingan bangsa dan negara",en:"Dedicated, putting nation and state first"}],["Adaptif",{id:"Terus berinovasi dan antusias menghadapi perubahan",en:"Innovating and embracing change"}],["Kolaboratif",{id:"Membangun kerja sama yang sinergis",en:"Building synergistic cooperation"}]]
  },
  servicesPage:{t:{id:"Layanan KAI",en:"KAI Services"},note:{id:"Layanan dibedakan antara yang dioperasikan langsung PT KAI dan yang dijalankan anak perusahaan atau entitas lain.",en:"Services are distinguished between those operated directly by PT KAI and those run by subsidiaries or other entities."}},
  info:{
    title:{id:"Informasi dan Berita KAI",en:"KAI Information and News"},
    svcT:{id:"Informasi Layanan",en:"Service Information"}, newsT:{id:"Berita dan Aktivitas Perusahaan",en:"News and Company Activities"},
    svc:[
      {t:{id:"Informasi Perjalanan",en:"Travel Information"},d:{id:"Jadwal dan rute perjalanan melalui kanal resmi KAI.",en:"Schedules and routes via KAI's official channels."}},
      {t:{id:"Informasi Tiket",en:"Ticket Information"},d:{id:"Pemesanan tiket dilakukan melalui kanal resmi KAI (situs ini tidak menjual tiket).",en:"Tickets are booked through KAI's official channels (this site does not sell tickets)."}},
      {t:{id:"Fasilitas Perjalanan",en:"Travel Facilities"},d:{id:"Fasilitas stasiun dan kereta. [ISI DENGAN DATA RESMI]",en:"Station and train facilities. [FILL WITH OFFICIAL DATA]"}},
      {t:{id:"Keselamatan dan Keamanan",en:"Safety and Security"},d:{id:"Panduan keselamatan bagi pelanggan. [ISI DENGAN DATA RESMI]",en:"Safety guidance for passengers. [FILL WITH OFFICIAL DATA]"}},
      {t:{id:"Informasi Pelanggan",en:"Customer Information"},d:{id:"Ketentuan dan layanan pelanggan. [ISI DENGAN DATA RESMI]",en:"Customer terms and services. [FILL WITH OFFICIAL DATA]"}}],
    cats:{corp:{id:"Berita Perusahaan",en:"Company News"},social:{id:"Kegiatan Sosial",en:"Social Activities"},innov:{id:"Inovasi Layanan",en:"Service Innovation"},pub:{id:"Pelayanan Publik",en:"Public Service"},safety:{id:"Kampanye Keselamatan",en:"Safety Campaign"}}
  },
  news:[ // semua contoh = KONTEN SIMULASI
    {c:"c1",date:"[TANGGAL]",cat:"corp",t:{id:"Judul berita perusahaan (contoh)",en:"Company news headline (sample)"},d:{id:"Ringkasan contoh. Ganti dengan berita resmi KAI yang telah diverifikasi.",en:"Sample summary. Replace with verified official KAI news."},url:"https://www.kai.id"},
    {c:"c2",date:"[TANGGAL]",cat:"social",t:{id:"Judul kegiatan sosial (contoh)",en:"Social activity headline (sample)"},d:{id:"Ringkasan contoh kegiatan sosial perusahaan.",en:"Sample summary of a company social activity."},url:"https://www.kai.id"},
    {c:"c3",date:"[TANGGAL]",cat:"innov",t:{id:"Judul inovasi layanan (contoh)",en:"Service innovation headline (sample)"},d:{id:"Ringkasan contoh inovasi layanan.",en:"Sample summary of a service innovation."},url:"https://www.kai.id"},
    {c:"c4",date:"[TANGGAL]",cat:"safety",t:{id:"Judul kampanye keselamatan (contoh)",en:"Safety campaign headline (sample)"},d:{id:"Ringkasan contoh kampanye keselamatan perjalanan.",en:"Sample summary of a travel safety campaign."},url:"https://www.kai.id"},
    {c:"c1",date:"[TANGGAL]",cat:"pub",t:{id:"Judul program pelayanan publik (contoh)",en:"Public service programme headline (sample)"},d:{id:"Ringkasan contoh program pelayanan publik.",en:"Sample summary of a public service programme."},url:"https://www.kai.id"},
    {c:"c3",date:"[TANGGAL]",cat:"corp",t:{id:"Judul berita lain (contoh)",en:"Other news headline (sample)"},d:{id:"Ringkasan contoh berita.",en:"Sample news summary."},url:"https://www.kai.id"}],
  gallery:{
    title:{id:"Galeri KAI",en:"KAI Gallery"}, photoT:{id:"Foto",en:"Photos"}, videoT:{id:"Video",en:"Videos"},
    cats:{train:{id:"Kereta Api",en:"Trains"},station:{id:"Stasiun",en:"Stations"},interior:{id:"Interior Kereta",en:"Train Interior"},facility:{id:"Fasilitas Pelayanan",en:"Service Facilities"},activity:{id:"Aktivitas Perusahaan",en:"Company Activities"}},
    photos:[["train","c1"],["train","c3"],["station","c2"],["station","c1"],["interior","c4"],["interior","c3"],["facility","c2"],["facility","c1"],["activity","c4"],["activity","c3"]],
    vcats:{profile:{id:"Profil Perusahaan",en:"Company Profile"},trip:{id:"Perjalanan Kereta Api",en:"Train Journeys"},facility:{id:"Fasilitas dan Layanan",en:"Facilities & Services"},safety:{id:"Keselamatan Perjalanan",en:"Travel Safety"},activity:{id:"Aktivitas Perusahaan",en:"Company Activities"}},
    // Isi youtubeId dengan ID video resmi terverifikasi, mis. "dQw4w9WgXcQ"
    videos:[["profile",""],["trip",""],["facility",""],["safety",""],["activity",""]]
  },
  org:{title:{id:"Struktur Organisasi",en:"Organizational Structure"},
    note:{id:"Nama pejabat tidak diisi. Ganti placeholder dengan data resmi terbaru.",en:"Officials' names are not filled in. Replace placeholders with the latest official data."},
    kom:{id:"Dewan Komisaris",en:"Board of Commissioners"},dir:{id:"Direksi",en:"Board of Directors"},du:{id:"Direktur Utama",en:"President Director"},
    units:[{id:"Direktorat / Unit Kerja 1",en:"Directorate / Unit 1"},{id:"Direktorat / Unit Kerja 2",en:"Directorate / Unit 2"},{id:"Direktorat / Unit Kerja 3",en:"Directorate / Unit 3"},{id:"Direktorat / Unit Kerja 4",en:"Directorate / Unit 4"}],
    sek:{id:"Sekretaris Perusahaan",en:"Corporate Secretary"}, name:{id:"[NAMA PEJABAT]",en:"[OFFICIAL'S NAME]"}},
  contact:{title:{id:"Hubungi KAI",en:"Contact KAI"},
    addr:{l:{id:"Alamat Kantor Pusat",en:"Head Office Address"},v:"[ISI ALAMAT RESMI TERVERIFIKASI]"},
    cc:{l:{id:"Contact Center",en:"Contact Center"},v:"[ISI NOMOR RESMI]"},
    mail:{l:{id:"Email Layanan Pelanggan",en:"Customer Service Email"},v:"[ISI EMAIL RESMI]"},
    web:{l:{id:"Website Resmi",en:"Official Website"},v:"https://www.kai.id"},
    soc:{l:{id:"Media Sosial Resmi",en:"Official Social Media"},v:"[ISI AKUN RESMI]"},
    visit:{id:"Kunjungi Website Resmi KAI",en:"Visit KAI's Official Website"},call:{id:"Hubungi Layanan Pelanggan",en:"Contact Customer Service"},
    callUrl:"https://www.kai.id" /* ganti dengan kanal layanan pelanggan resmi (mis. tel:xxx) */}
};

