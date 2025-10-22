const toggleId = 'theme-toggle';
const toggle = document.getElementById(toggleId);
const theme = document.getElementById('themeStylesheet');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    theme.href = savedTheme;
    toggle.checked = savedTheme.includes('dark.css');
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        theme.href = 'css/dark.css';
        localStorage.setItem('theme', 'css/dark.css');
    } else {
        theme.href = 'css/light.css';
        localStorage.setItem('theme', 'css/light.css');
    }
});
