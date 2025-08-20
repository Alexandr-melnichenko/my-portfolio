document.addEventListener('DOMContentLoaded', () => {
  const readMoreSkillsBtn = document.getElementById('moreSkillsBtn');
  const hiddenSkills = document.getElementsByClassName('extended-box');

  readMoreSkillsBtn.addEventListener('click', () => {
    hiddenSkills.classList.toggle('visible-skills');

    if (hiddenSkills.classList.contains('visible-skills')) {
      readMoreSkillsBtn.textContent = 'HIDE';
    } else {
      readMoreSkillsBtn.textContent = 'MORE';
    }
  });
});
