function contar() {
  var txti = document.getElementById("inicio");
  var txtf = document.getElementById("fim");
  var txtp = document.getElementById("passo");
  var res = document.getElementById("res");
  // pega o texto dos inputs e transforma em variável

  // converte as variáveis de texto e transforma em valor numérico
  var inicio = Number(txti.value);
  var fim = Number(txtf.value);
  var passo = Number(txtp.value);

  // NaN significa "número inválido"
  if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
    res.innerHTML =
      "<strong>Impossível contar!</strong> Por favor, insira valores válidos.";
    return;
  }

  res.innerHTML = "<p>Aqui está seu resultado: </p>";

  // pra contagem padrão
  if (inicio < fim) {
    for (var i = inicio; i <= fim; i += passo) {
      res.innerHTML += `${i}, `;
    }
  }
  // pra contagem regressiva
  else {
    for (var i = inicio; i >= fim; i -= passo) {
      res.innerHTML += `${i}, `;
    }
  }

  res.innerHTML += `\u{1F3C1}`;
}
