async function getData(fileUrl) {
    let request = await fetch(fileUrl);
    return await request.json();
}

export {getData}