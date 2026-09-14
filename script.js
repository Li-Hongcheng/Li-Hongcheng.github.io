const root = document.documentElement;
const themeButtons = document.querySelectorAll('.themeButton');
const menuButton = document.querySelector('.menuButton');
const mobileNav = document.querySelector('.mobileNav');

function updateThemeIcons() {
  const dark = root.classList.contains('dark');
  themeButtons.forEach((button) => { button.textContent = dark ? '☾' : '☼'; });
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('hongcheng-theme', root.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcons();
  });
});

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.hasAttribute('hidden');
    mobileNav.toggleAttribute('hidden', !open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobileNav.setAttribute('hidden', '');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}

updateThemeIcons();
