import { service } from "../service/service.js";
const criaNovaLinha = (nome, valor, descricao, imagem, id) => {
    const linhaNovoProduto = document.createElement('li');
    linhaNovoProduto.classList.toggle('galeria__lista-produto');
        const conteudo = `
            <img src="../img/${imagem}" alt="">
            <h5>${nome}</h5>
            <h4>R$ ${valor}</h4>
            <p style=display:none;>${descricao}</p>
            <a href="../produto.html">Ver produto</a>
       `
    linhaNovoProduto.innerHTML = conteudo;
    linhaNovoProduto.setAttribute('data-li', id);
    return linhaNovoProduto;
};

//const lista = document.querySelector("[data-lista]");

service.listaProdutos().then( data =>{
    data.forEach(element => {
        if(element.tipo === 1){
            const ulTipo1 = document.querySelector("[data-tipo1]");
            ulTipo1.appendChild(criaNovaLinha(element.nome, element.valor, element.descricao, element.imagem, element.id));
        }else if (element.tipo === 2){
            const ulTipo2 = document.querySelector("[data-tipo2]");
            ulTipo2.appendChild(criaNovaLinha(element.nome, element.valor, element.descricao, element.imagem, element.id));
        }else{
            const ulTipo3 = document.querySelector("[data-tipo3]");
            ulTipo3.appendChild(criaNovaLinha(element.nome, element.valor, element.descricao, element.imagem, element.id));
        };    
    });
});