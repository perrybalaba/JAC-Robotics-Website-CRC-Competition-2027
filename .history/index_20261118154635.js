// SideBar
const getNavBar = document.querySelector("desktop");
const getMenuSvg = getNavBar.querySelector("menu-icon");
const getSideBar = document.getElementById("sidebar")

getMenuSvg.addEventListener("click", () => {
    getSideBar.style.display = "flex";
})