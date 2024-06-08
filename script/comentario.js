var div = document.querySelector("div.comentarios");

const txtAreaComentario = document.querySelector(".txtArea_comentario");

function salvarComentario() {
    const conteudoComentario = txtAreaComentario.value;

    var comentario = document.createElement('p');
    comentario.classList.add("comentario_salvo");
    comentario.textContent = conteudoComentario;

    const comentariosSalvos = document.querySelector("span");
    comentariosSalvos.appendChild(comentario);
    
    txtAreaComentario.value = "";
};

