
let themes = localStorage.getItem('theme');

document.getElementById('logo').addEventListener('click', () => {
  let themes = localStorage.getItem('theme');

  if (themes == 'light') {
    localStorage.setItem('theme', "dark");
    theme()
  }
  else {
    localStorage.setItem('theme', "light");
    theme()
  }
})

function theme() {
  let themes = localStorage.getItem('theme');

  if (themes == "dark") {
    document.documentElement.style.setProperty('--main', '#fff');
    document.documentElement.style.setProperty('--secondary', '#36454F');

  } else {
    document.documentElement.style.setProperty('--main', '#02343a');
    document.documentElement.style.setProperty('--secondary', '#53d0de6d');
  }
}