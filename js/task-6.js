function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Елементи DOM
const input = document.querySelector('.input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції div-елементів
function createBoxes(amount) {
  // Очищуємо вміст контейнера перед додаванням нових елементів
  boxesContainer.innerHTML = '';

  let size = 30; // Початковий розмір
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "5px"; // Додаємо трохи відступів між елементами
    elements.push(div);
    size += 10; // Збільшуємо розмір кожного наступного елементу на 10px
  }

  // Додаємо всі елементи до контейнера за одну операцію
  boxesContainer.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробник події для кнопки "Create"
createBtn.addEventListener('click', () => {
  const amount = Number(input.value.trim());

  // Перевіряємо чи значення в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищуємо поле введення
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Обробник події для кнопки "Destroy"
destroyBtn.addEventListener('click', destroyBoxes);