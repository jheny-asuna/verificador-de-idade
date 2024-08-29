function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src','bebe.menino.png')
            } else if (idade < 13) {
                //crianca
                img.setAttribute('src','menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem.menino.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','homem.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src','bebe.menina.png')
            } else if (idade < 13) {
                //crianca
                img.setAttribute('src','menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem.menina.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','mulher.png')
            } else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }
}