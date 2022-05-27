function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    if(quantidade < 12){
        let varejo = quantidade * 1.30;
      console.log (`Valor ${varejo}`);
      return varejo
    }else{
        let atacado = quantidade * 1;
        console.log(`Valor ${atacado}`);
        return atacado
    }
  }