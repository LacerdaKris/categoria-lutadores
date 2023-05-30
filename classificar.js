function classificar(peso1, peso2) {
  //compara se ambos os pesos estão abaixo do limite de cada categoria
  //se sim, compara se ambos também estão acima do limite da categoria anterior
  if (peso1 < 55 && peso2 < 55) {
    return "PODEM LUTAR";
  } else if (peso1 < 65 && peso2 < 65) {
    return (peso1 >= 55 && peso2 >= 55) ? "PODEM LUTAR" : "NAO PODEM LUTAR";
  } else if (peso1 < 75 && peso2 < 75) {
    return (peso1 >= 65 && peso2 >= 65) ? "PODEM LUTAR" : "NAO PODEM LUTAR";
  } else if (peso1 < 85 && peso2 < 85) {
    return (peso1 >= 75 && peso2 >= 75) ? "PODEM LUTAR" : "NAO PODEM LUTAR";
  } else if (peso1 >= 85 && peso2 >= 85) {
    return "PODEM LUTAR";
  } else {
    return "NAO PODEM LUTAR";
  }
}

var peso1 = 60;
var peso2 = 64;

var verificaCategorias = classificar(peso1, peso2);
console.log(verificaCategorias);


//classificar por diferença de peso máxima de 5kg com entrada da função sendo um array
function diferencaMaxima(pesos) {
  //itera no array dos pesos pelo índice e compara diferença de peso
  var diferenca = pesos[0] - pesos[1];
  if (diferenca > 5 || diferenca < -5) {
    return "NÃO PODEM LUTAR";
  } else {
    return "PODEM LUTAR";
  }
}

var pesos = [50, 56];

var verificador = diferencaMaxima(pesos);
console.log(verificador);
