// Exemplos de Códigos e para que serve.

// ++ operaçao de incremento
// -- operação de decréscimo 
// == operação de igualdade de valor
// === operacão de igualdade de valor e tipo

// Exemplos de variaveis
var ex1 = "#";
const ex2 = 8;
let ex3 = []; // temos um array como valor nesta variavel

const title = " Professor "
function demo(name) {
    return title + name;
}
demo("Naomi")
/* Exemplo de função, onde a função 'demo' retorna o valor da variavel 'title' concatenando (sinal de +) com o parametro (name) */

function getName() {
    const name = "Camper cat";
    return name;
  }
  
  console.log(getName()); // "Camper cat"
  
  const capturedReturnValue = getName();
  console.log(capturedReturnValue); // "Camper cat"
  
  console.log(name); // reference error
/* Variaveis feitas dentro de uma função não pode ser utilizada fora da função. Somente se chamar ou capturar o valor que retorna da função */

function padRow(name) {
    const test = "Testing";
    console.log("This works!")
    return test;
    console.log("This works!") // não será executado
}
/* Uma coisa importante a saber sobre a palavra-chave de 'return' é que ela não apenas define um valor a ser retornado da sua função, mas também interrompe a execução do seu código dentro de uma função ou instrução de bloco. Isso significa que qualquer código após uma declaração de retorno não será executado.*/

for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}
/* Exemplo de loop, enquanto a variavel 'i' for menor que 5 ira adicionar mais 1 ate chegar ou 5 */

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}
/* Aqui usamos o .repeat() para repetir um padrão na função. Nesse exemplo criará um espaço em branco antes e depois do objeto "character" e tambem aumentará a quantidade de espaços em brancos dependendo de quantos "character" tiver em cada linha*/

"\n"
// Significa quebra de linha

if (true) {
    console.log("Condição é verdadeira")
}
/* O texto aparece por conta de ser uma condição verdadeira (true).
*/

if (false) {
    console.log("Condição é falsa")
}
/* O texto não irá aparecer por que a condição será falsa (false). Valores que tambem podem ser usados para declarar como falso são: " ", 0, null, undefined e NaN. (Colocar "false" como string tranforma em true) 
*/

if (condition) {
    // Este código será executado se a condição for verdadeira
  } else if (condition2) {
    // Este código será executado se a primeira condição for falsa
  } else {
    // Este código será executado 
    // Se a primeira e a segunda condições forem falsas
  }
/* Além das declarações IF, o JavaScript também possui declarações else if que faz com que declarações permitirem verificar várias condições em um único bloco de código. Se a primeira condição for falsa, o JavaScript verificará a próxima condição na cadeia.
Se a segunda condição for falsa, o JavaScript verificará a terceira condição e assim por diante.
*/

function ex4(exNumber, exCount) {
  return " ".repeat(exCount - exNumber) + ex1.repeat(2 * exNumber - 1) + " ".repeat(exCount - exNumber);
}
for (let i = 1; i <= ex2; i++) {
  ex3.push(ex4(i, ex2));
}
/* Aqui temos um metodo para empurrar um valor em um array. .push() está empurrando o valor da função ex4 dentro do array ex3.
*/

const contingdown = [2, 1, 0];
const newLength = Countdown.unshift (3);
console.log (Countdown); // [3, 2, 1, 0]
console.log (newLength); // 4
/* O método .unshift() de um array permite adicionar um valor ao início do array, diferentemente .push() que adiciona o valor no final do array. .unshift() retorna o novo comprimento da matriz em que foi chamado.
*/

const numeros1 = [1, 2, 3]
numeros1.pop(); // [1, 2]
// O método .pop() remove o ultimo elemento do array

const numeros2 = [1, 2, 3];
numeros2.shift(); // [2, 3]
// O método .shift() diferente do .pop() remove o primeiro



function shuffleArray(array) {
  let shuffled = array.slice(); // Faz uma cópia do array original
  for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // Pega um índice aleatório
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
  }
  return shuffled;
}

//Para randomizar um array em JavaScript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray(numbers));// Exemplo de saída: [4, 1, 9, 6, 2, 7, 5, 3, 8]
/* Fisher-Yates É um código um pouco maior, mas é justo e eficiente para	embaralhar arrays completamente*/

let shuffled = numbers.sort(() => Math.random() - 0.5);
console.log(shuffled); // Exemplo de saída: [3, 9, 6, 1, 5, 8, 4, 2, 7]
/* .sort() com Math.random() Faz pequenos embaralhamentos rápidos sendo	simples e curto, mas	pode não ser totalmente aleatório.*/

let colors = ["red", "blue", "green", "yellow", "purple"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor); /* Exemplo de saída: "green"
// Math.random() Para escolher um item aleatório dendo	muito simples e rápido,	não embaralha o array*/