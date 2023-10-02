const statusSelect = document.getElementById('status-select');
const toggleModeButton = document.getElementById('toggle-mode');
const changeImageInput = document.getElementById('change-image-input');
const profileImageLabel = document.getElementById('profile-image-label');
const profileImage = document.querySelector('.profile-image');
const profileName = document.querySelector('.profile-name');
const profileContainer = document.querySelector('.profile-container');
const body = document.body;

const statusElement = document.querySelector('.profile-status p');

// Add a flag to track if the dropdown is open
let isDropdownOpen = false;

// Function to open/close the dropdown
function toggleDropdown() {
  if (isDropdownOpen) {
    statusSelect.blur(); // Close the dropdown
  } else {
    // Calculate the position relative to the Status text
    const rect = statusElement.getBoundingClientRect();
    statusSelect.style.top = rect.bottom + 'px';
    statusSelect.style.left = rect.left + 'px';
    statusSelect.style.position = 'absolute';
    statusSelect.focus(); // Open the dropdown
  }
  isDropdownOpen = !isDropdownOpen;
}

// Toggle the dropdown when the Status text is clicked
statusElement.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    toggleDropdown();
  }
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
  if (!statusSelect.contains(event.target)) {
    closeDropdown();
  }
});

// Handle the change event for the dropdown
statusSelect.addEventListener('change', () => {
  const newStatus = statusSelect.value;
  setStatus(newStatus);
  closeDropdown();
});

// Handle the click event for mobile devices
statusElement.addEventListener('touchstart', (event) => {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    toggleDropdown();
  }
});

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  updateColors(isDarkMode);
  updateContainerColor(isDarkMode);
});

// Trigger the file input when the profile image is clicked
profileImageLabel.addEventListener('click', () => {
  changeImageInput.click();
});

changeImageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    profileImage.src = imageURL;
  }
});

// Handle name editing when the user clicks on it
profileName.addEventListener('blur', () => {
  saveEditedName();
});

// Save the edited name by pressing Enter
profileName.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveEditedName();
  }
});

// Function to update font and text colors based on Dark/Light mode
function updateColors(isDarkMode) {
    requestAnimationFrame(() => {
      if (isDarkMode) {
        profileName.style.color = '#fff';
        statusElement.style.color = '#fff';
        profileName.style.backgroundColor = '#333';
      } else {
        profileName.style.color = '#000';
        statusElement.style.color = '#000';
        profileName.style.backgroundColor = '#f9f9f9';
      }
    });
  }

// Function to change container background color based on Dark/Light mode
function updateContainerColor(isDarkMode) {
  if (isDarkMode) {
    profileContainer.style.backgroundColor = '#333';
  } else {
    profileContainer.style.backgroundColor = '#f9f9f9';
  }
}

function setStatus(newStatus) {
  statusElement.textContent = `Status: ${newStatus}`;
}

function saveEditedName() {
  const newName = profileName.textContent;
  // You can save the edited name or perform other actions here.
}

// Function to close the dropdown
function closeDropdown() {
  isDropdownOpen = false;
  statusSelect.style.position = 'initial';
  statusSelect.blur();
}
