function updateNewAnchor() {
    let allAnchor = document.querySelectorAll("a[tujuan]");
    allAnchor.forEach((el, key, parent) => {
        el.addEventListener("click", e => changeDoc(el.getAttribute("tujuan")))
        el.href = "#";
    });
}

async function changeDoc(url) {
    let data = await fetch(url);
    let text = await data.text();
    document.body.innerHTML = text;
    updateNewAnchor();
}

addEventListener("load", ()=> updateNewAnchor());