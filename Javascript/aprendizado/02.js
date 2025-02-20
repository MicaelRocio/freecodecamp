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
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores); // Calcula a média da turma
    let studentGrade = getGrade(studentScore); // Obtém a nota do aluno
    let passed = hasPassingGrade(studentScore); // Verifica se passou

    if (passed) {
        return `Class average: ${average}. Your grade: ${studentGrade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${studentGrade}. You failed the course.`;
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));