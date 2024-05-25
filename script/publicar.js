const fileInput = document.querySelector('#imagem');
const tituloDoPost = document.querySelector("#titulo");
console.log(tituloDoPost);

fileInput.addEventListener('change', (event) => {
  // O evento `change` é acionado quando o usuário seleciona uma imagem.
  // Você pode usar o objeto `event.target` para obter o objeto `File` da imagem selecionada.

  const file = event.target.files[0];

  // Você pode usar o método `file.name` para obter o nome do arquivo da imagem selecionada.
  // Você pode usar o método `file.size` para obter o tamanho do arquivo da imagem selecionada.

  console.log(`O nome do arquivo é: ${file.name}`);
  console.log(`O tamanho do arquivo é: ${file.size}`);
});

