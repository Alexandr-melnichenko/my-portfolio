import i18next from 'i18next';
import { updateContent } from './i18n';

document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  const readMoreBtn = document.getElementById('berriesReadMoreBtn');
  const hiddenContent = document.getElementById('berriesHiddenContent');

  readMoreBtn.textContent = i18next.t('berriesBtnReadMore');

  readMoreBtn.addEventListener('click', () => {
    hiddenContent.classList.toggle('visible');

    updateContent();

    // if (hiddenContent.classList.contains('visible')) {
    //   readMoreBtn.textContent = i18next.t('berriesBtnHide');
    // } else {
    //   readMoreBtn.textContent = i18next.t('berriesBtnReadMore');
    // }
  });
});
