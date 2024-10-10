'use strict';

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// Додаємо обробник події на інпут
inputEl.addEventListener('input', () => {
  // Очищаємо введений текст від зайвих пробілів
  const inputValue = inputEl.value.trim();
  
  // Якщо інпут порожній, показуємо "Anonymous", інакше показуємо введений текст
  outputEl.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});