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
  document.querySelectorAll('.animate-in, .animate-in-delay').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  // Load GitHub projects dynamically
  loadProjects();
});

function loadProjects() {
  const projectGrid = document.getElementById('projectGrid');
  fetch('https://api.github.com/users/adityasinghcoding/repos?sort=updated&per_page=6')
    .then(response => response.json())
    .then(repos => {
      projectGrid.innerHTML = '';
      repos
        .filter(repo => !repo.fork && !repo.archived && repo.description)
        .slice(0, 6)
        .forEach((repo, idx) => {
          const card = document.createElement('div');
          card.className = 'project-card animate-in' + (idx % 2 === 0 ? '' : ' animate-in-delay');
          card.innerHTML = `
            <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
            <p>${repo.description}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
          `;
          projectGrid.appendChild(card);
        });
      if (projectGrid.innerHTML.trim() === '') {
        projectGrid.innerHTML = '<p style="color:#888;">No public projects found. Add some on GitHub!</p>';
      }
    })
    .catch(() => {
      projectGrid.innerHTML = '<p style="color:#888;">Could not load projects. Try again later.</p>';
    });
}
