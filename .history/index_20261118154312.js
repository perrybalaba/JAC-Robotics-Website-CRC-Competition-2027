// SideBar
const getNavBar = document.getElementsByClassName("desktop");
const getMenuSvg = getNavBar.getElementsByClassName("menu-icon");
const getSideBar = document.getElementById("sidebar")

document.addEventListener("click", () => {
    getSideBar.style.display = "flex";
})