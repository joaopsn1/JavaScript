function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/foto-dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#ba4b0a'
    } else {
        // BOA NOITE!
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#252a2e'
    }
}