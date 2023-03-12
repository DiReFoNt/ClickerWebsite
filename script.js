'use strict';

const buttonImageClick = document.querySelector('.clicker-button'),
    counter = document.querySelector('.statistic-text'),
    buttonClickPerSecond = document.querySelector('.click-per-second'),
    buttonBuyDamage = document.querySelector('.damage'),
    buttonBuyAutoClick = document.querySelector('.autoclick');

let money = 0,
    autoClickStep = 1,
    damage = 1,
    priceDamage = 75,
    priceASP = 1500;

function checkPriseButton(button, price) {
    if (money >= price) {
        button.classList.add('active');
        console.log('true');
    }
    else {
        button.classList.remove('active');
    }
}

buttonImageClick.addEventListener('click', () => {
    money += damage;
    counter.innerHTML = `${money}`;
    checkPriseButton(buttonBuyDamage, priceDamage);
    checkPriseButton(buttonBuyAutoClick, priceASP);
});


buttonBuyDamage.addEventListener('click', (event) => {
    event.stopPropagation();

    if (money >= priceDamage) {
        money -= priceDamage;
        damage += 1;
        priceDamage *= 2;
        counter.innerHTML = `${money}`;
        buttonBuyDamage.innerHTML = priceDamage;
        checkPriseButton(buttonBuyDamage, priceDamage);
    }
    else {
        alert('YOU NEED MORE CLICKS');
    }
});

buttonBuyAutoClick.addEventListener('click', (event) => {
    event.stopPropagation();
    if (money >= priceASP) {
        money -= priceASP;
        setInterval(function () {
            buttonImageClick.click();
        }, 1000);
        counter.innerHTML = `${money}`;
        checkPriseButton(buttonBuyAutoClick, priceASP);
    }
    else {
        alert('YOU NEED MORE CLICKS');
    }
});

