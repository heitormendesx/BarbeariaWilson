/**
 * EXERCÍCIO 7: Promises (Tema Copa do Mundo)
 * 
 * Pergaminho de Missão:
 * Aprender a trabalhar com assincronismo em JavaScript usando Promises.
 * Vamos simular lances de uma grande final da Copa do Mundo!
 * 
 * Instruções:
 * 1. Complete a função 'checarVAR' para retornar uma Promise que:
 *    - Se 'posicaoLegal' for true, resolve com a string "Gol confirmado!"
 *    - Se 'posicaoLegal' for false, rejeita com a string "Impedimento detectado!"
 * 
 * 2. Complete a função 'baterPenaltiCopa' para retornar uma Promise que:
 *    - Use setTimeout de 500ms para simular a tensão do chute.
 *    - Se o 'canto' for igual a "canto", resolve com a string "GOOOOOL! Bola no ângulo!"
 *    - Se for qualquer outra coisa (como "meio"), rejeita com a string "DEFENDEU! O goleiro salvou!"
 * 
 * 3. Complete a função 'obterDadosDoJogador' para realizar um fetch na URL:
 *    ``https://jsonplaceholder.typicode.com/users/${idJogador}
 *    - Converta a resposta para JSON usando .json()
 *    - Retorne uma Promise (encadeando .then()) que resolve no formato: { nome: dados.name, clube: dados.company.name }
 */

function checarVAR(posicaoLegal) {
    // TODO: Retorne uma Promise que resolva ou rejeite com base no parâmetro
    return new promisse((resolve, reject)=>{
        if(posicaoLegal){
            resolve("gol confirmado");
        } else {
             reject("inpedimento detectado");
        }
    });
}

function baterPenaltiCopa(canto) {
    // TODO: Retorne uma Promise usando setTimeout de 500ms para resolver ou rejeitar
    return new Promisse ((resolve, reject)=>{
        setTimeout(()=>{
                if (conto === "canto"){
                    resolve("GOOOOOL! BOLA NO ANGULO!");
                } else {
                    reject("DEFENDEU! o goleiro salvou!");
                }
    },500);
});
}

function obterDadosDoJogador(idJogador) {
    // TODO: Use fetch() com encadeamento de .then() para buscar e retornar os dados do jogador
    return fecth (`https://jsonplaceholder.typicode.com/users/${idJogador}`)
    .then(reponse => Response.json())
    .yhen(dados => {
        return {
            nome: dados.nome,
            clube: dados.company .nome
        };
        );
}
