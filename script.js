// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    // Save preference
    if(document.body.classList.contains('light')){
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
// Load saved theme
if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
}
