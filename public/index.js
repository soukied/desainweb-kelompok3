require("./index.css");
var $gQ132$reactjsxruntime = require("react/jsx-runtime");
var $gQ132$react = require("react");
var $gQ132$reactdom = require("react-dom");
var $gQ132$reactrouterdom = require("react-router-dom");
var $gQ132$history = require("history");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "history", () => $3974aaf50579c14d$export$55abd4691b317664);









var $a0e12040c556d430$export$2e2bcd8739ae039 = ({ lambang: lambang , to: to , history: history , children: children  })=>{
    const [value, setValue] = $gQ132$react.useState("");
    $gQ132$react.useEffect(()=>{
        document.title = children ? `${children} | Borneo Culture Wiki` : "Borneo Culture Wiki";
    }, []);
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
        className: "header",
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                src: lambang ? lambang : "/Borneo.png",
                width: "80",
                alt: ""
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("h1", {
                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactrouterdom.Link, {
                    style: {
                        color: "black",
                        textDecoration: "transparent",
                        fontSize: "30px"
                    },
                    to: to ? to : '/',
                    children: [
                        " ",
                        children,
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("input", {
                onChange: (ev)=>{
                    setValue(ev.target.value);
                },
                id: "query-search",
                onKeyPress: (ev)=>{
                    if (ev.key == "Enter") history.push("/search/" + value);
                },
                placeholder: "Pencarian...",
                type: "search"
            })
        ]
    }));
};







function $d0a12117293751cc$export$2e2bcd8739ae039() {
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("p", {
            children: "This is footer"
        })
    }));
}


