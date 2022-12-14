const items = [
    {
        id: 0,
        title:'iPhone 14 Pro 128gb (PURPLE)',
        description:'Nuevo en caja sellada',
        price: 1500,
        img:'./images/iph14propurple.jpg'

    },
    {
        id: 1,
        title:'iPad Pro 11" M2 128gb (SPACE)',
        description:'Nuevo Lanzamiento',
        price: 1450,
        img:'./public/images/.jpg'
    },
    {
        id: 2,
        title:'MacBook Air M2 256gb SSD (SILVER)',
        description:'Teclado Español',
        price: 2500,
        img:'./images/MbPro.jpeg'
    }
]

export const getItems = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(items)
        },700)
    })
}

export const getItemsById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(items.find(item => item.id === id))
        },700)
    })
}