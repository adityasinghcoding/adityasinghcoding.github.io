// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  setTheme(isDark ? 'dark' : 'light');
});

// On page load, set theme from localStorage or system preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }
  // Animation triggers
  document.querySelectorAll('.animate-in, .animate-in-delay, .animate-in-delay-2').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
