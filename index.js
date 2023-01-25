function miniMaxSum(lst){
  let soma = 0;
  let minSoma = 0;
  let maxSoma = 0;
  let valores = [];

  for (let i = 0; i < lst.length; i++) {
    for (let j = 0; j < lst.length; j++) {
      if (j != i) {
        soma += lst[j];
      }
    }
    valores.push(soma);
    soma = 0;
  }

  minSoma = valores[0];

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] < minSoma) {
      minSoma = valores[i];
    }
    if (valores[i] > maxSoma) {
      maxSoma = valores[i];
    }
  }
  return [minSoma, maxSoma];
}