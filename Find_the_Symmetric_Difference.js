function sym() {
    const args = [];
    //Fazendo uso do 'arguments' do Js para pegar qualquer parametro passado na chamada da função;
    for(let i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
    }
    //Essa função irá atender o pedido da questão, tratando 2conjuntos por vez
    function symSets(array1,array2){
        const result = [];
        array1.forEach(element => {
            !array2.includes(element) && !result.includes(element) ? result.push(element):null;
        });
        array2.forEach(element => {
            !array1.includes(element) && !result.includes(element) ? result.push(element):null;
        });
        
        return result;
    }

    //O reduce ele está passando os valores de args como parametros para função symsets 
    return args.reduce(symSets);
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));