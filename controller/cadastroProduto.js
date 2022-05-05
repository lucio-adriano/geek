import { service } from "../service/service.js";

const formulario = document.querySelector('[data-form]');
const dragArea = document.querySelector('.drag-area');
const input = document.querySelector('#botao-imagem');

let nome;
let valor;
let descricao;
let tipo;
let imagem;
let file;

input.addEventListener('change', function() {
    let imagem = document.querySelector('.imagem');
    file = this.files[0].name;
    imagem.src = '../img/'+file;
});

// Quando o arquivo está dentro da área de arrastar
dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
//    console.log('O arquivo está dentro da área de arrastar');
});

// Quando o arquivo sai da área de arrastro
dragArea.addEventListener('dragleave', () =>{
//    console.log('O arquivo fica na área de arrastar');
});

// Quando o arquivo é solto na área de arrastar
dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];
    //    console.log(file);
    displayFile();
});

function displayFile() {
    //    console.log('O arquivo é solto na área de arrastar');
    let fileType = file.type;
    //    console.log(fileType);

    let ValidExtension = ['image/jpeg', 'image/jpg', 'image/png'];

    if(ValidExtension.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result
        //    console.log(fileURL);
        let imagem = document.querySelector('.imagem');
        imagem.src = '../img/'+file.name;
        };
        fileReader.readAsDataURL(file);
    }else{
        alert('Este arquivo não é uma imagem'); //This file is not an Image
    }
};

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    nome = event.target.querySelector('[data-nome]').value;
    valor = event.target.querySelector('[data-valor]').value;
    descricao = event.target.querySelector('[data-descricao]').value;
    imagem = event.target.querySelector('[data-imagem]').attributes[2].value;
    tipo = event.target.querySelector('[data-tipo]').value;
    service.cadastraProduto(nome, valor, descricao, imagem, tipo).then(() => {
       window.location.href = '../telas/cadastroconcluido.html'
    });
});