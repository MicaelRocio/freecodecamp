function getAverage(scores) {
    if (scores.length === 0) return 0; // Evita divisão por zero
  
    let sum = 0;
    
    for (let score of scores) {
      sum += score; // Soma todos os scores
    }
  
    return sum / scores.length; // Divide pelo total de elementos
}
  
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Saída esperada: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Saída esperada: 85.4

  
/* 1. Verificamos se o array está vazio (scores.     length === 0), para evitar divisão por zero.*/

/* 2. Criamos a variável sum e usamos um loop for.  of para somar os elementos.*/

/* 3. Calculamos a média dividindo a soma pelo número total de elementos (scores.length).*/

/* 4. Retornamos o valor da média. */

function getGrade(score) {
    if (score.length === 100) {
        return "A++";
    } else if (score.length <= 90 , score.length >= 99) {
        return "A"; 
    } else if (score.length <= 80 , score.length >= 89) {
        return "B";  
    } else if (score.length <= 70 , score.length >= 79) {
        return "C";  
    } else if (score.length <= 60 , score.length >= 69) {
        return "D";  
    } else if (score.length <= 0 , score.length >= 59) {
        return "F";  
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));