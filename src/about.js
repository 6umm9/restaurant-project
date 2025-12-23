function loadAbout() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "About Us";
    content.appendChild(heading);

    const info = document.createElement('div');
    info.innerHTML = `
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@thegoldenfork.com</p>
        <p><strong>Address:</strong> 123 Culinary Blvd, Foodie City, FC 98765</p>
        <br>
        <p>Open daily from 5pm to 11pm.</p>
    `;
    content.appendChild(info);
}

export default loadAbout;
