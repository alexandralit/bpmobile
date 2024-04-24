import './assets/styles/index.css';

import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import pt from './locales/pt.json';

const locales = { de, en, es, fr, ja, pt };

document.addEventListener('DOMContentLoaded', () => {
  const defaultLang = 'en';
  const allLangs = Object.keys(locales);
  const lang = getLanguage();

  if (!!lang && allLangs.includes(lang) && lang != defaultLang) {
    localizeСontent(lang);
  } else {
    setPrice();
  }

  const subscriptionContainer = document.querySelector('[data-subscription]');
  const continueButton = document.querySelector('[data-continue-button]');
  !!subscriptionContainer && subscriptionContainer.addEventListener('click', (event) => {
    if (event.target.closest('[data-link]')) {
      const target = event.target.closest('[data-link]');

      [...subscriptionContainer.children].forEach(el => el.classList.remove('active'));

      target.classList.add('active');

      continueButton.setAttribute('href', target.dataset.link);
    }
  });
});

function getLanguage() {
  const params = new URLSearchParams(window.location.search);
  const browserLang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;

  if (params.has('lang') || !!browserLang) {
    return params.has('lang') ? params.get('lang').toLowerCase() : browserLang.split('-')[0];
  } else {
    return '';
  }
}

function localizeСontent(lang) {
  const els = [...document.querySelectorAll('[data-loc]')];

  els.forEach(el => {
    const key = el.innerHTML.replace(/\r?\n|\r/g, '').trim();

    el.innerHTML = locales[lang][key] || '';

    setPrice(el);

    el.removeAttribute('data-loc');
  });

  document.querySelector('html').lang = lang.toUpperCase();
}

function setPrice(node) {
  if (!!node) {
    node.innerHTML = node.innerHTML.replace('{{price}}', node.dataset.price);
    node.classList.remove('hidden');
  } else {
    [...document.querySelectorAll('[data-price]')].forEach(el => {
      el.innerHTML = el.innerHTML.replace('{{price}}', el.dataset.price);
      el.classList.remove('hidden');
    });
  }
}
