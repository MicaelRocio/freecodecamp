// Exemplos de Códigos e para que serve.

var ex1 = "#";
const ex2 = "#";
let ex3 = "#";
// Exemplos de variaveis

const title = " Professor "
function demo(name) {
    return title + name;
}
demo("Naomi")
// Exemplo de função, onde a função 'demo' retorna o valor da variavel 'title' concatenando (sinal de +) com o parametro (name)

function getName() {
    const name = "Camper cat";
    return name;
  }
  
  console.log(getName()); // "Camper cat"
  
  const capturedReturnValue = getName();
  console.log(capturedReturnValue); // "Camper cat"
  
  console.log(name); // reference error
// Variaveis feitas dentro de uma função não pode ser utilizada fora da função. Somente se chamar ou capturar o valor que retorna da função

function padRow(name) {
    const test = "Testing";
    console.log("This works!")
    return test;
    console.log("This works!") // não será executado
}
// Uma coisa importante a saber sobre a palavra-chave de 'return' é que ela não apenas define um valor a ser retornado da sua função, mas também interrompe a execução do seu código dentro de uma função ou instrução de bloco. Isso significa que qualquer código após uma declaração de retorno não será executado.

for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}
// Exemplo de loop, enquanto a variavel 'i' for menor que 5 ira adicionar mais 1 ate chegar ou 5

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}
// Aqui usamos o .repeat() para repetir um padrão na função. Nesse exemplo criará um espaço em branco antes e depois do objeto "character" e tambem aumentará a quantidade de espaços em brancos dependendo de quantos "character" tiver em cada linha

"\n"
// Significa quebra de linha