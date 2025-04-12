function contar() {
  var txtn = document.getElementById("num");
  var num = Number(txtn.value);
  var res = document.getElementById("res");

  res.innerHTML = "";

  if (isNaN(num)) {
    res.innerHTML = `<p>Por favor, digite um número válido.</p>`;
  } else {
    for (var i = 0; i <= 10; i += 1) {
      var r0 = i * num;
      res.innerHTML += `<p>${i} x ${num} = <strong>${r0}</strong></p>`;
    }
  }
}