var $c9217a5249f56e5c$export$2e2bcd8739ae039 = ({ history: history  })=>{
    const [provinsi, setProvinsi] = $gQ132$react.useState([
        {
            url: "kalimantan-timur",
            nama: "Kalimantan Timur"
        },
        {
            url: "kalimantan-utara",
            nama: "Kalimantan Utara"
        },
        {
            url: "kalimantan-barat",
            nama: "Kalimantan Barat"
        },
        {
            url: "kalimantan-selatan",
            nama: "Kalimantan Selatan"
        },
        {
            url: "kalimantan-tengah",
            nama: "Kalimantan Tengah"
        }, 
    ]);
    $gQ132$react.useEffect(()=>{
        document.title = "Borneo Culture Wiki";
    }, []);
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($a0e12040c556d430$export$2e2bcd8739ae039, {
                history: history,
                children: "Borneo Culture Wiki"
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                className: "banner",
                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                    src: "/images/kalimantan.png",
                    alt: "Peta Kalimantan"
                })
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                className: "conten",
                style: {
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("ul", {
                    children: [
                        /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                            children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Link, {
                                to: "/about",
                                children: "About"
                            })
                        }),
                        provinsi.map((val)=>/*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Link, {
                                    to: `/provinsi/${val.url}`,
                                    children: val.nama
                                })
                            }, val.url)
                        )
                    ]
                })
            })
        ]
    }));
};







var $162bfd2a803ede34$exports = {};
$162bfd2a803ede34$exports = JSON.parse("{\"judul\":\"Baju Adat Kalimantan Barat\",\"gambar\":\"https://sintesakonveksi.com/info/wp-content/uploads/2021/03/Nama-Pakaian-Adat-Kalimantan-Barat.jpg\",\"paragraf\":\"Pakaian adat King Baba berbentuk seperti rompi yang menggunakan kain khas terbuat dari kulit kayu kapuo serta dihiasi manik-manik berwarna jingga dan merah. Sedangkan untuk pakaian adat perempuan King Bibinge terbuat dari bahan yang sama tapi menutupi hingga bagian dada dan pundak. Dikutip dari buku Pakaian Adat Tradisional Daerah Provinsi Kalimantan Barat (1990), pakaian adat laki-laki disebut King Baba dan untuk perempuan disebut King Bibinge. Pengertian King pada King Baba dimaksudkan adalah cawat, sementara King pada King Bibinge artinya hampir sama dengan pengertian rok. Pakaian adat tersebut terbuat dari kulit kayu yaitu kayu gantiingan dan kayu talong.\",\"kembali\":\"/provinsi/kalimantan-barat.html\"}");


var $3afbe8506a34c4b7$exports = {};
$3afbe8506a34c4b7$exports = JSON.parse("{\"judul\":\"Rumah Adat Kalimantan Barat\",\"gambar\":\"https://pariwisataindonesia.id/wp-content/uploads/2020/06/Rumah-adat-Panjang-foto-budayaindonesiaaa.wordpress.com_.jpg\",\"paragraf\":\"Rumah Panjang (rumah Radank) adalah salah satu rumah adat dari daerah Kalimantan Barat. Rumah Panjang adalah ciri khas dari masyarakat Dayak yang tinggal di daerah Kalimantan Barat. Hal ini dikarenakan rumah panjang adalah gambaran sosial kehidupan masyarakat Dayak di Kalimantan Barat. Rumah panjang juga merupakan pusat kehidupan dari masyarakat Dayak. Rumah Radakng, berdiri di jalan di komplek perkampungan budaya di Jl Sutan Syahrir Kota Baru Pontianak, menjadi rumah adat terbesar yang ada di Indonesia serta menjadi landmark kota Pontianak selain Tugu Khatulistiwa.\",\"kembali\":\"/provinsi/kalimantan-barat.html\"}");


var $64e5b28e53b40d82$exports = {};
$64e5b28e53b40d82$exports = JSON.parse("{\"judul\":\"Tarian Adat Kalimantan Barat\",\"gambar\":\"https://backpackerjakarta.com/wp-content/uploads/2017/04/tari-monong-kalimantan-barat-1.jpg\",\"paragraf\":\"Tari Monong ialah salah satu Tarian di Kalimantan Barat yang bertujuan untuk pengobatan penyakit bagi salah satu warga dari Suku Dayak agar memperoleh kesembuhan. Dahulunya, tarian ini dilakukan khusus oleh dukun atau sesepuh yang dituakan di Suku Dayak dengan tari sambil membaca mantra-mantra tertentu. Dalam pelaksanaannya, keluarga dari penderita yang sedang sakit harus hadir dalam prosesi pembacaan mantra tolak bala penyakit tersebut dan mengikutinya. Dengan diiringi beberpa alat musik tradisional, jampi-jampi diiringi tarian sengaja dikukuhkan kepada Sang Pencipta untuk mendapatkan kesembuhan penyakit dari si penderita.\",\"kembali\":\"/provinsi/kalimantan-barat.html\"}");


var $df5da5498f57c430$exports = {};
$df5da5498f57c430$exports = JSON.parse("{\"judul\":\"Baju Adat Kalimantan Timur\",\"gambar\":\"https://guratgarut.com/wp-content/uploads/2020/02/Tari-Gantar-Kalimantan-Timur-1200x900-1.jpg\",\"paragraf\":[\" Pakaian adat Kalimantan Timur ini terdiri dari tiga ragam yaitu baju takwo biasa, takwo kustim dan takwo sebelah. Busana takwo laki-laki disebut baju takwo laki, dan untuk perempuan dinamakan baju takwo bini. Baju takwo laki berbentuk jas tutup berkerah tinggi. Suku Dayak Kenyah mempunyai busana adat yang disebut dengan busana sapei sapaq untuk kaum pria dan busana ta’a untuk kaum wanita. Pada kaum wanita busana ta’a terdiri dari semacam ikat kepala yang disebut da’a yang terbuat dari pandan. Baju atasan ini disebut dengan sapei inoq serta bawahan yang disebut ta’a yang berupa rok. Pada kaum pria, busana yang digunakan tidak jauh berbeda coraknya dengan busana kaum wanita. Hanya pada bagian atasan baju sapei sapaq dibuat berbentuk rompi yang ditambah dengan paduan busana bahawan berupa cawat yang diberi nama abet kaboq. Bawahan tersebut semacam celana pendek yang ditambah aksesoris berupa mandau yang diikat di pinggang.\"],\"kembali\":\"/provinsi/kalimantan-timur.html\"}");


var $ee6c9ed6fbeb7490$exports = {};
$ee6c9ed6fbeb7490$exports = JSON.parse("{\"judul\":\"Rumah Adat Kalimantan Timur\",\"gambar\":\"https://cdn-cms.pgimgs.com/static/2019/10/9-Ciri-Khas-Rumah-Adat-Kalimantan-Timur.png\",\"paragraf\":\"Rumah adat Lamin merupakan sebutan rumah adat suku Dayak dari etnis Benuaq di Kalimantan Timur. Sama halnya rumah adat suku Dayak di Kalimantan lainnya, rumah adat Lamin juga berbentuk panggung dengan memiliki panjang sekitar 300 meter, lebar 15 meter, dan tinggi mencapai 3 meter. Rumah Lamin biasa dihuni oleh 25 hingga 30 kepala keluarga atau bisa menampung sekitar 100 orang. Rumah Lamin dibuat dengan menggunakan kayu ulin.\",\"kembali\":\"/provinsi/kalimantan-timur.html\"}");


var $15d306a762fd5891$exports = {};
$15d306a762fd5891$exports = JSON.parse("{\"judul\":\"Tarian Adat Kalimantan Timur\",\"gambar\":\"https://i1.wp.com/www.silontong.com/wp-content/uploads/2018/09/Info-terkait-tentang-Tari-Burung-Enggang-dari-Kalimantan-Timur-yang-unik.jpg?w=549&ssl=1\",\"paragraf\":[\"Tarian Burung Enggang atau Tari Enggang adalah tarian khas suku Dayak Kenyah dari daerah Kalimantan Timur. Pada pementasannya, tarian ini diperankan oleh sekelompok gadis suku dayak dengan mengenakan hiasan dikepala bermotif burung Enggang. Tarian ini menjadi tarian wajib, dan selalu ditarikan oleh masyarakat setempat.<br>\",\"Menurut kepercayaan yang berkembang di orang Dayak Kenyah bahwa nenek moyang mereka berasal dari langit dan turun ke bumi menyerupai burung Enggang. Sebab itu, masyarakat dayak Kenyah sangat menghormati dan memuliakan burung Enggang. Tari Enggang dapat dimaknakan sebagai penghormatan Suku Dayak Kenyah terhadap asal usul dan sejarah leluhur mereka. Bulu-bulu Burung Enggang ini selalu memegang peranan yang penting pada setiap upacara – upacara adat dan tarian-tarian adat dan juga bentuk – bentuk Burung Enggang banyak terdapat pada ukiran-ukiran suku Dayak Kenyah.\"],\"kembali\":\"/provinsi/kalimantan-timur.html\"}");


var $d44ef9579b8a3890$exports = {};
$d44ef9579b8a3890$exports = JSON.parse("{\"judul\":\"Baju Adat Kalimantan Tengah\",\"gambar\":\"https://www.selasar.com/wp-content/uploads/2020/08/Pakaian-Adat-Kalimantan-Tengah.jpeg\",\"paragraf\":\"Adapun pakaian adat Kalimantan Tengah memiliki nama dan bentuk yang khas. Material pembuatnya pun masih sangat tradisional dan beberapa bersumber dari alam. Baju Berantai merupakan baju dari Dayak Ngaju yang menurut penelitian merupakan pakaian untuk zirah. Terbuat dari besi menunjukkan jika baju ini digunakan untuk aktivitas seperti perang. Besi bersi tersebut dalam bentuk potongan yang kemudian dirangkai hingga menjadi baju. Baju ini diperkirakan menjadi pakaian yang telah dipengaruhi oleh budaya dari luar. Dalam hal ini yang paling diutamakan adalah pengaruh budaya dari suku Moro Filiphina.\",\"kembali\":\"/provinsi/kalimantan-tengah.html\"}");


var $0ddbee0d42394729$exports = {};
$0ddbee0d42394729$exports = JSON.parse("{\"judul\":\"Rumah Adat Kalimantan Tengah\",\"gambar\":\"https://pariwisataindonesia.id/wp-content/uploads/2020/06/Rumah-Adat-Betang-foto-youtube.com_.jpg\",\"paragraf\":\"Kalimantan Tengah sendiri termasuk ke dalam salah satu daerah yang mempunyai pemandangan yang indah, lengkap dengan suku dan budayanya yang menarik untuk dipelajari. Rumah Adat Betang Sei Pasah ini diambil namanya dari desa tepat terletaknya rumah adat ini. Yakni berada di Desa Sei Pasah, Kapuas Hilir,Kalimantan Tengah. Rumah ini sebenarnya merupakan rumah lama yang telah mengalami pemugaran kembali. Karena bangunan lamanya sudah lapuk dan hanya menyisakan tiangnaya saja. Dimana sebelumnya rumah tradisional ini merupakan miliki Talining E Toepak yang mengalami keterbatasan bahan baku. Rumah Betang merupakan rumah adat Kalimantan yang terdapat di berbagai belahan Kalimantan dan dihuni oleh masyarakat Dayak terutama sekitar daerah hulu sungai yang biasanya menjadi pusat pemukiman suku Dayak.\",\"kembali\":\"/provinsi/kalimantan-tengah.html\"}");


var $ae7c97c4d08a3f51$exports = {};
$ae7c97c4d08a3f51$exports = JSON.parse("{\"judul\":\"Tarian Adat Kalimantan Tengah\",\"gambar\":\"https://i2.wp.com/budayalokal.id/wp-content/uploads/2018/09/tari-kinyah-mandau.png?w=500&ssl=1\",\"paragraf\":\"Tarian Kalimantan Tengah pertama yang akan kami ulas adalah tari kinyah mandau yang memiliki ciri khas unsur bela diri, seni teatrikal dan seni perang dalam tariannya. Nama tarian ini diambil dari kata kinyah yang berarti tarian perang dengan menggunakan senjata mandau. Dulunya, tarian adat Kalimantan Tengah ini digunakan dalam persiapan membunuh dan memburu kepala musuh. Para pemuda Dayak dulu memang berburu kepala dengan banyak alasan berbeda untuk setiap sub suku. Tarian kinyah ini digunakan sebagai persiapan fisik sebelum perburuan akan dimulai.\",\"kembali\":\"/provinsi/kalimantan-tengah.html\"}");


var $73947940a1a57347$exports = {};
$73947940a1a57347$exports = JSON.parse("{\"judul\":\"Baju Adat Kalimantan Utara\",\"gambar\":\"https://asset.kompas.com/crops/MRXqL0nDt31tKqrP3OR4B-W4jvM=/1x8:483x329/750x500/data/photo/2021/02/26/6038b0664992e.jpg\",\"paragraf\":[\"Pakaian adat Kalimantan Utara bernama Ta’ a dan Sapei Sapaq. Pakaian Ta’a merupakan pakaian adat yang khusus dikenakan oleh kaum wanita Dayak di Kalimantan Utara. Pakaian ini terbuat dari kain beludru berwarna hitam dengan pernik atau hiasan berupa manik-manik yang dijahit.\",\"Baju Ta’a terdiri dari: \",\"<ol>\",\"<li>Atasan dengan model menyerupai rompi (tanpa lengan),</li>\",\"<li>Bagian bawah berupa rok dengan warna dan motif yang sama,</li>\",\"<li>Serta penutup kepala berhias bulu burung enggang, dan aksesoris lainnya seperti gelang, kalung, dan manik-manik.</li>\",\"</ol>\",\"Motif hiasan rompi dan rok Ta’a kental dengan campuran warna-warna mencolok seperti putih, hijau, biru, merah, dan warna kontras lainnya. Di bagian dada dan lengannya dilengkapi rumbai-rumbai dengan warna motif yang sama dengan rompi.\",\"Perbedaan antara pakaian Sapei Sapaq dan Ta’a terletak pada motifnya. Untuk motif pakaian adat Kalimantan Utara, baik pada baju Ta’a maupun Sapei Sapaq sebenarnya terbagi menjadi 3, yaitu:\",\"<ol>\",\"<li>Motif burung enggang,</li>\",\"<li>Motif harimau atau hewan lainnya,</li>\",\"<li>Serta motif tumbuhan.</li>\",\"</ol>\",\"Baju dengan motif burung enggang dan harimau biasanya diperuntukkan bagi para Bangsawan, sementara baju dengan motif tumbuhan diperuntukkan bagi rakyat biasa.\"],\"kembali\":\"/provinsi/kalimantan-utara.html\"}");


var $79beed5276efbd31$exports = {};
$79beed5276efbd31$exports = JSON.parse("{\"judul\":\"Rumah Adat Kalimantan Utara\",\"gambar\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Baloy_Mayo_Adat_Tidung_%282%29.JPG/800px-Baloy_Mayo_Adat_Tidung_%282%29.JPG\",\"paragraf\":[\"Rumah Baloy merupakan rumah adat Provinsi Kalimantan Utara yang berbahan dasar kayu ulin. Bentuk bangunan rumah adat ini terlihat lebih modern karena merupakan hasil pengembangan arsitektur Dayak dari Rumah adat Kalimantan Timur yaitu Rumah Lamin yang dibuat oleh Masyarakat suku Tidung yang tidak lain adalah suku di Kalimantan Utara. Rumah adat Baloy ini tidak digunakan sebagai tempat tinggal sebagaimana rumah adat Lamin digunakan melainkan sebagai berikut:\",\"<ol>\",\"<li>Tempat untuk melaksanakan kegiatan adat.</li>\",\"<li>Digunakan sebagai tempat tinggal kepala adat</li>\",\"<li>Tepat pertemuan dan musyarawah permasalahan yang berkaitan dengan adat</li>\",\"<li>Tempat menampilkan kesenian suku Tidung</li>\",\"</ol>\",\"Rumah adat Baloy memiliki ciri khas yakni terdapat ukiran laut pada risplang. Ukiran ini berupa kekayaan flora fauna yang berhubungan dengan daerah pesisir, seperti pohon kelapa dan ikan laut. Rumah adat Baloy memiliki filosofi dari tiap-tiap bagiannya diantaranya:\",\"<ol>\",\"<li>Atap Rumah Baloy menggambarkan bahwa masyarakat Suku Tidung adalah masyarakat yang mata pencahariannya adalah nelayan dan pelaut.</li>\",\"<li>Beberapa ruangan dalam Rumah Baloy memiliki fungsi yang berkaitan dengan kehidupan sosial masyaraatnya.</li>\",\"<li>Suku Tidung merupakan masyarakat yang mengutamakan musyawarah dan cinta damai.</li>\",\"</ol>\"],\"kembali\":\"/provinsi/kalimantan-utara.html\"}");


var $f436642c024f85be$exports = {};
$f436642c024f85be$exports = JSON.parse("{\"judul\":\"Tarian Adat Kalimantan Utara\",\"gambar\":\"https://cdn.statically.io/img/takterlihat.com/f=auto/wp-content/uploads/2020/04/Tarik-Blunde-696x357.jpeg\",\"paragraf\":\"Tari Magunatip atau dikenal juga dengan nama Tari Lalatip merupakan tari adat Kalimantan Utara yang berasal dari daerah Tarakan dan Malinau. Tarian adat ini sangat mendebarkan karena penari bisa terjepit atau terapit kakinya oleh batang kayu bila terlambat menghindar apalagi ketika penari menari dengan ditutup kedua matanya.\",\"kembali\":\"/provinsi/kalimantan-utara.html\"}");


var $f1fa979f917cc2e7$exports = {};
$f1fa979f917cc2e7$exports = JSON.parse("{\"judul\":\"Baju Adat Kalimantan Selatan\",\"gambar\":\"https://i0.wp.com/tambahpinter.com/wp-content/uploads/2020/09/Bagajah-Gamuling-Baulur-Lulut.jpg\",\"paragraf\":\"Bagajah Gamuling Baular Lulut merupakan pakaian pengantin Banjar pertama yang dipengaruhi budaya Hindu. Hal ini terlihat dari bentuk busana yang terbuka pada bagian dada. Ciri khas dari pengantin Bagajah Gamuling Baular Lulut yaitu menggunakan mahkota Bagajah Gamuling Baular Lulut yang terbuat dari lingkaran logam bundar.\",\"kembali\":\"/provinsi/kalimantan-selatan.html\"}");


var $bbd64dba3f40877b$exports = {};
$bbd64dba3f40877b$exports = JSON.parse("{\"judul\":\"Rumah Adat Kalimantan Selatan\",\"gambar\":\"https://www.getborneo.com/wp-content/uploads/2015/06/rumah-adat-kalimantan-selatan.jpg\",\"paragraf\":\"Rumah Bubungan Tinggi atau Rumah Cacak Burung adalah salah satu jenis rumah Baanjung yaitu rumah tradisional suku Banjar di Kalimantan Selatan dan bisa dibilang merupakan ikonnya Rumah Banjar karena jenis rumah inilah yang paling terkenal karena menjadi maskot rumah adat khas provinsi Kalimantan Selatan. rumah adat Kalimantan Selatan memiliki banyak bentuk yang beda-beda dan wajib Anda ketahui. Suasana tradisional di rumah adat ini memiliki keunikan, sehingga membuat Indonesia semakin kaya akan keberagaman nya. Seperti yang kita ketahui, setiap daerah di Indonesia memiliki pesona alam dan berbeda satu sama lain.\",\"kembali\":\"/provinsi/kalimantan-selatan.html\"}");


var $e884708dc2a85f67$exports = {};
$e884708dc2a85f67$exports = JSON.parse("{\"judul\":\"Tarian Adat Kalimantan Selatann\",\"gambar\":\"https://cdn.statically.io/img/takterlihat.com/f=auto/wp-content/uploads/2020/04/Tari-Baksa-Kambang-1.jpeg\",\"paragraf\":\"Tarian Baksa Kambang merupakan salah satu jenis tari tradisional khas Suku Banjar yang biasa dipertunjukan dan dipentaskan untuk menyambut tamu-tamu besar dan terhormat di Kalimantan Selatan. Kata “Baksa” sendiri memiliki makna dan arti berupa kelembutan sehingga menjadi filosofi bentuk kelembutan tuan rumah terhadap para tamunya.\",\"kembali\":\"/provinsi/kalimantan-selatan.html\"}");


var $113379cf53c285a8$export$2e2bcd8739ae039 = {
    'kalimantan-barat': {
        'title': "Kalimantan Barat",
        'cover': '/images/cover-kalbar.jpg',
        'logo': '/images/lambang-kalbar.png',
        'baju-adat': (/*@__PURE__*/$parcel$interopDefault($162bfd2a803ede34$exports)),
        'rumah-adat': (/*@__PURE__*/$parcel$interopDefault($3afbe8506a34c4b7$exports)),
        'tari-adat': (/*@__PURE__*/$parcel$interopDefault($64e5b28e53b40d82$exports))
    },
    'kalimantan-timur': {
        'title': "Kalimantan Timur",
        'cover': '/images/cover-kaltim.jpg',
        'logo': '/images/lambang-kaltim.png',
        'baju-adat': (/*@__PURE__*/$parcel$interopDefault($df5da5498f57c430$exports)),
        'rumah-adat': (/*@__PURE__*/$parcel$interopDefault($ee6c9ed6fbeb7490$exports)),
        'tari-adat': (/*@__PURE__*/$parcel$interopDefault($15d306a762fd5891$exports))
    },
    'kalimantan-tengah': {
        'title': "Kalimantan Tengah",
        'cover': '/images/cover-kalteng.jpg',
        'logo': '/images/lambang-kalteng.png',
        'baju-adat': (/*@__PURE__*/$parcel$interopDefault($d44ef9579b8a3890$exports)),
        'rumah-adat': (/*@__PURE__*/$parcel$interopDefault($0ddbee0d42394729$exports)),
        'tari-adat': (/*@__PURE__*/$parcel$interopDefault($ae7c97c4d08a3f51$exports))
    },
    'kalimantan-selatan': {
        'title': "Kalimantan Selatan",
        'cover': '/images/cover-kalsel.jpg',
        'logo': '/images/lambang-kalsel.png',
        'baju-adat': (/*@__PURE__*/$parcel$interopDefault($f1fa979f917cc2e7$exports)),
        'rumah-adat': (/*@__PURE__*/$parcel$interopDefault($bbd64dba3f40877b$exports)),
        'tari-adat': (/*@__PURE__*/$parcel$interopDefault($e884708dc2a85f67$exports))
    },
    'kalimantan-utara': {
        'title': "Kalimantan Utara",
        'cover': '/images/cover-kaltara.jpg',
        'logo': '/images/lambang-kaltara.png',
        'baju-adat': (/*@__PURE__*/$parcel$interopDefault($73947940a1a57347$exports)),
        'rumah-adat': (/*@__PURE__*/$parcel$interopDefault($79beed5276efbd31$exports)),
        'tari-adat': (/*@__PURE__*/$parcel$interopDefault($f436642c024f85be$exports))
    }
};



