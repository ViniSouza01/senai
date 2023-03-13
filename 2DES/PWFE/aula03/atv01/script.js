var body = document.querySelector('body')

function claro() {
    body.classList.remove('dark')
    body.classList.remove('gray')
}

function escuro() {
    body.classList.add('dark')
}

function cinza() {
    body.classList.add('gray')
}