
var arrayDesejos = [];

if(localStorage.meuArrDesejos){
    arrayDesejos = JSON.parse(localStorage.getItem('meuArrDesejos'));
}

if(arrayDesejos.length !== 0){
    retornaSoma();
}

listar();

//Classe do objeto utilizado
class Desejos {
    constructor(){
        this.id = 1;
        this.edicao = null;
    }
}

var desejos = new Desejos();

//Salva os dados
function salvar(){
    let desejo = getDados();

    if(validaValores(desejo)){
        if(desejos.edicao == null){
            add(desejo);
        }
        else{
            atualizarDados(desejos.edicao, desejo);
        }
    }
    listar();
    if(arrayDesejos.length !== 0){
        retornaSoma();
    }
    limparDados();
}

//Lista os dados na tabela
function listar(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0; i < arrayDesejos.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_apaga_edita = tr.insertCell();

        if(localStorage.meuArrDesejos){
            arrayDesejos = JSON.parse(localStorage.getItem('meuArrDesejos'));
        }

        td_id.innerHTML = arrayDesejos[i].id;
        td_nome.innerText = arrayDesejos[i].nome;
        td_valor.innerText = arrayDesejos[i].valor;
        
        let imagemExcluir = document.createElement('img');
        imagemExcluir.src ='images/exclui.png'
        imagemExcluir.setAttribute("onclick", "excluir("+ arrayDesejos[i].id +")");

        td_apaga_edita.appendChild(imagemExcluir);

        let imagemEditar = document.createElement('img');
        imagemEditar.src ='images/edita.png'
        imagemEditar.setAttribute("onclick", "editar("+ JSON.stringify(arrayDesejos[i]) +")");
        td_apaga_edita.appendChild(imagemEditar);
    }
}

listar();

//Valida os dados antes de salvar
function validaValores(desejo){
    let msgErro = ''
    if(desejo.nome == ''){
        msgErro += '- Informe uma descrição do desejo \n'
    }
    if(desejo.valor == ''){
        msgErro += '- Informe o valor desejo \n'
    }

    if(msgErro != ''){
        alert(msgErro);
        return false;
    }
    return true;
}

//Adiciona os dados no array
function add(desejo){
    if(localStorage.meuArrDesejos){
        arrayDesejos = JSON.parse(localStorage.getItem('meuArrDesejos'));
        desejo.id = parseInt(arrayDesejos.at(-1).id) + 1;
    }
    desejo.valor = parseFloat(desejo.valor);
    arrayDesejos.push(desejo);
    desejos.id++

    localStorage.meuArrDesejos = JSON.stringify(arrayDesejos);    
}

//Pega o objeto
function getDados(){
    let desejo = {}
        desejo.id = desejos.id;
        desejo.nome = document.getElementById('nome').value;
        desejo.valor = document.getElementById('valor').value;
    return desejo
}

//Limpa os dados dos input's
function limparDados(){
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';

    document.getElementById('btnSalvar').value = 'Adicionar';
    desejos.edicao = null;
}

//Retorna a soma dos valores
function retornaSoma() {
    let soma = 0;

    for(let i = 0; i < arrayDesejos.length; i++){
        soma = soma + parseFloat(arrayDesejos[i].valor);
    }
    document.getElementById("soma").innerHTML = soma;
}

//Edita os objetos
function editar(dados){
    desejos.edicao = dados.id;

   document.getElementById('nome').value = dados.nome;
   document.getElementById('valor').value = dados.valor;
   document.getElementById('btnSalvar').value = 'Atualizar';
}

//Atualiza o array de dados com os novos valores
function atualizarDados(id, desejo){
    for(let i = 0; i < arrayDesejos.length; i++){
       if(arrayDesejos[i].id == id){
        arrayDesejos[i].nome = desejo.nome;
        arrayDesejos[i].valor = desejo.valor;
       }
    }
    let notesEdit = JSON.parse(localStorage.getItem("meuArrDesejos"))
        .filter(item => item.id !== id)

    notesEdit.push(desejo);
    localStorage.setItem("meuArrDesejos", JSON.stringify(notesEdit));
}

//Exclui o objeto de acordo com o id
function excluir(id){
    alert('Deseja realmente Excluir?')

    let tbody = document.getElementById('tbody');
    for(let i = 0; i < arrayDesejos.length; i++){
        if(arrayDesejos[i].id == id){
            arrayDesejos.splice(i, 1);
            tbody.deleteRow(i);
            localStorage.removeItem(arrayDesejos[i]);
        }
    }
    arrayDesejos = localStorage.meuArrDesejos;
}