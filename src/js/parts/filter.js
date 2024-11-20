import NiceSelect from '../../../node_modules/nice-select2/src/js/nice-select2';

const selector = document.querySelector('.filterSelect');

if (selector) {
  new NiceSelect(selector, {
    searchable: false,
  });

  const selectCategory = document.querySelector('.filterSelect');
  const searchInput = document.querySelector('.filterSearch');
  const faqItems = document.querySelectorAll('.faq__item');
  const notFound = document.querySelector('.notFoundFaq');

  let searchTimeout;

  function filterFaq() {
    const selectedCategory = selectCategory.value;
    const searchText = searchInput.value.trim().toLowerCase();
    let found = false;

    faqItems.forEach(item => {
      const categories = item.dataset.cats.split(',').map(cat => cat.trim());
      const content = item.textContent.toLowerCase();

      const matchesCategory =
        selectedCategory === '0' || categories.includes(selectedCategory);
      const matchesSearch = searchText === '' || content.includes(searchText);

      if (matchesCategory && matchesSearch) {
        item.classList.remove('hideFaq');
        found = true;
      } else {
        item.classList.add('hideFaq');
      }
    });

    if (!found) {
        notFound.classList.add('sgowed');
    } else {
        notFound.classList.remove('sgowed');
    }
  }

  selectCategory.addEventListener('change', filterFaq);

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterFaq, 500);
  });
}
