const cardContainer = document.getElementById('card-container');

function addCard(titulo, precio, imageUrl) {
    const card = document.createElement('div');
    card.className = 'relative p-4 w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md';
    card.style.minHeight = '160px';

    card.innerHTML = `
        <div>
            <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white dark:bg-gray-900 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-auto fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div class="relative block h-full">
                <div class="h-45 bg-gray-100 dark:bg-gray-700 rounded-lg" style="background-image: url('${imageUrl}'); background-size: cover;"></div>
            </div>
        </div>
        <h2 class="mt-2 text-gray-800 dark:text-white text-sm font-semibold line-clamp-1">${titulo}</h2>
        <p class="mt-2 text-gray-800 dark:text-white text-sm">${precio}</p>
        <button class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">Cotizar</button>
    `;

    cardContainer.appendChild(card);
}

// aqui se añaden tarjetas de los productos, mas facil y automatizado, en vez de todo el
//rato copiar y pegar el codigo en html, se hace desde aqui.
addCard('Super Value Pizza', '$5M-10M', '/src/img/log1.jpg');
addCard('Deluxe Burger', '$3M-7M', '/src/img/log2.jpg');
addCard('Chicken Salad', '$6M-13M', '/src/img/log3.webp');
addCard('Veggie Wrap', '$15M-26M', '/src/img/log4.jpg');
addCard('Fruit Smoothie', '$22M-37M', '/src/img/log5.jpg');
