document.addEventListener('DOMContentLoaded', () => {
  const readMoreBtn = document.getElementById('berriesReadMoreBtn');
  const hiddenContent = document.getElementById('berriesHiddenContent');

  readMoreBtn.addEventListener('click', () => {
    hiddenContent.classList.toggle('visible');

    if (hiddenContent.classList.contains('visible')) {
      readMoreBtn.textContent = 'HIDE';
    } else {
      readMoreBtn.textContent = 'READ MORE';
    }
  });
});
