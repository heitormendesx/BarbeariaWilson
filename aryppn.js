async function buscarSelecoes() {
    const resposta = await fetch("/api/seleçoes");
    const lista = await resposta.json();
    mostraSelecoes(lista);
}