const button = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');
button.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'CLOSE' : 'MENU';
});
document.querySelectorAll('.site-header nav a').forEach(link => link.addEventListener('click', () => { header.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.textContent='MENU'; }));
