document.addEventListener("DOMContentLoaded", function () {
    // --- Настройки слайдера ---
    const images = [
        "images/пк (2).jpg", // Замени на свои изображения
        "images/пк1.jpg",
        "images/пк2.jpg",
    ];
    const autoSlideInterval = 3000; // Интервал автопрокрутки в миллисекундах (3-5 секунд)
    // --- Конец настроек ---

    const sliderTrack = document.getElementById("sliderTrack");
    const sliderIndicatorsContainer = document.getElementById("sliderIndicators");
    const leftBtn = document.getElementById("sliderLeftBtn");
    const rightBtn = document.getElementById("sliderRightBtn");

    let currentIndex = 0;
    let slideInterval;

    // Функция для создания слайдов и индикаторов
    function initSlider() {
        // Создаем слайды
        images.forEach((src, index) => {
            const slide = document.createElement("div");
            slide.classList.add("slider-slide");
            slide.innerHTML = `<img src="${src}" alt="Слайд ${index + 1}">`;
            sliderTrack.appendChild(slide);
        });

        // Создаем индикаторы
        images.forEach((_, index) => {
            const indicator = document.createElement("div");
            indicator.classList.add("slider-indicator");
            if (index === 0) indicator.classList.add("active"); // Первый активен
            indicator.dataset.index = index;
            indicator.addEventListener("click", () => goToSlide(index));
            sliderIndicatorsContainer.appendChild(indicator);
        });

        updateSlider();
        startAutoSlide();
    }

    // Функция для обновления позиции слайдов и индикаторов
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Обновляем индикаторы
        document.querySelectorAll(".slider-indicator").forEach((ind, index) => {
            if (index === currentIndex) {
                ind.classList.add("active");
            } else {
                ind.classList.remove("active");
            }
        });
    }

    // Функция для перехода к определённому слайду
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateSlider();
        resetAutoSlide(); // Сбрасываем таймер при ручном переключении
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Функция для запуска автопрокрутки
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, autoSlideInterval);
    }

    // Функция для сброса (перезапуска) автопрокрутки
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Обработчики кликов по кнопкам
    leftBtn.addEventListener("click", prevSlide);
    rightBtn.addEventListener("click", nextSlide);

    // Инициализация слайдера
    initSlider();
});








