'use strict';

// Отримуємо форму за допомогою класу
const form = document.querySelector('.login-form');

// Додаємо обробник події на відправку форми
form.addEventListener('submit', (event) => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо елементи форми
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return; // Завершуємо виконання, якщо поля не заповнені
  }

  // Створюємо об'єкт з введеними даними
  const formData = {
    email,
    password
  };

  // Виводимо об'єкт з даними у консоль
  console.log(formData);

  // Очищаємо поля форми
  form.reset();
});