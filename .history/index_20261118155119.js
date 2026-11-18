// SideBar
const getMenuSvg = document.getElementById('menu-icon');
const getSideBar = document.querySelector('#sidebar')

getMenuSvg.addEventListener('click', () => {
    getSideBar.style.display = 'flex';
})