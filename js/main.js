"use strict";function changeStateFilter(){var e=document.querySelectorAll(".catalog-filter--menu-btn");e&&e.forEach((function(t){t.addEventListener("click",(function(t){var c=t.currentTarget,o=c.closest(".catalog-filter__item").querySelector(".catalog-filter--menu-dropdown");e.forEach((function(e){e!==c&&e.classList.remove("active")})),o&&o.classList.toggle("active"),c.classList.add("active")}))}))}changeStateFilter();try{var checkbox=document.querySelectorAll(".catalog-prod .checkbox__field");checkbox.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.toggle("checked")}))}))}catch(e){}var checkboxes=document.querySelectorAll("[data-dropdown] .checkbox input");checkboxes.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget,c=t.closest(".filter-prod__dropdown").querySelector("[data-btn-dropdown] span"),o=t.closest(".filter-prod__dropdown").querySelectorAll("[data-dropdown] .checkbox input"),n=t.closest(".filter-prod__dropdown").querySelector("[data-dropdown] .filter-prod--clear"),r=0;n.addEventListener("click",(function(){o.forEach((function(e){return e.classList.remove("checked")})),c.innerText="(выбрано 0)"})),e.currentTarget.classList.contains("checked")?t.classList.remove("checked"):t.classList.add("checked"),o.forEach((function(e){e.classList.contains("checked")&&r++})),c.innerText="(выбрано ".concat(r,")"),0===r&&(c.innerText="(выбрано 0)")}))}));var btnFilter=document.querySelector(".catalog__filter"),menu=document.querySelector(".catalog-filter"),bntMenuclose=document.querySelector(".catalog-filter__btn-close"),overlay=document.querySelector(".overlay");function toggleOverlay(e){e.classList.contains("active")?(e.classList.remove("active"),overlay.classList.remove("active"),document.body.style.overflow="initial"):(e.classList.add("active"),overlay.classList.add("active"),document.body.style.overflow="hidden")}function togglePopupClick(e,t){e.addEventListener("click",(function(){toggleOverlay(t)}))}function changeStateDropdown(e,t,c){var o=document.querySelectorAll(e),n=document.querySelectorAll(t);o&&(o.forEach((function(e,c){e.addEventListener("click",(function(e){var c=e.currentTarget.parentNode.querySelector(t);c&&c.classList.toggle("active")}))})),window.addEventListener("click",(function(e){e.target.closest(".filter-prod__dropdown")||n.forEach((function(e){e.classList.remove("active")}))})))}btnFilter&&bntMenuclose&&menu&&overlay&&(togglePopupClick(btnFilter,menu),togglePopupClick(bntMenuclose,menu),togglePopupClick(overlay,menu)),changeStateDropdown("[data-btn-dropdown]","[data-dropdown]");var vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"));var giftSvg=document.querySelector(".catalog-prod__wrap-svg"),giftBlockText=document.querySelector(".catalog-prod__gift-wrap");giftSvg&&giftBlockText&&giftSvg.addEventListener("click",(function(e){e.currentTarget.classList.toggle("open"),giftBlockText.classList.toggle("open")})),$(document).ready((function(){$("select").niceSelect()}));var swiperProduction=new Swiper(".sw-catalog-banner",{slidesPerView:1,speed:1e3,autoplay:{delay:5e3}});swiperProduction=new Swiper(".sw-prod",{slidesPerView:1,speed:600,navigation:{nextEl:".sw-prod-btns__next",prevEl:".sw-prod-btns__prev"},thumbs:{swiper:{el:".sw-mini-prod",spaceBetween:9,breakpoints:{320:{slidesPerView:3}}}},breakpoints:{320:{pagination:{el:".sw-prod__pagination",type:"bullets",clickable:!0}},610:{pagination:{el:""}}}});function cnageStateTabsProd(){var e=document.querySelectorAll("[data-tabs-prod]"),t=document.querySelectorAll("[data-content-prod");e&&t&&e.forEach((function(c,o){c.addEventListener("click",(function(c){var n=c.currentTarget;e.forEach((function(e,c){e!==n&&(e.classList.remove("active"),t[c]&&t[c].classList.remove("active"))})),t[o]&&t[o].classList.add("active"),n.classList.add("active")}))}))}function changeStateTooltip(){var e=document.querySelectorAll(".accessories__btn-tooltip"),t=document.querySelectorAll(".accessories__tooltip"),c=document.querySelectorAll(".accessories__tooltip-btn-close");e&&t&&c&&(e.forEach((function(c){c.addEventListener("click",(function(c){var o=c.currentTarget,n=o.closest(".accessories__elem").querySelector(".accessories__tooltip");e.forEach((function(e,c){e!==o&&(e.classList.remove("active"),t[c]&&t[c].classList.remove("active"))})),n&&n.classList.add("active"),o.classList.add("active")}))})),c.forEach((function(c){c.addEventListener("click",(function(){e.forEach((function(e,c){e.classList.remove("active"),t[c]&&t[c].classList.remove("active")}))}))})))}cnageStateTabsProd(),changeStateTooltip();