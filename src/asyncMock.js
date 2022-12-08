const products = [
    {
        id: 0,
        title:'iPhone 14 Pro 128gb (PURPLE)',
        description:'Nuevo en caja sellada',
        price: 1500,
        src:'./public/images/iph14propurple.jpg'

    },
    {
        id: 1,
        title:'iPad Pro 11" M2 128gb (SPACE)',
        description:'Nuevo Lanzamiento',
        price: 1450,
        src:'./public/images/.jpg'
    },
    {
        id: 2,
        title:'MacBook Air M2 256gb SSD (SILVER)',
        description:'Teclado Español',
        price: 2500,
        src:'./public/images/.jpg'
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },2000)
    })
}

export const getProductsById = () =>{
    
}