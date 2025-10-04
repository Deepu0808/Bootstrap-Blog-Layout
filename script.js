// 🌗 Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Load saved theme
if (localStorage.getItem('theme')) {
  const savedTheme = localStorage.getItem('theme');
  body.setAttribute('data-bs-theme', savedTheme);
  icon.classList.toggle('bi-sun-fill', savedTheme === 'dark');
  icon.classList.toggle('bi-moon-fill', savedTheme === 'light');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-bs-theme', newTheme);

  // Update icon
  icon.classList.toggle('bi-sun-fill', newTheme === 'dark');
  icon.classList.toggle('bi-moon-fill', newTheme === 'light');

  // Save preference
  localStorage.setItem('theme', newTheme);
});