function $1dab9eb4d36d62f1$export$2e2bcd8739ae039(props) {
    const { prov: prov  } = $gQ132$reactrouterdom.useParams();
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($a0e12040c556d430$export$2e2bcd8739ae039, {
                lambang: $113379cf53c285a8$export$2e2bcd8739ae039[prov]['logo'],
                history: props.history,
                children: 'Provinsi ' + $113379cf53c285a8$export$2e2bcd8739ae039[prov]['title']
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                style: {
                    marginTop: 0
                },
                className: "conten",
                children: [
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                            className: "foto",
                            style: {
                                marginTop: 0
                            },
                            src: $113379cf53c285a8$export$2e2bcd8739ae039[prov]['cover']
                        })
                    }),
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("ul", {
                        className: "navigasi",
                        children: [
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Link, {
                                    to: `/budaya/baju-adat-${prov}`,
                                    children: "Baju Adat"
                                })
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Link, {
                                    to: `/budaya/tari-adat-${prov}`,
                                    children: "Tari Adat"
                                })
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Link, {
                                    to: `/budaya/rumah-adat-${prov}`,
                                    children: "Rumah Adat"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("br", {
                    })
                ]
            })
        ]
    }));
}









function $45bbf20de5fc455d$var$getBudaya(name) {
    for (let prov of [
        'timur',
        'barat',
        'tengah',
        'utara',
        'selatan'
    ]){
        for (let type of [
            'baju',
            'rumah',
            'tari'
        ])if (name == `${type}-adat-kalimantan-${prov}`) {
            let provData = $113379cf53c285a8$export$2e2bcd8739ae039[`kalimantan-${prov}`];
            return {
                back: `/provinsi/kalimantan-${prov}`,
                logo: provData.logo,
                title: provData.title,
                content: provData[`${type}-adat`]
            };
        }
    }
}
function $45bbf20de5fc455d$export$2e2bcd8739ae039({ history: history  }) {
    const { nama: nama  } = $gQ132$reactrouterdom.useParams();
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($a0e12040c556d430$export$2e2bcd8739ae039, {
                to: $45bbf20de5fc455d$var$getBudaya(nama).back,
                lambang: $45bbf20de5fc455d$var$getBudaya(nama).logo,
                history: history,
                children: $45bbf20de5fc455d$var$getBudaya(nama).title
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("h1", {
                className: "title",
                children: [
                    " ",
                    $45bbf20de5fc455d$var$getBudaya(nama).content.judul,
                    " "
                ]
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                        className: "banner",
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                            src: $45bbf20de5fc455d$var$getBudaya(nama).content.gambar,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: $45bbf20de5fc455d$var$getBudaya(nama).content.paragraf
                        }
                    })
                ]
            })
        ]
    }));
}







