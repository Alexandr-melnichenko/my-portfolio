import i18next from 'i18next';

const form = document.querySelector('.form-container');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      showToast('toastSuccess', 'success');
      form.reset();
    } else {
      showToast('toastError', 'error');
    }
  } catch (error) {
    showToast('Помилка відправки. Спробуйте ще раз.', 'error');
    console.error('toastNetworkError', error);
  }
});

function showToast(translationKey, type) {
  const message = i18next.t(translationKey);
  const toast = document.createElement('div');
  toast.classList.add('toast', `toast--${type}`);
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}
