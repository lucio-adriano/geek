const listaProdutos = () => {
    return fetch('http://localhost:3000/profile')
    .then(
        reposta => {
            return reposta.json();
        });
};

const cadastraProduto = (nome, valor, descricao, imagem, tipo) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            valor: valor,
            descricao: descricao,
            imagem: imagem,
            tipo: tipo
        })
    }).then( resposta => {
        return resposta.body
    })
};
/*
// - Esta função deleta produto não esta em uso
const removeProduto = (id) => {
    return fetch(`http://localhost:300/profile/${id}`, {
        method: 'DELETE'
    });
};
*/
export const service = {
    listaProdutos,
    cadastraProduto
 //    removeProduto
};