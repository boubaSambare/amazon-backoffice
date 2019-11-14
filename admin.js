const productsListTemplate = function (product) {
    return `
    <tr>
        <th scope="row">${product._id}</th>
        <td>${product.name}</td>
        <td>${product.brand}</td>
        <td>${product.price}</td>
        <td><a type="button" class="btn btn-warning" href="#" >Edit</a></td>
        <td><a type="button" class="btn btn-danger"  href="#" onclick="deleteProduct('${product._id}')">Delete</a></td>
    </tr>
    `
}






window.onload = async () => {
    const wrapper = document.querySelector('#products-list')
    let products = await getAllProducts()
    wrapper.innerHTML = products.map(element => productsListTemplate(element)).join('')
}