const statusElement = document.getElementById('status');
const toggleModeButton = document.getElementById('toggle-mode');
const changeImageButton = document.getElementById('change-image');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

changeImageButton.addEventListener('click', () => {
  alert('Tämä on paikka kuvan vaihtamiselle.');
});
