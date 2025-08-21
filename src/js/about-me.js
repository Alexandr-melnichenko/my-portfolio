document.addEventListener('DOMContentLoaded', () => {
  const readMoreSkillsBtn = document.getElementById('moreSkillsBtn');
  const techList = document.getElementById('techList');
  const hiddenSkills = techList.querySelectorAll('.extended-box');

  readMoreSkillsBtn.addEventListener('click', () => {
    hiddenSkills.forEach(item => {
      item.classList.toggle('visible-skills');
    });

    if (hiddenSkills[0].classList.contains('visible-skills')) {
      readMoreSkillsBtn.textContent = 'HIDE';
    } else {
      readMoreSkillsBtn.textContent = 'MORE';
    }
  });
});
