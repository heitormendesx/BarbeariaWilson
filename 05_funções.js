/**
 * EXERCÍCIO 5: Funções e Arrow Functions
 * 
 * Pergaminho de Missão:
 * Criar jutsus reutilizáveis usando funções tradicionais e arrow functions modernas.
 * 
 * Instruções:
 * 1. Declare uma função tradicional chamada 'calcularDano' que receba dois parâmetros: 'forca' e 'multiplicador'.
 *    Esta função deve retornar o valor de 'forca' multiplicado por 'multiplicador'.
 * 
 * 2. Declare uma Arrow Function (função de seta) atribuída a uma constante chamada 'criarGritoDeGuerra'.
 *    Ela deve receber um parâmetro 'nomeNinja' e retornar a frase: "[NOME] vai se tornar Hokage!"
 *    Exemplo: Se o nome for "Naruto", deve retornar: "NARUTO vai se tornar Hokage!"
 *    Dica: Use .toUpperCase() para converter o nome para maiúsculo.
 */

// TODO 1: Declare a função tradicional 'calcularDano' abaixo
    function calcularDano(forca,multiplicado){
       return forca*multiplicado
    }

// TODO 2: Declare a arrow function 'criarGritoDeGuerra' abaixo
    const criarGritoDeGuerra = (nomeNinja)=>{
    return`{$nomeNinja.toUpperCase()}  vai se tornar Hokage!`;
    };
    


// --- NÃO ALTERE AS LINHAS ABAIXO ---
try {
    module.exports = {
        calcularDano: typeof calcularDano !== 'undefined' ? calcularDano : undefined,
        criarGritoDeGuerra: typeof criarGritoDeGuerra !== 'undefined' ? criarGritoDeGuerra : undefined
    };
} catch(e) {}
