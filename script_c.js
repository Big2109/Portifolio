document.addEventListener('DOMContentLoaded', function() {
    var content = document.querySelector('.content');
    content.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var sub = document.querySelector('.sub');
    sub.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var text = document.querySelector('.text');
    text.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var formulario = document.querySelector('.formulario');
    formulario.style.opacity = 1; // Define a opacity para 1 para ativar a transição

    var menu_link = document.querySelector('.menu-link');
    menu_link.style.opacity = 1; // Define a opacity para 1 para ativar a transição
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

const portfolioLink = document.querySelector('.menu-link');
portfolioLink.addEventListener('mouseover', () => {
  // Altera o tamanho da fonte e a cor de fundo ao passar o mouse sobre o link
  portfolioLink.style.fontSize = '1.2em';
  //portfolioLink.style.backgroundColor = 'yellow'; // Altere a cor de fundo conforme desejado
  portfolioLink.style.transition = 'all 0.4s ease';
});

portfolioLink.addEventListener('mouseout', () => {
  // Retorna ao tamanho original e à cor original ao retirar o mouse do link
  portfolioLink.style.fontSize = '1em';
  portfolioLink.style.backgroundColor = 'transparent'; // Retorna à cor de fundo original
});

// Inicializa o highlight.js para destacar a sintaxe dos blocos de código
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

// Seleciona todos os links dentro da div com a classe "text"
const links = document.querySelectorAll('.text a');

// Adiciona um event listener para cada link
links.forEach(link => {
  // Adiciona evento quando o mouse passa por cima
  link.addEventListener('mouseover', () => {
    link.style.fontSize = '1.1em'; // Aumenta o tamanho da fonte em 20%
    link.style.transition = 'font-size 0.3s ease'; // Transição suave para o tamanho da fonte
  });

  // Adiciona evento quando o mouse sai de cima
  link.addEventListener('mouseout', () => {
    link.style.fontSize = '1em'; // Retorna o tamanho da fonte ao original
  });
});

$(document).ready(function() {
  $('#senhaForm').submit(function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var senhaInserida = $('#senha').val();
    var senhaCorreta = 'minhasenha123'; // Substitua pela sua senha correta

    if (senhaInserida === senhaCorreta) {
      // Senha correta, redireciona para outra página
      window.location.href = 'codigo-fonte-c.html'; // Substitua pelo URL da página desejada
    } else {
      // Senha incorreta, exibe mensagem ou faz outra ação
      alert('Senha incorreta. Tente novamente.');
      $('#senha').val(''); // Limpa o campo de senha
    }

    // Fecha o modal
    $('#senhaModal').modal('hide');
  });
});

