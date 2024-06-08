const txtAreaComentario = document.querySelector(".txtArea_comentario");

txtAreaComentario.addEventListener('click', event => {

    const conteudoComentario = txtAreaComentario.textContent;

    console.log(conteudoComentario);
});

