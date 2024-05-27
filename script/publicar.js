const fileInput = document.querySelector('#imagem');
const salvarPublicacao = document.querySelector('button');

fileInput.addEventListener('change', (event) => {
    file = event.target.files[0];
    console.log(file);
    //console.log(`O nome do arquivo é: ${file.name}`);
    //console.log(`O tamanho do arquivo é: ${file.size}`);
});

salvarPublicacao.addEventListener('click', (event) => {
    event.preventDefault();

    const form = document.querySelector('#publicacao');

    const nomeChave = 'publicação';
    const dados = {
        nome_imagem: file.name,
        tamanho_imagem: file.size,
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

});

/* function adicionaDadosNaPostagem(dados) {
    // Tag div do texto_post
    var divTexto_post = document.createElement('div');
    divTexto_post.classList.add("texto_post");

    // Tag h2 do título
    var titulo = document.createElement("h2");
    titulo.textContent = dados.titulo;
    titulo.classList.add("titulo");
    divTexto_post.appendChild(titulo);

    // Tag p do texto
    var texto = document.createElement("p");
    texto.textContent = dados.texto;
    texto.classList.add("texto");
    divTexto_post.appendChild(texto);

    // Tag div da imagem
    var divImagem = document.createElement("div");
    divImagem.classList.add("imagem");

    // Tag img da imagem_post
    var imgImagem_post = document.createElement("img");
    imgImagem_post.textContent = dados.nome_imagem;
    imgImagem_post.classList.add("imagem_post");
    divImagem.appendChild(imgImagem_post);

    // Tag section da postagem
    var sectionPostagem = document.querySelector(".postagem");

    // Colocando a divTexto_post e a divImagem na sectionPostagem
    sectionPostagem.appendChild(divTexto_post);
    sectionPostagem.appendChild(divImagem);
} */

