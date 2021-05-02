(() => {
    const burgerButton = document.querySelector('.burger__button');
    const menuList = document.querySelector('.menu__list');
    console.log(burgerButton);
    console.log(menuList);
    burgerButton.addEventListener('click', () => {
        let expanded = burgerButton.getAttribute('aria-expanded') === true || false;
        burgerButton.setAttribute('aria-expanded', !expanded);
        burgerButton.classList.toggle('burger__button--open');
        menuList.classList.toggle('menu__list--open');
    })
})()