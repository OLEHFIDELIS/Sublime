const express = require("express");
const path = require("path")
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const viewpath = path.join(__dirname,"../views")

const products = [
    {
        "id": "1e21c09a-1234-4f09-8f9e-1234567890ab",
        "name": "iPhone 14 Pro",
        "Description": "The latest iPhone model with advanced features including a new A16 Bionic chip, ProMotion display, and improved camera system.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The iPhone 14 Pro offers an exceptional experience with its state-of-the-art technology. It features a ProMotion display for smoother scrolling and improved responsiveness. The camera system has been enhanced with better low-light performance and new computational photography features.",
        "price": "$999",
        "review": "The best iPhone yet! The display and camera are outstanding."
    },
    {
        "id": "2b34d08b-5678-4a09-9d7f-2234567890cd",
        "name": "Samsung Galaxy S23 Ultra",
        "Description": "Samsung's flagship phone with a stunning display, powerful processor, and versatile camera system.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The Galaxy S23 Ultra is designed for those who demand the best. It features a Dynamic AMOLED 2X display, a powerful Exynos processor, and a versatile camera system with 108MP resolution and 100x Space Zoom.",
        "price": "$1199",
        "review": "Amazing performance and camera quality. A true flagship phone."
    },
    {
        "id": "3c45e09c-6789-4b10-8e8f-3234567890ef",
        "name": "Google Pixel 7",
        "Description": "Google's latest Pixel phone with stock Android experience and superior camera performance.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The Pixel 7 offers an unparalleled Android experience with Google's latest software updates and features. The camera system is top-notch, providing excellent photo and video quality with AI-powered enhancements.",
        "price": "$799",
        "review": "Pure Android experience and a fantastic camera. Highly recommended."
    },
    {
        "id": "4d56f10d-7890-4c11-9f7f-4234567890gh",
        "name": "OnePlus 10 Pro",
        "Description": "A high-performance phone with a sleek design, fast charging, and a fluid display.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The OnePlus 10 Pro offers a premium experience with its fast Snapdragon processor, 120Hz Fluid AMOLED display, and super-fast charging capabilities. The camera system is versatile and delivers great results.",
        "price": "$899",
        "review": "Fast, smooth, and great for gaming. The fast charging is a lifesaver."
    },
    {
        "id": "5e67g11e-8901-4d12-8a6f-5234567890ij",
        "name": "Sony WH-1000XM5",
        "Description": "High-end noise-canceling headphones with superior sound quality and comfort.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The Sony WH-1000XM5 headphones offer industry-leading noise cancellation, superior sound quality, and all-day comfort. They are perfect for travelers and audiophiles who want the best audio experience.",
        "price": "$349",
        "review": "Unmatched noise cancellation and sound quality. Extremely comfortable."
    },
    {
        "id": "6f78h12f-9012-4e13-9b5f-6234567890kl",
        "name": "Apple AirPods Pro 2",
        "Description": "Next-generation AirPods with improved sound quality, noise cancellation, and battery life.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The AirPods Pro 2 deliver an immersive audio experience with enhanced noise cancellation and better sound quality. The battery life has been improved, and they come with a new MagSafe charging case.",
        "price": "$249",
        "review": "The best wireless earbuds on the market. Great sound and noise cancellation."
    },
    {
        "id": "7g89i13g-0123-4f14-8c4f-7234567890mn",
        "name": "Samsung Galaxy Watch 5",
        "Description": "A stylish and feature-rich smartwatch with health tracking and long battery life.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The Galaxy Watch 5 combines style and functionality with its sleek design and comprehensive health tracking features. It offers long battery life and supports a wide range of apps.",
        "price": "$299",
        "review": "Beautiful design and very functional. Great for fitness tracking."
    },
    {
        "id": "8h90j14h-1234-4g15-9d3f-8234567890op",
        "name": "Anker PowerCore 26800",
        "Description": "A high-capacity portable charger with fast charging capabilities for multiple devices.",
        "bannerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYL7QXNtGcX-yu10_tIodgkmMtZ09fK12jA&s",
        "content": "The Anker PowerCore 26800 is a reliable portable charger that can charge multiple devices at once. It offers fast charging and a massive capacity, making it ideal for long trips or emergency power needs.",
        "price": "$65",
        "review": "Huge capacity and fast charging. Perfect for travel."
    }
]


app.get("/", (req,res) => {
    try {
        res.render("index", {products}) 
    } catch (error) {
       res.redirect("/") 
    }
   
});

app.get("/product/:id", (req,res) => {
    try {
        const productId = req.params.id
        let productData = products.filter((product)=> (product.id == productId));
         if (productData.length == 0) {
            console.log("data dose not exist")
         }
         const product = productData[0]
        res.render("show", {product}) 
    } catch (error) {
        console.log(error)
       res.redirect("/") 
    }
})

app.get("/cart",(req,res) => {
    res.render("cart")
} )

app.listen("3000", () => {
   console.log("SERVER JUST STARTED!!!!!")
});