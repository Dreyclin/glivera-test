const input = document.getElementById('search');
const icon = input.previousElementSibling;

input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
        icon.style.opacity = '0';
    } else {
        icon.style.opacity = '1';
    }
});

// Получаем элементы
const burgerMenu = document.querySelector('.burger-menu');
const asideMenu = document.querySelector('aside');
const body = document.body;

// Добавляем событие клика на бургер-меню
burgerMenu.addEventListener('click', () => {
    // Добавляем или удаляем активный класс у меню
    asideMenu.classList.toggle('active');
    
    // Также сдвигаем основное содержимое
    body.classList.toggle('menu-open');
});