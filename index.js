document.getElementById('toggleButton').addEventListener('click', function () {
    const stateList = document.querySelectorAll('.state-list li');
    const button = document.getElementById('toggleButton');
    const hiddenStates = document.querySelectorAll('.state-list li:not(.visible)');

    if (button.textContent === 'Show More') {
      hiddenStates.forEach(li => li.classList.add('visible'));
      button.textContent = 'Show Less';
    } else {
      stateList.forEach((li, index) => {
        if (index >= 8) li.classList.remove('visible');
      });
      button.textContent = 'Show More';
    }
  });