// Данные для товаров
const products = {
    "Компьютеры": [
        { id: 1, name: "Компьютер IS Mechanics", price: "35 000 ₽", image: "images/pc1.png", description: "Системный блок IS Mechanics Crown PRO AG (AMD Ryzen 5 3350G/ 8Gb DDR4/ 256Gb/ AMD Radeon R7/ 450W), Монитор 21.5 ExeGate ProSmart, (Мышки и клавиатуры в коплекте не предусмотренно) " },
        
        { id: 2, name: "Компьютер IS Mechanics", price: " 38 000₽", image: "images/sistem blok.png", description: "Системный блок IS Mechanics Crown STD IG (Intel Core i3-12100/ 8Gb DDR4/ SSD 256Gb/ Intel UHD Graphics/ 450W)" },

        { id: 3, name: "Компьютер SafeRay S203 G1R", price: "31 500 ₽", image: "images/sistem blok2.png", description: "Системный блок SafeRay S203 G1R (Intel Core i3-12100/ 16Gb DDR4/ SSD 512Gb/ Intel UHD Graphics/ 450W)" },

        { id: 4, name: "Компьютер SafeRay S102 G1R", price: "37 900 ₽", image: "images/sistem blok3.png", description: "Системный блок SafeRay S102 G1R (Intel Core i5-12400/ 16Gb DDR4/ SSD 512Gb/ Intel UHD Graphics/ 450W)" },

        { id: 5, name: "Компьютер SafeRay S103 G1R", price: "36 900 ₽", image: "images/sistem blok4.png", description: "Системный блок SafeRay S102 G1R (Intel Core i5-12400/ 16Gb DDR4/ SSD 512Gb/ Intel UHD Graphics/ 450W)" },

        { id: 6, name: "Компьютер SafeRay S103 G1R", price: "39 900 ₽", image: "images/sistem blok.png", description: "Системный блок SafeRay S102 G1R (Intel Core i7 / 16Gb DDR4/ SSD 512Gb/ Intel UHD Graphics/ 450W)" },

        { id: 7, name: "Компьютер SafeRay S101 G1R", price: "46 900 ₽", image: "images/sistem blok2.png", description: "Системный блок SafeRay S102 G1R (Intel Core i5-12400/ 16Gb DDR4/ SSD 512Gb/ Intel UHD Graphics/ 450W/ Win10 Pro)" },

        { id: 8, name: "Компьютер IS Mechanics", price: "39 990 ₽", image: "images/sistem blok3.png", description: "Системный блок IS Mechanics Crown PRO AD (AMD Ryzen 7 3700X/ 16Gb DDR4/ SSD 512Gb/ NVidia GT210 1Gb/ 450W)" },


        
    ],
    "Комплектующие": [
        { id: 9, name: "Корпус KingPrice KPCC-MN209 черный", price: "1 500 ₽", image: "images/compl.png", description: "Корпус KingPrice KPCC-MN209 черный без БП mATX 1x80mm 2x120mm 2xUSB2.0 audio" },

        { id: 10, name: "Корпус Ginzzu B250, w/o PSU, Black", price: "2 100 ₽", image: "images/compl2.png", description: "Корпус Ginzzu B250, w/o PSU, Black" },

        { id: 11, name: "Корпус CBR MX12, mATX, Black, 500W [PCC-MATX-MX12-500W2]", price: "2 500 ₽", image: "images/compl3.png", description: "Корпус CBR MX12, mATX, Black, 500W [PCC-MATX-MX12-500W2]" },

        { id: 12, name: "Клавиатура ExeGate LY-331L, USB [EX263906RUS]", price: "370 ₽", image: "images/klav.png", description: "Клавиатура ExeGate LY-331L, USB [EX263906RUS]" },

        { id: 13, name: "Клавиатура Oklick 120M, Black, USB [2003R USB]", price: "670 ₽", image: "images/klav2.png", description: "Клавиатура Oklick 120M, Black, USB [2003R USB]" },

        { id: 14, name: "Клавиатура Defender Axeman GK-302", price: "2 000 ₽", image: "images/klav3.png", description: "Клавиатура Defender Axeman GK-302 (45306)" },

        { id: 15, name: "Мышь A4Tech V-Track Padless N-500FS черный оптическая", price: "800 ₽", image: "images/mish.png", description: "Мышь A4Tech V-Track Padless N-500FS черный оптическая (1200dpi) USB (4but)" },

        { id: 16, name: "Мышь A4-Tech Fstyler FB10C беспроводная BT/Radio", price: "1 500 ₽", image: "images/mish2.png", description: "Мышь A4-Tech Fstyler FB10C беспроводная BT/Radio USB, 12000 dpi, беспроводная" },

        { id: 17, name: "Мышь Logitech G304 Lightspeed Black", price: "3 200 ₽", image: "images/mish3.png", description: "Мышь Logitech G304 Lightspeed Black, 12000 dpi, беспроводная" },
    ],
    "Сетевые компоненты": [
        { id: 18, name: " Беспроводной маршрутизатор Keenetic Start (KN-1112)", price: "2 400 ₽", image: "images/set.jpg", description: " Беспроводной маршрутизатор Keenetic Start (KN-1112) [KN-1112], cтандарт беспроводной связи: Wi-Fi 5 (802.11ac), Частотный диапазон: 2.2 ГГц, 5 ГГцМаксимальная скорость беспроводного соединения: 1067 Мбит/с, Количество портов WAN: 1" },

        { id: 19, name: "Беспроводной маршрутизатор Keenetic Speedster (KN-3012)", price: "6 200 ₽", image: "images/set2.png", description: "Беспроводной маршрутизатор Keenetic Speedster (KN-3012), cтандарт беспроводной связи: Wi-Fi 5 (802.11ac), Частотный диапазон: 2.2 ГГц, 5 ГГцМаксимальная скорость беспроводного соединения: 1067 Мбит/с, Количество портов WAN: 1" },

        { id: 20, name: "Беспроводной маршрутизатор Keenetic 4G (KN-1213)", price: "3 500 ₽", image: "images/set.jpg", description: "Беспроводной маршрутизатор Keenetic 4G (KN-1213), cтандарт беспроводной связи: Wi-Fi 5 (802.11ac), Частотный диапазон: 2.2 ГГц, 5 ГГцМаксимальная скорость беспроводного соединения: 1067 Мбит/с, Количество портов WAN: 1" },

        { id: 21, name: "Коммутатор (свитч) Ruijie Reyee RG-ES05G", price: "1 800 ₽", image: "images/kamut.png", description: "Коммутатор (свитч) Ruijie Reyee RG-ES05G, Размеры (ШхВхГ) 108 x 25 x 64 мм, Количество портов RJ-45 (1 Гбит/с 5, портов общее 5" },

        { id: 22, name: "Коммутатор D-Link DES-1008D Switch (8TP, 10/100) [DES-1008D/L2B]", price: "1950 ₽", image: "images/kamut2.png", description: "Коммутатор (свитч) D-Link DES-1008D, Количество портов RJ-45 (1 Гбит/с 8, портов общее 8" },

        { id: 23, name: "Коммутатор (свитч) TP-Link TL-SG1008MP", price: "9100 ₽", image: "images/kamut3.png", description: "Коммутатор (свитч) TP-Link TL-SG1008MP, Количество портов RJ-45 (1 Гбит/с 8, портов общее 8" },

        { id: 24, name: "Сетевой адаптер 5bites UA3C-45-07BK", price: "850 ₽", image: "images/kabel.png", description: "Сетевой адаптер 5bites UA3C-45-07BK, 1000 Мбит/с" },

        { id: 25, name: "Кабель Schneider Electric витая пара UTP", price: "6 300 ₽", image: "images/kabel2.jpg", description: "Кабель Schneider Electric витая пара UTP, 4 пары, кат.5е, медь, 24AWG, 305 метров, для монтажа" },
    ],
    "Ноутбуки": [
        { id: 25, name: "Ноутбук Inferit Compact 14 Violet (IFLTSI5P3CP11) ", price: "25 000 ₽", image: "images/nout (1).png", description: "Ноутбук Inferit Compact 14 Violet (IFLTSI5P3CP11)" },

        { id: 26, name: "Ноутбук HP 250 G10 (A23JZEA) ", price: "50 900 ₽", image: "images/nout (2).png", description: "Ноутбук HP 250 G10 (A23JZEA)" },

        { id: 27, name: "Ноутбук Acer Extensa 15 EX215-34-C6UB N-series", price: "31 150 ₽", image: "images/nout (3).png", description: "Ноутбук Acer Extensa 15 EX215-34-C6UB N-series N100 8Gb SSD256Gb Intel UHD Graphics 15.6 TN FHD (1920x1080) noOS silver WiFi BT Cam (NX.EHTCD.006" },

        { id: 28, name: "Ноутбук HP 255 G10", price: "55 000 ₽", image: "images/nout (4).png", description: "Ноутбук HP 255 G10 (A23JZBA)" },

        { id: 29, name: "Ноутбук HP EliteBook 640 G10 (736H9AV)", price: "62 950 ₽", image: "images/nout (5).png", description: "Ноутбук HP EliteBook 640 G10 (736H9AV)" },

        { id: 30, name: "Блок питания Sony 6.5x4.4мм, 65W (19.5V, 3.3A)", price: "850 ₽", image: "images/block.png", description: "Блок питания Sony 6.5x4.4мм, 65W (19.5V, 3.3A)" },

        { id: 31, name: "Блок питания HP 7.4x5.0мм с иглой", price: "5 000 ₽", image: "images/block2.png", description: "Блок питания HP 7.4x5.0мм с иглой" },

        { id: 32, name: "Аккумуляторная батарея для ноутбука Acer Aspire one UM09H31", price: "1 200 ₽", image: "images/block3.png", description: "Аккумуляторная батарея для ноутбука Acer Aspire one UM09H31 532h 533h eMachines350, ZG-5, D150, A110, A150" },
    ],
};

