document.title = 'ihsan tri'
const body = document.body

//body.append ('hello world')

//const h1 = document.createElement('h1')
//h1.textContent = 'ini dia h1'

//body.append (h1)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const newtext = document.createElement('p')
newtext.textContent = 'ihsan tri novandi'

const defaulttext = 'klik disini'
btn1.textContent = defaulttext


function clickdisini() {
    btn1.style.background = 'aqua'
    newtext.textContent = 'ihsan tri novandi'
    body.append(newtext)

}

function ubahtext() {
    btn1.textContent = 'iya disni'
}

function keluar() {
    newtext.style.color = 'blue'
    btn1.textContent = defaulttext
}
