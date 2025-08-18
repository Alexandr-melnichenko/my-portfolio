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
});
