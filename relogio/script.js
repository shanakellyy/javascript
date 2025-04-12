function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes().toString().padStart(2, "0");
  // mostra duas casas nos minutos, adicionando 0 quando necessário

  msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>`;

  if (hora < 5) {
    //madrugada
    img.src = "img/madrugada.png";
    document.body.style.background = "black";
  } else if (hora < 12) {
    //manhã
    img.src = "img/manha.png";
  } else if (hora < 18) {
    //tarde
    img.src = "img/tarde.png";
    document.body.style.background = "#92684e";
  } else {
    //noite
    img.src = "img/noite.png";
    document.body.style.background = "#1b4959";
  }
}
