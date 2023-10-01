// Znajdź wszystkie elementy li.item wewnątrz ul#categories
const categoryItems = document.querySelectorAll('#categories .item');

// Wyświetl liczbę kategorii w konsoli
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  // Dla każdego elementu li.item, znajdź tytuł kategorii (tekst w tagu h2)
  const categoryName = item.querySelector('h2').textContent;
  // Znajdź liczbę elementów li w kategorii (zagnieżdżone elementy li)
  const elementsCount = item.querySelectorAll('ul li').length;

  // Wyświetl informacje w konsoli
  console.log(`
Category: ${categoryName}
Elements: ${elementsCount}
  `);
});
