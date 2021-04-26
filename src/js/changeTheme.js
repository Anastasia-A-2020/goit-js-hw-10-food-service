const href = {
    checkbox: document.querySelector('#theme-switch-toggle'),
};
console.log(href.checkbox);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const defaultTheme = localStorage.getItem('theme');
defaultTheme
? document.body.classList.add(defaultTheme)
    : document.body.classList.add(Theme.LIGHT);
if (document.body.classList.contains(Theme.DARK)) {
        href.checkbox.setAttribute('checked', true);
    }

href.checkbox.addEventListener('change', onChangeTheme);

function onChangeTheme(e){
    e.preventDefault();
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);
    saveChosenTheme();
}

function saveChosenTheme() {
    const chosenTheme = document.body.classList.value;
    localStorage.setItem('theme', chosenTheme);
}

