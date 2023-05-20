// const button = document.body.querySelector("#buttons-modal")

// const modal = document.querySelector("dialog")

// const buttonClose = document.querySelector("dialog #close")

// button.onclick = function() {
//   modal.showModal()
// }

// buttonClose.onclick = function() {
//   modal.close()
// }


const button = document.body.querySelector(".buttons-modal");

button.onclick = function() {
  // Busca o conteúdo do modal do arquivo separado
  $.get("modal.html", function(data) {
    // Cria um elemento <dialog> e adiciona o conteúdo do modal a ele
    const dialog = $("<dialog></dialog>").append(data);

    // Adiciona o elemento <dialog> à página atual
    $("body").append(dialog);

    // Exibe o modal
    dialog[0].showModal();

    // Define o evento de fechar o modal
    dialog.find("#close").click(function() {
      dialog[0].close();
      dialog.remove();
    });
  });
};
