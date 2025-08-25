const form = document.querySelector('.contact-form');

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
