function colores (){
    let color = document.getElementById('color').value
    let body = document.getElementById('body')
    let dato = document.getElementById('dato')

    body.style.backgroundColor = color
    dato.innerHTML = color
}