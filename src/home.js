function loadHome() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to The Golden Fork";
    content.appendChild(heading);

    const image = document.createElement('img');
    image.src = "restaurant.jpg";
    image.alt = "Dining room with a view";
    image.width = 600;
    content.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Experience the finest dining with breathtaking views and exquisite cuisine crafted by our world-renowned chefs. Whether you are looking for a romantic dinner or a family gathering, The Golden Fork offers an unforgettable atmosphere.";
    content.appendChild(paragraph);
}

export default loadHome;
