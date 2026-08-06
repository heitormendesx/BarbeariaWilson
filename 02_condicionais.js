/**
 * EXERCÍCIO 2: Condicionais (if / else if / else)
 * 
 * Pergaminho de Missão:
 * Você está no campo de batalha e precisa tomar decisões rápidas com base no seu
 * nível de chakra e na força do inimigo.
 * 
 * Instruções:
 * Complete a função 'avaliarCombate' de modo que:
 * 1. Se 'chakra' for menor que 20, retorne: "Recuar e recuperar chakra!"
 * 2. Se o 'rankInimigo' for igual a "S", retorne: "Inimigo muito forte! Chamar reforços da equipe!"
 * 3. Se o 'rankInimigo' for igual a "A", retorne: "Usar jutsu especial de ataque!"
 * 4. Para qualquer outro caso, retorne: "Atacar com kunai!"
 */

function avaliarCombate(chakra, rankInimigo) {
    // TODO: Escreva seu código aqui usando estruturas if / else if / else
    if(chakra<20){
        return "Recuar e recuperar chakra!"
    }else if (rankInimigo=="S"){
        return"Inimigo muito forte!"
    }else if(rankInimigo=="A"){
        return"Usar jutsu especial de ataque!"
    }else{
        return"Atacar com kunai!"
    }

    
    
}
