// SideBar
const getNavBar = document.getElementById("desktop");
const getMenuSvg = getNavBar.getElementById("menu-icon");
const getSideBar = document.getElementById("sidebar")

document.addEventListener("click", () =>{
    getSideBar.style.display = "flex";
})