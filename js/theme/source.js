
let themes = localStorage.getItem('theme');
let themeBox = document.getElementById('checkbox')
themeBox.addEventListener('change', () => {
  let themes = localStorage.getItem('theme');

  if (themes == 'dark') {
    localStorage.setItem('theme', "light");
    theme()
  }
  else {
    localStorage.setItem('theme', "dark");
    theme()
  }
})

function theme() {
  let themes = localStorage.getItem('theme');

  if (themes == "dark") {
    document.documentElement.style.setProperty('--main', '#fff');
    document.documentElement.style.setProperty('--secondary', '#36454F');
    themeBox.checked = "checked"

  } else {
    document.documentElement.style.setProperty('--main', '#02343a');
    document.documentElement.style.setProperty('--secondary', '#53d0de6d');
  }
}
theme()