const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  
  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
