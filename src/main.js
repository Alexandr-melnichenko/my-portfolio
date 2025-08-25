import './js/header';
import './js/berries';
import './js/about-me';
import './js/portfolio';
import './js/footer';
import { updateContent, changeLanguage } from './js/i18n';
import i18next from 'i18next';

document.addEventListener('DOMContentLoaded', () => {
  updateContent();

  //   const langBtnEn = document.getElementById('lang-en');
  //   const langBtnUk = document.getElementById('lang-uk');

  const desktopLanguageSelect = document.getElementById(
    'desktop-language-select'
  );
  const mobileLanguageSelect = document.getElementById(
    'mobile-language-select'
  );

  const handleLanguageChange = selectElement => {
    if (selectElement) {
      selectElement.value = i18next.language;

      selectElement.addEventListener('change', event => {
        const selectedLang = event.target.value;
        changeLanguage(selectedLang);
        selectElement.blur();
      });
    }
  };

  //   if (langBtnEn) {
  //     langBtnEn.addEventListener('click', () => changeLanguage('en'));
  //   }
  //   if (langBtnUk) {
  //     langBtnUk.addEventListener('click', () => changeLanguage('uk'));
  //   }

  handleLanguageChange(desktopLanguageSelect);
  handleLanguageChange(mobileLanguageSelect);
});
