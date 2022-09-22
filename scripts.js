
var arrayDesejos = [];

if(localStorage.meuArr){
    arrayDesejos = JSON.parse(localStorage.getItem('meuArr'));
}

if(arrayDesejos.length !== 0){
    retornaSoma();
}

listar();

//Classe do objeto utilizado
class Gastos {
    constructor(){
        this.id = 1;
        this.edicao = null;
    }
}

var gastos = new Gastos();

//Salva os dados
function salvar(){
    let gasto = getDados();

    if(validaValores(gasto)){
        if(gastos.edicao == null){
            add(gasto);
        }
        else{
            atualizarDados(gastos.edicao, gasto);
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

        if(localStorage.meuArr){
            arrayDesejos = JSON.parse(localStorage.getItem('meuArr'));
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
function validaValores(gasto){
    let msgErro = ''
    if(gasto.nome == ''){
        msgErro += '- Informe uma descrição do gasto \n'
    }
    if(gasto.valor == ''){
        msgErro += '- Informe o valor gasto \n'
    }

    if(msgErro != ''){
        alert(msgErro);
        return false;
    }
    return true;
}

//Adiciona os dados no array
function add(gasto){
    if(localStorage.meuArr){
        arrayDesejos = JSON.parse(localStorage.getItem('meuArr'));
        gasto.id = parseInt(arrayDesejos.at(-1).id) + 1;
    }
    gasto.valor = parseFloat(gasto.valor);
    arrayDesejos.push(gasto);
    gastos.id++

    localStorage.meuArr = JSON.stringify(arrayDesejos);    
}

//Pega o objeto
function getDados(){
    let gasto = {}
        gasto.id = gastos.id;
        gasto.nome = document.getElementById('nome').value;
        gasto.valor = document.getElementById('valor').value;
    return gasto
}

//Limpa os dados dos input's
function limparDados(){
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';

    document.getElementById('btnSalvar').value = 'Adicionar';
    gastos.edicao = null;
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
    gastos.edicao = dados.id;

   document.getElementById('nome').value = dados.nome;
   document.getElementById('valor').value = dados.valor;
   document.getElementById('btnSalvar').value = 'Atualizar';
}

//Atualiza o array de dados com os novos valores
function atualizarDados(id, gasto){
    for(let i = 0; i < arrayDesejos.length; i++){
       if(arrayDesejos[i].id == id){
        arrayDesejos[i].nome = gasto.nome;
        arrayDesejos[i].valor = gasto.valor;
       }
    }
}

//Exclui o objeto de acordo com o id
function excluir(id){
    alert('Deseja realmente Excluir?')
    let tbody = document.getElementById('tbody');
    for(let i = 0; i < arrayDesejos.length; i++){
        if(arrayDesejos[i].id == id){
            arrayDesejos.splice(i, 1);
            tbody.deleteRow(i);
        }
    }
}