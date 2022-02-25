var menubuton = document.getElementById('menubuton')
var cancel = document.getElementById('cancel')
var hiddenmenu = document.getElementById('hiddenmenu')


menubuton.onclick = () => {
    hiddenmenu.style.right = 0
}

cancel.onclick = () => {
    hiddenmenu.style.right = '-50%'
}