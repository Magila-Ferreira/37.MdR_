const fileInput = document.querySelector('#imagem');
const salvarPost = document.querySelector('button');
console.log(salvarPost);

salvarPost.addEventListener('click', (event) => {
  event.preventDefault();
  
})

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
 
  //console.log(`O nome do arquivo é: ${file.name}`);
  //console.log(`O tamanho do arquivo é: ${file.size}`);
});


