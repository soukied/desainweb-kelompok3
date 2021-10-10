let querySearch = (_ => {

    async function getSearch(search) {
        // Mengubah string pencarian menjadi array string
        let res = [];
        while (search.indexOf("  ") != -1) {
            search = search.replaceAll("  ", ' ');
        }
        search = search.split(' ');
        // ALgoritma Pencarian Simpel
        for (let prov of ["kalbar", "kalteng", "kaltim", "kaltara", "kalsel"]) {
            for (let url of [`/data/${prov}/tari-adat.json`, `/data/${prov}/baju-adat.json`, `/data/${prov}/rumah-adat.json`]) {
                let data = await (await fetch(url)).json();
                data.url = url;
                for (let query of search) {
                    if (data.judul.toLowerCase().indexOf(query) != -1) {
                        res.push(data);
                        continue;
                    } else if (typeof data.paragraf == "string" && data.paragraf.toLowerCase().indexOf(query) != -1) {
                        res.push(data);
                        continue
                    } else if (data.paragraf instanceof Array) {
                        let isFound = false;
                        data.paragraf.forEach((val) => {
                            if (val.toLowerCase().indexOf(query) != -1 && !isFound) isFound = true;
                        });
                        if (isFound) res.push(data);
                    }
                }
            }
        }
        // Mengembakikan nilai string berformat HTML
        return res.length > 1 ? res.map((val) => {
            return (
                `<div class="container">
                    <a tujuan="/budaya.html" style="display:block" data-template="${val.url}">${val.judul}</a>
                    <img src="${val.gambar}" style="height:50px;display:block" alt="${val.judul}">
                </div>`
            );
        }).join('') : "Pencarian tidak ditemukan";
    }
    // Mengembalikan nilai
    return async function (event) {
        if (event.key != "Enter") return;
        let el = document.querySelector("#query-search");
        let data = {
            query: el.value,
            results: await getSearch(el.value.toLowerCase())
        }
        changeDoc("/search.html", data);
    }

})();