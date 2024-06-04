const fileInput = document.querySelector('#imagem');
const salvarPublicacao = document.querySelector('button');

fileInput.addEventListener('change', (event) => {
    file = event.target.files[0];
});

salvarPublicacao.addEventListener('click', (event) => {
    event.preventDefault();

    const form = document.querySelector('#publicacao');
    var image = new Image();
    image.src = "https://www.gnrambiental.com.br/noticias/wp-content/uploads/2019/02/alternativa_de_reciclagem_01.png"

    image.onload = function() {
        localStorage.setItem("Image", image.src);
    }

    const nomeChave = 'publicação';
    const dados = {
        titulo: form.titulo.value,
        texto: form.texto.value,
        autor: form.autor.value,
        data: form.data.value,
        email: form.email.value
    }
    if (window.localStorage) {
        let publicacao = JSON.stringify(dados);
        localStorage.setItem(nomeChave, publicacao);
    } else {
        alert("Local Storage indisponível");
    }
    location.reload();
});

