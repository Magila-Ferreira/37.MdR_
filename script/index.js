function adicionaDadosNaPostagem(dados) {
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
    var sectionPostagem = document.querySelector("section.postagem");

    // Colocando a divTexto_post e a divImagem na sectionPostagem
    sectionPostagem.appendChild(divTexto_post);
    sectionPostagem.appendChild(divImagem);
}

if (localStorage.getItem("publicação") != null) {
    let pegar = localStorage.getItem("publicação");

    let pegarPublicacao = JSON.parse(pegar);

    let titulo = document.getElementById("titulo");
    let texto = document.getElementById("Texto");
    let imagem = document.getElementById("imagem");

    titulo.textContent = pegarPublicacao.titulo;
    texto.textContent = pegarPublicacao.texto;
    imagem.textContent = pegarPublicacao.file;
} 
