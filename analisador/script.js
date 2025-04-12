// Pegando os elementos do HTML e armazenando em variáveis
var num = document.getElementById("num"); // Campo de entrada do número
var lista = document.getElementById("lista"); // Lista de números adicionados
var res = document.getElementById("res"); // Div onde os resultados serão exibidos

var valores = []; // Array que armazena os números adicionados

// Função para verificar se o número está entre 1 e 100
function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// Função para verificar se o número já está na lista
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

// Função para adicionar um número à lista
function adicionar() {
  if (isNum(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value)); // Adiciona o número ao array

    var item = document.createElement("option"); // Cria um novo elemento <option>
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item); // Adiciona o <option> na lista

    res.innerHTML = ""; // Limpa o resultado ao adicionar um novo número
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }
  num.value = ""; // Limpa o campo de entrada
  num.focus(); // Mantém o cursor no campo de entrada
}

// Função para finalizar e exibir os resultados
function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let tot = valores.length; // Quantidade de números cadastrados
    let maior = valores[0]; // Assume que o primeiro número é o maior
    let menor = valores[0]; // Assume que o primeiro número é o menor
    let soma = 0; // Soma de todos os números
    let media = 0; // Média dos números

    // Percorre a lista de valores para encontrar maior, menor e somar tudo
    for (let pos in valores) {
      soma += valores[pos]; // Soma os valores
      if (valores[pos] > maior) maior = valores[pos]; // Atualiza o maior valor
      if (valores[pos] < menor) menor = valores[pos]; // Atualiza o menor valor
    }
    media = soma / tot; // Calcula a média

    // Exibe os resultados na div "res"
    res.innerHTML = "";
    res.innerHTML += `<p>Ao <strong>todo</strong>, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O <strong>maior</strong> valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O <strong>menor</strong> valor informado foi ${menor}</p>`;
    res.innerHTML += `<p><strong>Somando</strong> todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A <strong>média</strong> dos valores digitados é ${media}.</p>`;
  }
}

// Adicionando um evento para capturar a tecla "Enter" no campo de entrada
num.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Impede o comportamento padrão do Enter (submeter um formulário, por exemplo)
    adicionar(); // Chama a função adicionar()
  }
});
