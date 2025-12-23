function loadMenu() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";
    content.appendChild(heading);

    const items = [
        { name: "Truffle Pasta", price: "$25", description: "Handmade pasta with black truffle shavings" },
        { name: "Wagyu Steak", price: "$50", description: "Premium A5 Wagyu beef grilled to perfection" },
        { name: "Lobster Bisque", price: "$18", description: "Rich and creamy soup made with fresh lobster" },
        { name: "Chocolate Soufflé", price: "$12", description: "Decadent dark chocolate dessert" }
    ];

    const menuList = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.price}<br>${item.description}`;
        menuList.appendChild(li);
    });

    content.appendChild(menuList);
}

export default loadMenu;
