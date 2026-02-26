// Exemplo simples: animação de scroll suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Captura o ano atual para o Copyright
const ano = new Date().getFullYear();
document.getElementById('ano-atual').textContent = ano;

// Captura e formata a data de hoje para a "Última atualização"
const hoje = new Date();
const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);

document.getElementById('data-completa').textContent = dataFormatada;
