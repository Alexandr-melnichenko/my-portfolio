document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btns');
  const projects = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');

      projects.forEach(project => {
        if (
          category === 'all' ||
          project.getAttribute('data-category') === category
        ) {
          project.classList.remove('hide');
        } else {
          project.classList.add('hide');
        }
      });
    });
  });

  projects.forEach(item => {
    item.addEventListener('touchstart', event => {
      projects.forEach(i => i.classList.remove('touched'));
      item.classList.add('touched');
    });
  });

  document.body.addEventListener('touchstart', event => {
    if (!event.target.closest('.portfolio-item')) {
      projects.forEach(item => item.classList.remove('touched'));
    }
  });
});