function showProducts(category) {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = ""; 
    if (products[category]) {
        products[category].forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button onclick="showProductDetail(${product.id})">Подробнее</button>
                </div>`;
            productsContainer.appendChild(productElement);
        });
    }
}


function showProductDetail(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (product) {
        document.getElementById("detail-image").src = product.image;
        document.getElementById("detail-name").innerText = product.name;
        document.getElementById("detail-price").innerText = product.price;
        document.getElementById("detail-description").innerText = product.description;
        document.getElementById("product_id").value = product.id; 
        document.querySelector(".catalog").style.display = "none";
        document.getElementById("product-detail").style.display = "block";
    }
}


function addToCart(event) {
    event.preventDefault();
    const productId = document.getElementById("product_id").value;
    const quantity = document.querySelector("input[name='quantity']").value;

    fetch('add_to_cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity: quantity }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Товар добавлен в корзину!');
            location.reload();
        } else {
            alert('Ошибка: ' + data.message);
        }
    })
    .catch(error => console.error('Ошибка:', error));
}

// Старый обработчик кликов по .hero-product2 - ИСПРАВЛЕН
// (теперь он не вызывает ошибок, но и не делает ничего полезного для твоего нового HTML)
const heroProductSection = document.querySelector(".hero-product2");
if (heroProductSection) {
    document.querySelectorAll(".hero-product2 .product-link2").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            // const category = e.currentTarget.getAttribute("data-category"); // Не используется в новом HTML
            // Старый код для перенаправления или вызова showProducts был здесь
            // Он не работает, потому что в новом HTML нет data-category и h3 внутри product-link2
        });
    });
}

// НОВЫЙ обработчик кликов по .hero-product1 - ДОБАВЛЕН СЮДА
// Обработка кликов по карточкам в hero-product1 (твои новые категории)
// Находим элемент с классом hero-product1
const heroProductSection1 = document.querySelector(".hero-product1");

// Проверяем, существует ли он (на всякий случай)
if (heroProductSection1) {
    // Находим все ссылки (a) с классом product-link1 внутри этого раздела
    document.querySelectorAll(".hero-product1 .product-link1").forEach((link) => {
        // Добавляем обработчик события "click"
        link.addEventListener("click", (e) => {
            // Предотвращаем стандартное поведение ссылки (переход по href)
            e.preventDefault();

            // Получаем текст заголовка (h3) внутри текущей ссылки
            // Это и будет название категории
            const categoryTitleElement = link.querySelector("h3");
            if (categoryTitleElement) {
                const category = categoryTitleElement.innerText.trim(); // .trim() убирает лишние пробелы


                document.querySelector(".catalog").style.display = "block"; // Показываем каталог
                const productDetailSection = document.getElementById("product-detail");
                if (productDetailSection) {
                    productDetailSection.style.display = "none"; // Скрываем детали товара
                }

                // Вызываем функцию showProducts, передав ей название категории
                showProducts(category);

                // Прокручиваем страницу к секции каталога
                const catalogSection = document.querySelector(".catalog");
                if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: "smooth" });
                }

                // Обновляем историю переходов (если нужно)
                // Тут ты можешь изменить содержимое .istori
                // Предположим, у тебя есть элемент с id "istori" или классом "istori" для этого
                const istoriElement = document.querySelector(".istori"); // Или .getElementById("istori")
                if (istoriElement) {
                    istoriElement.innerHTML = `
                        <a href="index.html">Главная</a> > 
                        <a href="catalog.html">Каталог</a> > 
                        <span>${category}</span>
                    `;
                }
            }
        });
    });
}


// несуществующий элемент переменная
/*
const istori = document.getElementById("catalog-istori");
if (istori) {
    istori.style.display = 'none';
    istori.innerHTML = `
        <a href="index.html">Главная</a> > 
        <a href="catalog.html">Каталог</a> > 
        <span>${e.currentTarget.querySelector("h3").textContent}</span>
    `;
}
*/

// Загрузка товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        showProducts(category);
    }
    
});
