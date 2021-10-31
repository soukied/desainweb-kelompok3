function updateNewAnchor() {
    let allAnchor = document.querySelectorAll("a[tujuan]");
    allAnchor.forEach(async (el, key, parent) => {
        let dataURL = el.getAttribute("data-template");
        let dataJSON;
        if (typeof dataURL == "string" && dataURL.trim().length > 0) {
            dataJSON = await (await fetch(dataURL)).json()
            el.addEventListener("click", e => changeDoc(el.getAttribute("tujuan"), dataJSON))
        } else
            el.addEventListener("click", e => changeDoc(el.getAttribute("tujuan"))) 
        el.href = "#";
    });
}

async function changeDoc(url, attr) {
    let data = await fetch(url);
    let text = await data.text();
    // console.log(typeof attr);
    if (typeof attr == "object") {
        for (let param in attr) {
            text = text.replaceAll("${" + param +"}", attr[param] instanceof Array ? attr[param].join(" ") : attr[param]);
        }
    } else if (typeof attr == "string") {
        let dataTemp = await (await fetch(attr)).json();
        for (let key in dataTemp) {
            text = text.replaceAll("${" + key +"}", dataTemp[key]);
        }
    }
    document.body.innerHTML = text;
    let virtualEl = document.createElement("div");
    virtualEl.innerHTML = text;
    updateNewAnchor();
    virtualEl.querySelectorAll("script").forEach(val=>{
        eval(val.innerHTML);
    });
}

addEventListener("load", _ => updateNewAnchor());