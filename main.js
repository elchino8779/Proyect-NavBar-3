import { desplegarMenu, desplegarOptionsMenu, plegarMenu } from "./plegar-desplegar.js";

const $botonDesplegar = document.getElementById("boton-desplegar");
const $imagenBotonDesplegar = document.getElementById("imagen-boton-principal");
const $navBar = document.querySelector(".navbar");
const $botonHome = document.querySelector(".home-container");

const $botonAbout = document.querySelector(".about-container");
const $optionsAbout = document.querySelector(".options-about");

const $botonSetting = document.querySelector(".setting-container");
const $optionsSettings = document.querySelector(".options-settings");

const $botonMenu = document.querySelector(".menu-container");
const $optionsMenu = document.querySelector(".options-menu");

const $botonSocial = document.querySelector(".social-container");
const $optionsSocial = document.querySelector(".options-social");

let navPrincipalDesplegar = true;
let aboutContainerDesplegar = true;
let settingContainerDesplegar = true;
let menuContainerDesplegar = true;
let socialContainerDesplegar = true;

window.addEventListener("DOMContentLoaded", (e) => {

    $botonDesplegar.addEventListener("click", (e) => {

        if (navPrincipalDesplegar) {
            desplegarMenu($navBar);
            $imagenBotonDesplegar.classList.remove("bi-code");
            $imagenBotonDesplegar.classList.add("bi-code-slash");
            navPrincipalDesplegar = false;
        }
        else {
            plegarMenu($navBar);
            $imagenBotonDesplegar.classList.remove("bi-code-slash");
            $imagenBotonDesplegar.classList.add("bi-code");
            navPrincipalDesplegar = true;

            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;

            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;

            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;
        }
    });

    $botonHome.addEventListener("click", (e) => {
        plegarMenu($navBar);
        $imagenBotonDesplegar.classList.remove("bi-code-slash");
        $imagenBotonDesplegar.classList.add("bi-code");
        navPrincipalDesplegar = true;

        plegarMenu($optionsAbout);
        aboutContainerDesplegar = true;

        plegarMenu($optionsSettings);
        settingContainerDesplegar = true;

        plegarMenu($optionsMenu);
        menuContainerDesplegar = true;

        plegarMenu($optionsSocial);
        socialContainerDesplegar = true;
    })

    $botonAbout.addEventListener("click", (e) => {

        if (aboutContainerDesplegar) {
            desplegarOptionsMenu($optionsAbout, "170px", "300px", "170px");
            aboutContainerDesplegar = false;

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;

            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;

            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;
        }
        else {
            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

        }
    })

    $botonSetting.addEventListener("click", (e) => {

        if (settingContainerDesplegar) {
            desplegarOptionsMenu($optionsSettings, "170px", "400px", "230px");
            settingContainerDesplegar = false;

            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;

            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;
        }
        else {

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;
        }
    })


    $botonMenu.addEventListener("click", (e) => {

        if (menuContainerDesplegar) {
            desplegarOptionsMenu($optionsMenu, "170px", "400px", "320px");
            menuContainerDesplegar = false;

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;

            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;
        }
        else {
            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;

        }
    })


    $botonSocial.addEventListener("click", (e) => {

        if (socialContainerDesplegar) {
            desplegarOptionsMenu($optionsSocial, "400px", "80px", "575px");
            socialContainerDesplegar = false;

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;

            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;
        }
        else {
            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;

        }
    })


    document.addEventListener("click", (e) => {
        if (e.target.matches("html")) {

            plegarMenu($optionsSettings);
            settingContainerDesplegar = true;

            plegarMenu($optionsAbout);
            aboutContainerDesplegar = true;

            plegarMenu($optionsMenu);
            menuContainerDesplegar = true;

            plegarMenu($optionsSocial);
            socialContainerDesplegar = true;

            plegarMenu($navBar);
            $imagenBotonDesplegar.classList.remove("bi-code-slash");
            $imagenBotonDesplegar.classList.add("bi-code");
            navPrincipalDesplegar = true;
        }
    })

})















