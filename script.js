
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {

  // PEGAR O VALOR DIGITADO NO INPUT 
  let valorInput = input.value;

   // SE NN FOR VAZIO, INDEFINIDO NEM NULO
  if(valorInput !== "") {

    ++contador;

    let novoItem = `<div id="${contador}" class="item">
    <div class="item-icone" onclick="marcarTarefa(${contador})">
      <i id="icone_${contador}" class="fa-solid fa-circle"></i>
    </div>
    <div class="item-nome" onclick="marcarTarefa(${contador})">
      ${valorInput}
    </div>
    <div class="item-botao">
      <button class="delete" onclick="deletar(${contador})"> <i class="fa-solid fa-trash-can"></i> Deletar</button>
    </div>
    </div>`;

    // ADD NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    // ZERAR O INPUT
    input.value=""
    input.focus();
   
  }

}

// ADICIONANDO TAREFA COM O ENTER
input.addEventListener('keyup',function(event){
  // SE TECLOU 13(ENTER)
  if(event.keyCode === 13){
    event.preventDefault();
    btnAdd.click();
  }
})

function deletar(id) {

  var tarefa = document.getElementById(id);
  tarefa.remove();
  console.log(tarefa)
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if(classe == "item"){
    item.classList.add('clicado');
    var icone = document.getElementById('icone_'+id);
    icone.classList.remove('fa-circle');
    icone.classList.add('fa-circle-check');
    icone.style.color="green"
    item.parentNode.appendChild(item);
  } else{
    item.classList.remove('clicado');
    var icone = document.getElementById('icone_'+id);
    icone.classList.remove('fa-circle-check');
    icone.classList.add('fa-circle');
    icone.style.color="gray"
  }
}
