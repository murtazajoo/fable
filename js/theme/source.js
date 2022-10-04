
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

let btns = document.querySelectorAll(".grid a")
function theme() {
  let themes = localStorage.getItem('theme');

  if (themes == "dark") {
    document.documentElement.style.setProperty('--main', '#F9F6EE');
    document.documentElement.style.setProperty('--secondary', '#36454F');
    document.querySelectorAll('.box')[0].style.backgroundColor = "#36454F"
    document.querySelectorAll('.box')[1].style.backgroundColor = "#36454F"
    themeBox.checked = "checked"

    btns.forEach((btn) => { btn.style.backgroundColor = "teal" })

  } else {
    document.documentElement.style.setProperty('--main', '#02343a');
    document.documentElement.style.setProperty('--secondary', '#53d0de6d');
    document.querySelectorAll('.box')[0].style.backgroundColor = "rgba(255, 255, 255, 0.498)"
    document.querySelectorAll('.box')[1].style.backgroundColor = "rgba(255, 255, 255, 0.498)"
    btns.forEach((btn) => { btn.style.backgroundColor = "rgb(119, 200, 200)" })

  }
}

theme()