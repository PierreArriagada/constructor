// masVendidos.js
const productGrid = document.getElementById('product-grid');

function addProductCard(titulo, precio, imageUrl, comentarios) {
    const card = document.createElement('div');
    card.className = ' p-4 flex flex-col justify-between'; // Ajuste para posicionamiento

    card.innerHTML = `
        <div class="max-h-60 overflow-hidden flex justify-center items-center mb-2">
            <img src="${imageUrl}" alt="${titulo}" class="max-w-full max-h-full rounded-lg">
        </div>
        <div>
            <h2 class="text-gray-800 font-semibold mb-1">${titulo}</h2>
            <div class="flex items-center justify-between">
                <p class="text-gray-800 text-sm">${precio}</p>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 8.13l6.57-1.01L10 1l2.941 6.12 6.57 1.01-4.764 4.415L15.878 18.1 10 15z" />
                    </svg>
                    <p class="ml-1 text-gray-600 text-xs">(${comentarios})</p>
                </div>
            </div>
        </div>
    `;

    productGrid.appendChild(card);
}

// Asegúrate de que las rutas de las imágenes sean correctas
addProductCard('Producto 1', '$12.99', '/src/img/casa1.jpeg', 12);
addProductCard('Producto 2', '$15.50', '/src/img/casa2.jpeg', 25);
addProductCard('Producto 3', '$20.00', '/src/img/casa3.jpg');
addProductCard('Producto 4', '$8.75', '/src/img/casa4.jpeg');
addProductCard('Producto 5', '$25.99', '/src/img/casa5.jpeg');
addProductCard('Producto 6', '$18.30', '/src/img/casa6.jpeg');