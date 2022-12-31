const items = [
    {
        id: 0,
        title:'iPhone 14 Pro 128gb (PURPLE)',
        description:'Nuevo en caja sellada',
        price: 1500,
        img:'./images/iph14propurple.jpg',
        category:'iPhone'

    },
    {
        id: 1,
        title:'iPad Pro 11" M2 128gb (SPACE)',
        description:'Nuevo Lanzamiento',
        price: 1450,
        img:'./images/ipad.jpg',
        category:'iPad'
    },
    {
        id: 2,
        title:'MacBook Pro M2 256gb SSD (SILVER)',
        description:'Teclado Español',
        price: 2500,
        img:'./images/MbPro.jpeg',
        category:'MacBook'

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

export const getItemsByCategory = (categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(items.filter(item => item.category === categoryId))
        },700)
    })
}