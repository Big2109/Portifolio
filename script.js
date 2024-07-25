document.addEventListener('DOMContentLoaded', function() {

    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach(function(container) {
      container.style.opacity = 1;
    });

    var content = document.querySelector('.content');
    content.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var img = document.querySelector('a.img img');
    img.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var nome = document.querySelector('.name');
    nome.style.opacity = 1; // Define a opacity para 1 para ativar a transição

  });

  // Seleciona todas as imagens dentro dos links com a classe "img"
const imagens = document.querySelectorAll('a.img img');

// Adiciona um event listener para cada imagem
imagens.forEach(imagem => {
  imagem.addEventListener('mouseover', () => {
    // Aumenta a escala da imagem em 1.2 quando o mouse passa sobre ela
    imagem.style.transform = 'scale(1.2)';
    imagem.style.transition = 'transform 0.4s ease';
    imagem.style.filter = 'brightness(115%)'; // Clareia a imagem
  });

  imagem.addEventListener('mouseout', () => {
    // Retorna ao tamanho original quando o mouse sai da imagem
    imagem.style.transform = 'scale(1)';
    imagem.style.filter = 'brightness(100%)'; // Clareia a imagem
  });
});

const menuLink = document.querySelector('.menu-link');

menuLink.addEventListener('mouseover', () => {
  menuLink.style.fontSize = '50px'; // Aumenta o tamanho da fonte para 1.2em
  menuLink.style.transition = 'font-size 0.9s ease'; // Adiciona transição suave ao tamanho da fonte
});

menuLink.addEventListener('mouseout', () => {
  menuLink.style.fontSize = '40px'; // Retorna ao tamanho original da fonte (40px)
});


