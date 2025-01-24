const products =[
    {
        id: "prd1",
        name: "iPhone 14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 999,
        stock: 20,
        category: "celulares",
        image:["/img/iphone-14.jpg", "/img/iphone-14-2.jpg", "/img/iphone-14-3.jpg", "/img/iphone-14-4.jpg"]
    },

    {
        id: "prd2",
        name: "Samsung Galaxy S22",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 899,
        stock: 15,
        category: "celulares",
        image:["/img/samsung-galaxy-s22.jpg", "/img/samsung-galaxy-s22-2.jpg", "/img/samsung-galaxy-s22-3.jpg", "/img/samsung-galaxy-s22-4.jpg"]
    },

    {
        id: "prd3",
        name: "Google Pixel 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 799,
        stock: 10,
        category: "celulares",
        image:["/img/google-pixel-7.jpg", "/img/google-pixel-7-2.jpg", "/img/google-pixel-7-3.jpg", "/img/google-pixel-7-4.jpg"]
    },

    {
        id: "prd4",
        name: "OnePlus 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 699,
        stock: 25,
        category: "celulares",
        image:["/img/OnePlus-10.jpg", "/img/OnePlus-10-2.jpg", "/img/OnePlus-10-3.jpg", "/img/OnePlus-10-4.jpg"]
    },

    {
        id: "prd5",
        name: "iPad Pro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1099,
        stock: 8,
        category: "tablets",
        image:["/img/iPad-Pro.jpg", "/img/iPad-Pro-2.jpg", "/img/iPad-Pro-3.jpg", "/img/iPad-Pro-4.jpg"]
    },

    {
        id: "prd6",
        name: "Samsung Galaxy Tab S8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 899,
        stock: 12,
        category: "tablets",
        image:["/img/Samsung-Galaxy-Tab-S8.jpg", "/img/Samsung-Galaxy-Tab-S8-2.jpg", "/img/Samsung-Galaxy-Tab-S8-3.jpg", "/img/Samsung-Galaxy-Tab-S8-4.jpg"]
    },

    {
        id: "prd7",
        name: "Microsoft Surface Pro 8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 569,
        stock: 7,
        category: "tablets",
        image:["/img/Microsoft-Surface-Pro-8.jpg", "/img/Microsoft-Surface-Pro-8-2.jpg", "/img/Microsoft-Surface-Pro-8-3.jpg", "/img/Microsoft-Surface-Pro-8-4.jpg"]
    },

    {
        id: "prd8",
        name: "MacBook Pro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 439,
        stock: 5,
        category: "notebooks",
        image:["/img/MacBook-Pro.jpg", "/img/MacBook-Pro-2.jpg", "/img/MacBook-Pro-3.jpg", "/img/MacBook-Pro-4.jpg"]
    },

    {
        id: "prd9",
        name: "Dell XPS 13",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 500,
        stock: 10,
        category: "notebooks",
        image:["/img/Dell-XPS-13.jpg", "/img/Dell-XPS-13-2.jpg", "/img/Dell-XPS-13-3.jpg", "/img/Dell-XPS-13-4.jpg"]
    },

    {
        id: "prd10",
        name: "HP Spectre x360",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1399,
        stock: 6,
        category: "notebooks",
        image:["/img/HP-Spectre-x360.jpg", "/img/HP-Spectre-x360-2.jpg", "/img/HP-Spectre-x360-3.jpg", "/img/HP-Spectre-x360-4.jpg"]
    }
]

const getProducts = () => {
    return new Promise (( resolve, reject) =>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export { getProducts }