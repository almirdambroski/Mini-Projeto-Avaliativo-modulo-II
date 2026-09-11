export function validarDigitosIguais(numeroCartao){//Validação de cartão
    const apenasNumeros = numeroCartao.replace(/\D/g, '');// Expressão Regular para remover qualquer caractere que não seja número (espaços, traços, pontos).

    if(apenasNumeros.length !== 16) return false;//Garante que o texto tenha 16 digitos

    const primeiroDigito = apenasNumeros[0]; //Captura o primeiro caractere do número para usar como referência de comparação.


    return apenasNumeros.split('').every((digito) => digito ===primeiroDigito);
      //split(''): Transforma a string de números em um array de caracteres individuais.
      //erery: Corrige erros de digitação e percorre toda array e verifica se todos os elementos são iguais.

}