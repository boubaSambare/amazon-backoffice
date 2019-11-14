const url = 'https://strive-school-testing-apis.herokuapp.com/api/product/'
const autorization = btoa('user12:5s*f!thGyuC8xm&h')

console.log('Basic ' + autorization)
const _Init = {
    headers: {
        'Authorization': `Basic ${autorization}`,
    },
}

const flashBag = function ( type) {
    
}


const getAllProducts = async () => {
    let reponse = await fetch(url, _Init)
    let products = await reponse.json()
    console.log(products)

    return products
}

const addProduct = async () => {
    event.preventDefault()
    const products = {
        name: document.querySelector('#product-name').value,
        description: document.querySelector('#product-desc').value,
        brand: document.querySelector('#product-brand').value,
        imageUrl: document.querySelector('#product-image').value,
        price: document.querySelector('#product-price').value,
    }
    console.log(products)


    const postInit = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Basic ${autorization}`,
        },

        body: JSON.stringify(products)
    }

    let request = await fetch(url, postInit)

    let reponse = await request.json()
    if (request.status === 200) alert('saved')
}

const deleteProduct = async function(id) {
    const deleteInit = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Basic ${autorization}`,
        },
    }
    let request = await fetch(url + id,deleteInit)
    let reponse = await request.json()
    if (request.status === 200) alert('saved')

    
}
