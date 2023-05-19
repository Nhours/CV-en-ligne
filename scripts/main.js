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