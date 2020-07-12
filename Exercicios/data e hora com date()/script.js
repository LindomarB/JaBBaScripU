function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
    //var hora = 12
    var min = data.getMinutes()
    msg.innerHTML= `Agora são ${hora}:${min} horas`
    if (hora >=0 && hora <12){
        //bom dia
        img.src="morning.png"
        window.document.body.style.background="#9BA228"
    }else if(hora>=12 && hora <=18){
        //boa tarde
        img.src="tarde2.png"
        window.document.body.style.background="#FDBC15"
    }else{
        //boa noite
        img.src="night.png"
        window.document.body.style.background="#323541"
    }


}