const burguer = document.getElementById('burguer');
const menuOpcoes = document.getElementById('menu_opcoes');

burguer.addEventListener('click', () => {
    menuOpcoes.style.display == 'flex'
    ? menuOpcoes.style.display = 'none'
    : menuOpcoes.style.display = 'flex';
})