
export function desplegarMenu(menu) {

    menu.style.width = "155px";
    menu.style.borderTop = "3px solid #15eb18"
    menu.style.borderRight = "3px solid #15eb18"
    menu.style.borderBottom = "3px solid #15eb18"

    setTimeout(() => {
        menu.style.height = "60vh";
    }, 500);

}



export function desplegarOptionsMenu(menu, width, height, top) {

    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.top = top;
    menu.style.border = "3px solid #15eb18";
    menu.style.width = width;

    setTimeout(() => {
        menu.style.height = height;
    }, 500);

}



export function plegarMenu(menu) {

    menu.style.height = "0px";

    setTimeout(() => {
        menu.style.width = "0px";
    }, 500);

    setTimeout(() => {
        menu.style.border = "none"
    }, 1000);

}