function $22697a5b66795d9e$export$2e2bcd8739ae039(props) {
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($a0e12040c556d430$export$2e2bcd8739ae039, {
                history: props.history,
                children: "About"
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                className: "logoabout",
                src: "Borneo.png"
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                className: "isi",
                children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("p", {
                    children: "Borneo Culture Wiki merupakan projek yang dikerjakan oleh kelompok 3 untuk memenuhi tugas besar mata kuliah Desain Web. Borneo Culture Wiki menjelaskan wilayah Kalimantan yang merupakan sebuah pulau di Indonesia yang belum banyak dijelajahi oleh wisatawan namun memiliki banyak keunikan dan daya tarik termasuk juga kaya dengan warisan budaya. Pulau Kalimantan terkenal dengan hutan tropis serta memiliki sumber daya alam yang terbanyak di Indonesia. Flora dan fauna eksotis juga ditawarkan oleh bumi Kalimantan. Saat ini Kalimantan terbagi menjadi 5 provinsi yaitu Kalimantan Timur, Kalimantan Selatan, Kalimantan Tengah, kalimantan utara dan juga Kalimantan Barat. Masing masing provinsi memiliki ciri khas, rumah adat, tarian adat, baju adat, dan keunikannya sendiri-sendiri."
                })
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                className: "kelompok",
                children: [
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("h3", {
                        children: "Anggota Kelompok 3 :"
                    }),
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("ul", {
                        children: [
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Adhya Adam Sulthan"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Dewi Anjani"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Dilfa Amalia GF"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Fitriani"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Jamaluddin Al-Afgani"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("li", {
                                children: "Nirvana dede Aditiya"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}










function $a3d3d74547290cff$var$queryData(query) {
    let ret = [];
    [
        'timur',
        'selatan',
        'barat',
        'tengah',
        'utara'
    ].forEach((p)=>{
        [
            'baju',
            'tari',
            'rumah'
        ].forEach((b)=>{
            let qData = $113379cf53c285a8$export$2e2bcd8739ae039[`kalimantan-${p}`][`${b}-adat`];
            // console.log(qData);
            if (qData.judul.toLowerCase().includes(query)) ret.push({
                ...qData,
                url: `/budaya/${b}-adat-kalimantan-${p}`
            });
            else if (qData.paragraf instanceof Array) {
                for (let text of qData.paragraf)if (text.toLowerCase().includes(query)) {
                    ret.push({
                        ...qData,
                        url: `/budaya/${b}-adat-kalimantan-${p}`
                    });
                    break;
                }
            } else if (typeof qData.paragraf == "string" && qData.paragraf.toLowerCase().includes(query)) ret.push({
                ...qData,
                url: `/budaya/${b}-adat-kalimantan-${p}`
            });
        });
    });
    return ret;
}
function $a3d3d74547290cff$export$2e2bcd8739ae039(props) {
    const { query: query  } = $gQ132$reactrouterdom.useParams();
    const [pencarian, setPencarian] = $gQ132$react.useState(query);
    const [val, setVal] = $gQ132$react.useState([]);
    const [count, setCount] = $gQ132$react.useState(0);
    $gQ132$react.useEffect(()=>{
        setVal($a3d3d74547290cff$var$queryData(query.toLowerCase()));
    }, [
        val
    ]);
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($a0e12040c556d430$export$2e2bcd8739ae039, {
                history: props.history,
                children: `Pencarian '${query}'`
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("h3", {
                        onClick: ()=>{
                            console.log(val);
                        },
                        children: [
                            " ",
                            val.length > 0 ? `${val.length} hasil pencarian` : "Pencarian tidak ditemukan"
                        ]
                    }),
                    [
                        ...val
                    ].map((item)=>{
                        return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactrouterdom.Link, {
                                    to: item.url,
                                    style: {
                                        display: 'block'
                                    },
                                    children: [
                                        " ",
                                        item.judul,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("img", {
                                    src: item.gambar,
                                    style: {
                                        height: '50px',
                                        display: 'block'
                                    },
                                    alt: ""
                                })
                            ]
                        }));
                    })
                ]
            })
        ]
    }));
}





