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
    const result = await response.text();

    if (response.ok) {
      showToast(result, 'success');
      form.reset();
    } else {
      showToast(result, 'error');
    }
  } catch (error) {
    showToast('Помилка відправки. Спробуйте ще раз.', 'error');
    console.error('Error:', error);
  }
});

function showToast(message, type) {
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
