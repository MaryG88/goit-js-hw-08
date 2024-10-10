'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи з DOM
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Додаємо обробник події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body
  body.style.backgroundColor = randomColor;

  // Виводимо значення кольору в span
  colorSpan.textContent = randomColor;
});