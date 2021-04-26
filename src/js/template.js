import menu from "../menu.json";
import menuCardsTpl from "../templates/menu-cards.hbs";

const menuMarkUp = document.querySelector('.js-menu');
menuMarkUp.insertAdjacentHTML('beforeend', menuCardsTpl({menu}));