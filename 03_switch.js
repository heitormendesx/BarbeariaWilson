/**
 * EXERCÍCIO 3: Switch Case
 * 
 * Pergaminho de Missão:"Rank D: Missões comunitárias (ex: achar mascotes)."
 * O Hokage está distribuindo missões no mural. Use o switch case para retornar
 * a descrição correta de cada rank de missão.
 * 
 * Instruções:
 * Complete a função 'obterDescricaoMissao' de modo que:
 * 1. Para o rank "D", retorne: 
 * 2. Para o rank "C", retorne: "Rank C: Escolta de cidadãos e tarefas fora da vila."
 * 3. Para o rank "B", retorne: "Rank B: Combate com ninjas inimigos de baixo nível."
 * 4. Para o rank "A", retorne: "Rank A: Missão importante para a segurança da vila."
 * 5. Para o rank "S", retorne: "Rank S: Missão secreta de altíssimo risco e perigo!"
 * 6. Se não for nenhum desses ranks (default), retorne: "Rank de missão desconhecido!"
 * 
 * Dica: Não se esqueça de usar o 'break;' após cada caso para evitar comportamento inesperado.
 */

function obterDescricaoMissao(rankDaMissao) {
    let descricao;

    // TODO: Implemente o switch case aqui
    switch(rankDaMissao) {
        case "D":
         descricao = "Rank D: Missões comunitárias (ex: achar mascotes).";
        break;
        case "C":
        descricao = "Rank C: Escolta de cidadãos e tarefas fora da vila."
        break;
        case "B":
        descricao ="Rank B: Combate com ninjas inimigos de baixo nível."
        break;
        case"A":
        descricao = "Rank A: Missão importante para a segurança da vila."
        break;
        case"S":
        descricao ="Rank S: Missão secreta de altíssimo risco e perigo!"
        break;
        default:
            descricao = "Rank de missão desconhecido!"

    }


    return descricao;
}
