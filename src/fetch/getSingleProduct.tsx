async function getSingleProduct() {
    const request = fetch('./data/data.json')
        .then(res => res.json())

    return request;
}

export default getSingleProduct;