function $bb6fd262011d26be$export$2e2bcd8739ae039(props) {
    return(/*#__PURE__*/ $gQ132$reactjsxruntime.jsxs($gQ132$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("div", {
                className: "overlay"
            }),
            /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("form", {
                action: "login.html",
                method: "post",
                className: "box",
                children: [
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("h4", {
                                children: "Login To Your Account"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("p", {
                                children: "Silahkan Mengisi Username dan Password terlebih dahulu sebelum mengunjungi webiste kami"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
                        className: "login-area",
                        children: [
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("input", {
                                type: "text",
                                className: "username",
                                placeholder: "Username"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("input", {
                                type: "password",
                                className: "password",
                                placeholder: "Password"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("input", {
                                type: "submit",
                                value: "Login",
                                className: "submit"
                            }),
                            /*#__PURE__*/ $gQ132$reactjsxruntime.jsx("a", {
                                href: "0",
                                style: {
                                    color: 'black'
                                },
                                children: "Lupa Sandi"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}




const $3974aaf50579c14d$export$55abd4691b317664 = $gQ132$history.createBrowserHistory();
let $3974aaf50579c14d$var$Main = ()=>/*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.BrowserRouter, {
        children: /*#__PURE__*/ $gQ132$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/",
                    component: $c9217a5249f56e5c$export$2e2bcd8739ae039
                }),
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/provinsi/:prov",
                    component: $1dab9eb4d36d62f1$export$2e2bcd8739ae039
                }),
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/budaya/:nama",
                    component: $45bbf20de5fc455d$export$2e2bcd8739ae039
                }),
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/about",
                    component: $22697a5b66795d9e$export$2e2bcd8739ae039
                }),
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/search/:query",
                    component: $a3d3d74547290cff$export$2e2bcd8739ae039
                }),
                /*#__PURE__*/ $gQ132$reactjsxruntime.jsx($gQ132$reactrouterdom.Route, {
                    exact: true,
                    path: "/login",
                    component: $bb6fd262011d26be$export$2e2bcd8739ae039
                })
            ]
        })
    })
;
($parcel$interopDefault($gQ132$reactdom)).render(/*#__PURE__*/ $gQ132$reactjsxruntime.jsx($3974aaf50579c14d$var$Main, {
}), document.querySelector("#main"));


//# sourceMappingURL=index.js.map
