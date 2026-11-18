// SideBar
const getMenuSvg = document.getElementById('menu-icon');
const getCloseSvg = document.getElementById('close-icon');
const getSideBar = document.querySelector('#sidebar')

// Open SideBar
getMenuSvg.addEventListener('click', () => {
    getSideBar.style.display = 'flex';
});

// Close SideBar
getCloseSvg.addEventListener('click', () => {
    getSideBar.style.display = 'none';
})