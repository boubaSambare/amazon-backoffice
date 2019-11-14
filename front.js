const productsTemplate = function (product) {
    return `
    <div class="col-md-4 my-4">
    <div class="card" style="width: 18rem;">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.brand}</h5>
      <h6>${product.name}</h6>
      <p class="card-text"> ${product.desciption}</p>
      <p class="card-text">${product.price} </p>
    </div>
  </div>
  </div>
    `
}






window.onload = async () => {
    const wrapper = document.querySelector('#products-row')
    let products = await getAllProducts()
    wrapper.innerHTML = products.map(element => productsTemplate(element)).join('')
}