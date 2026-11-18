// SideBar
const getMenuSvg = document.getElementById('menu-icon');
const getCloseSvg = document.getElementById('close-icon');
const getSideBar = document.querySelector('#sidebar')

getMenuSvg.addEventListener('click', () => {
    getSideBar.style.display = 'flex';
});

getCloseSvg.addEventListener('click', () => {
    getSideBar.style.display = 'none';
})