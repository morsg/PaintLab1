document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let index = 0;

    function showSlide(newIndex) {
        // Обрабатываем цикличность индекса
        if (newIndex < 0) {
            index = slides.length - 1; // Переход к последнему слайду
        } else if (newIndex >= slides.length) {
            index = 0; // Переход к первому слайду
        } else {
            index = newIndex;
        }

        // Перемещение слайдов на основе индекса
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Слушатель для левой кнопки (перелистывание влево)
    leftBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length; // Уменьшаем индекс, с учётом цикличности
        showSlide(index);
    });

    // Слушатель для правой кнопки (перелистывание вправо)
    rightBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length; // Увеличиваем индекс, с учётом цикличности
        showSlide(index);
    });
});


// Данные для товаров
const products = {
    kraski: [
        { id: 1, name: "Краска для стен и потолков глубокоматовая база BW", price: "1900 ₽", image: "images/pc1.png", description: "DULUX DIAMOND EXTRA MATT / ДЮЛАКС ДАЙМОНД ЭКСТРА МАТ краска для стен и потолков глубокоматовая база BW 1л" },
        { id: 2, name: "Краска акрилатная для внутренних работ, мат, баз А", price: "850 ₽", image: "images/kraski2.jpg", description: "VINCENT I 3 краска акрилатная для внутренних работ, мат, баз А (0,8л)" },
        { id: 3, name: "Краска для стен и потолков матовая база BW", price: "970 ₽", image: "images/kraski3.jpg", description: "DULUX BINDO 7 ЭКСТРАПРОЧНАЯ / ДЮЛАКС БИНДО 7 ЭКСТРАПРОЧНАЯ краска для стен и потолков матовая база BW 1л" },
        { id: 4, name: "Краска интерьерная, белоснежная, для стен и потолков", price: "200 ₽", image: "images/kraski4.jpg", description: "VGT / ВГТ ВД-АК-2180 краска интерьерная, белоснежная, для стен и потолков, влагостойкая, матовая (1,5кг)" },
        { id: 5, name: "Краска интерьерная, белый", price: "1500 ₽", image: "images/kraski5.jpg", description: "FAKTOR / ФАКТОР краска интерьерная, белый (13кг)" },
        { id: 6, name: "Краска для стен и потолка (ПРОФИ А)", price: "500 ₽", image: "images/kraski6.jpg", description: "ТЕКС МОЮЩАЯСЯ краска для стен и потолка (ПРОФИ А) (0,9л)" },
        { id: 7, name: "Краска матовая для внутренних работ, моющаяся, база BW", price: "260 ₽", image: "images/kraski7.jpg", description: "MARSHALL EXPORT 7 / МАРШАЛЛ ЭКСПОРТ 7 матовая краска для внутренних работ, моющаяся, база BW (4,5л)" },
        { id: 8, name: "Краска для стен потолков, матовая высокоукрывистая,базаС", price: "800 ₽", image: "images/kraski8.jpg", description: "VINCENT CONFORMAT / ВИНСЕНТ КОНФОРМАТ краска для стен и потолков профессиональная износостойкая глубоко матовая высокоукрывистая, база С, 0,7 л" },
        
    ],
    imal: [
        { id: 9, name: "Эмаль высоко прочная, глянц, база А", price: "1500 ₽", image: "images/эмаль1.jpg", description: "TIKKURILA EURO MIRALKYD 90 эмаль высоко глянц, баз А (0,9л)" },
        { id: 10, name: "Эмаль акриловая универсальная для наружных и внутренних работ матовая база 1", price: "1200 ₽", image: "images/эмаль2.jpg", description: "LINNIMAX / ЛИННИМАКС АКВА эмаль акриловая универсальная атмосферостойкая для наружных и внутренних работ шелковисто-матовая база 1 (0,9л)" },
        { id: 11, name: "Эмаль особо прочная акриловая, полуглянцевая, база А", price: "1200 ₽", image: "images/эмаль3.jpg", description: "BRITE CERAMIC / БРАЙТ КЕРАМИК эмаль особо прочная акриловая, полуглянцевая, база А (0,9л)" },
        { id: 12, name: "Эмаль ПФ-115 для металла и дерева, алкидная, для вн/нар, база С", price: "10 000 ₽", image: "images/эмаль4.jpg", description: "ЯРКРАСКИ эмаль ПФ-115 для металла и дерева, алкидная, для вн/нар, база С 16кг" },
        { id: 13, name: "Эмаль акриловая, универсальная, шелковисто-матовая, база С", price: "500 ₽", image: "images/эмаль5.jpg", description: "БЫСТРОРЕМОНТ БЫСТРО ЭМАЛЬ акриловая, универсальная, шелковисто-матовая, база С (0,9кг)" },
        { id: 14, name: "Эмаль алкидная атмосферостойкая, салатный", price: "300 ₽", image: "images/эмаль6.jpg", description: "FAKTOR ПФ-115 эмаль алкидная атмосферостойкая, салатный (0,8кг)" },
        { id: 15, name: "Эмаль акриловая для внутренних работ, полуматовая, база A", price: "1400 ₽", image: "images/эмаль7.jpg", description: "FINNCOLOR GARDEN AQUA / ФИННКОЛОР ГАРДЕН АКВА эмаль акриловая для внутренних работ, полуматовая, база A (0,9л)" },
        { id: 16, name: "Эмаль высоко глянц, база А", price: "12 000 ₽", image: "images/эмаль8.jpg", description: "TIKKURILA EURO MIRALKYD 90 эмаль высоко глянц, баз А (9л)" },
    ],
    shpaklevka: [
        { id: 17, name: "Шпатлевка финишная, легкая, для стен и потолков", price: "300 ₽", image: "images/шпаклевка1.jpg", description: "TIKKURILA EURO FILLER LIGHT шпаклевка финишная, легкая, для стен и потолков (0,9л)" },
        { id: 18, name: "Шпатлевка для дерева, для наружных и внутренних работ, акрил, орех", price: "150 ₽", image: "images/шпаклевка2.jpg", description: "EUROTEX / ЕВРОТЕКС шпатлевка для дерева, для наружных и внутренних работ, акрил, орех (0,225кг)" },
        { id: 19, name: "Шпатлевка финишная акриловая для внутренних работ матовая белый", price: "4 000 ₽", image: "images/шпаклевка3.jpg", description: "LINNIMAX AKKORD-SPACHTEL AIRLESS / ЛИННИМАКС АККОРД-ШПАХТЕЛЬ АЙРЛЕСС шпатлевка финишная акриловая для внутренних работ матовая белый (25кг)" },
        { id: 20, name: "Шпатлевка по дереву, акриловая, универсальная, белый", price: "110 ₽", image: "images/шпаклевка4.jpg", description: "VGT шпатлевка ЭКСТРА по дереву, акриловая, универсальная, белый (0,3кг)" },
        { id: 21, name: "Шпатлевка универсальная легкого затирания", price: "300 ₽", image: "images/шпаклевка5.jpg", description: "TERRACO ХЭНДИКОАТ All-PURPOSE универсальная шпатлевка легкого затирания (1кг)" },
        { id: 22, name: "Шпатлевка замазка универсальная для выбоин и трещин", price: "500 ₽", image: "images/шпаклевка6.jpg", description: "NEOMID шпатлевка замазка универсальная для выбоин и трещин (1,4кг)" },
        { id: 23, name: "Шпатлевка акриловая выравнивающая", price: "440 ₽", image: "images/шпаклевка7.jpg", description: "Master Good Шпатлевка акриловая выравнивающая (1,2кг)" },
        { id: 24, name: "Шпатлевка универсальная ", price: "4 300 ₽", image: "images/шпаклевка8.jpg", description: "DANOGIPS SUPER FINISH шпаклевка универсальная (17л)" },
    ],
    tools: [
        { id: 25, name: "Кисть универсальная,нат. щет,дерев. ручка ", price: "80 ₽", image: "images/инструменты1.jpg", description: "COLOR EXPERT / КОЛОР ЭКСПЕРТ 81262510/81262512 кисть универсальная,нат. щет,дерев. ручка (25мм х 9мм)" },
        { id: 26, name: "Мини-валик в сборе для работ с водными ЛКМ, полиэстер L ручки ", price: "130 ₽", image: "images/инструменты2.jpg", description: "АКОР мини-валик в сборе для работ с водными ЛКМ, полиэстер L110мм L ручки 30см" },
        { id: 27, name: "Шпатель резиновый зеленый для нанесения эпоксидной затирки", price: "750 ₽", image: "images/инструменты3.jpg", description: "LITOKOL / ЛИТОКОЛ шпатель резиновый зеленый для нанесения эпоксидной затирки (арт. 946 GR) (115х250мм)" },
        { id: 28, name: "Шпатель гладкий из нержавеющей стали, с антикоррозионным покрытием, желтая ручка", price: "150 ₽", image: "images/инструменты4.jpg", description: "АКОР шпатель гладкий из нержавеющей стали, с антикоррозионным покрытием, желтая ручка (100мм)" },
        { id: 29, name: "Шпатель фасадный, нерж.сталь, фасадный эргон", price: "1250 ₽", image: "images/инструменты5.jpg", description: "COLOR EXPERT / КОЛОР ЭКСПЕРТ 91373502 шпатель фасадный, нерж. сталь,фасадный эргон(350мм)" },
        { id: 30, name: "Шпатель, нерж. сталь пластик черный", price: "150 ₽", image: "images/инструменты6.jpg", description: "COLOR EXPERT / КОЛОР ЭКСПЕРТ 91090810/91090812 шпатель, нерж. сталь пластик черный(80мм)" },
        { id: 31, name: "Шпатель зубчатый с антикоррозионным покрытием, черная ручка", price: "160 ₽", image: "images/инструменты7.jpg", description: "АКОР шпатель зубчатый с антикоррозионным покрытием, черная ручка 4х4 150мм" },
        { id: 32, name: "Кисть флейцевая для отделочных работ, натуральная щетина, пластиковая ручка", price: "200 ₽", image: "images/инструменты8.jpg", description: "АКОР ЕВРО кисть флейцевая для отделочных работ, натуральная щетина, пластиковая ручка (100х8мм)" },
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

// Обработка кликов по карточкам в hero-product (если секция существует)
const heroProductSection = document.querySelector(".hero-product2");
if (heroProductSection) {
    document.querySelectorAll(".hero-product2 .product-link2").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const category = e.currentTarget.getAttribute("data-category");


// Если мы находимся на index.html, перенаправляем на catalog.html с параметром категории
if (window.location.pathname.includes("index.html")) {
    window.location.href = `catalog.html?category=${category}`;
} else {
    // Если мы уже на catalog.html, просто отображаем товары
    showProducts(category);

    // ПОКАЗЫВАЕМ и обновляем историю переходов
    const istori = document.querySelector(".catalog .istori");
    if (istori) {
        istori.style.display = 'block'; // ПОКАЗЫВАЕМ навигацию
        istori.innerHTML = `
            <a href="index.html">Главная</a> > 
            <a href="catalog.html">Каталог</a> > 
            <span>${e.currentTarget.querySelector("h3").textContent}</span>
        `;
    }

    // Прокручиваем страницу к секции каталога
    document.querySelector(".catalog").scrollIntoView({ behavior: "smooth" });
}
        });
    });
}

// Показываем и обновляем навигацию
const istori = document.getElementById("catalog-istori");
if (istori) {
    istori.style.display = 'none';
    istori.innerHTML = `
        <a href="index.html">Главная</a> > 
        <a href="catalog.html">Каталог</a> > 
        <span>${e.currentTarget.querySelector("h3").textContent}</span>
    `;
}


// Загрузка товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        showProducts(category);
    }
    
});