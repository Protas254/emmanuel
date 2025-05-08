const data = [
    {text: "Shoulder Bag", image:"/11.jpg", description:"A stylish and functional shoulder bag for everyday use."},
    {text: "Tote Bag", image:"/12.jpg", description:"A spacious tote bag perfect for shopping or work."},
    {text: "Backpack", image:"/13.jpg", description:"A durable backpack ideal for travel or school."},
    {text: "Crossbody Bag", image:"/14.jpg", description:"A trendy crossbody bag for hands-free convenience."},
    {text: "Duffel Bag", image:"/15.jpg", description:"A versatile duffel bag for gym or weekend trips."},    
    {text: "Clutch Bag", image:"/16.jpg", description:"An elegant clutch bag for evening events."},
    {text: "Messenger Bag", image:"/17.jpg", description:"A practical messenger bag for professionals."},
    {text: "Laptop Bag", image:"/laptop bag.jpg", description:"A protective laptop bag for work or study."},
    {text: "Sling Bag", image:"/sling.jpg", description:"A compact sling bag for casual outings."},
    {text: "Travel Bag", image:"/Travel bag.jpg", description:"A reliable travel bag for long journeys."},
]

const text = document.getElementById("text")
const image = document.getElementById("image")

let c_index = 0;

function changeContent(){
    c_index = (c_index + 1) % data.length;
    document.getElementById("par").textContent = data[c_index].text;
    document.getElementById("image").src = data[c_index].image;
    document.getElementById("image").alt = data[c_index].description;
}

function previousContent() {
    const images = ["/16.jpg", "/15.jpg", "/14.jpg,/12.jpg", "/11.jpg", "/14.jpg"];  // Add your image paths here
    const imageElement = document.getElementById("image");
    const currentIndex = images.indexOf(imageElement.src.split('/').pop());
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[previousIndex];
}

// Example JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully!');
    // Add your JavaScript code here

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    console.log('Overflow menu functionality initialized!');
});