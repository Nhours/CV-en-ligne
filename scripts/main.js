const btnToggle = document.getElementById('btn-toggle');

btnToggle.addEventListener('click', () => {

  const body = document.body;

  if(body.classList.contains('dark')) {
    body.classList.add('light')
    body.classList.remove('dark')
    btnToggle.innerHTML = "Go dark"

  } else if (body.classList.contains('light')) {
    body.classList.add('dark')
    body.classList.remove('light')
    btnToggle.innerHTML = "Go light"

  }

})

const dropdown = document.querySelector('.dropdown');
const dropdownWindow = document.querySelector('.dropdown__window')

dropdown.addEventListener('click', (event) => {
  dropdownWindow.classList.toggle('dropdown__window--active');
});

dropdown.addEventListener('blur', (event) => {
  dropdownWindow.classList.remove('dropdown__window--active');
});