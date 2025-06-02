document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Opcional: Fechar outras respostas abertas antes de abrir a nova
      // document.querySelectorAll('.faq-item .faq-question.active').forEach(activeQuestion => {
      //   if (activeQuestion !== question) {
      //     activeQuestion.classList.remove('active');
      //     activeQuestion.nextElementSibling.style.maxHeight = null;
      //     activeQuestion.nextElementSibling.style.padding = '0 18px';
      //   }
      // });

      question.classList.toggle('active');

      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        // Adiciona padding gradualmente se desejar (já incluso na transição do .faq-answer)
        // answer.style.padding = '18px'; // Ou o padding que você definiu para o estado aberto
      } else {
        answer.style.maxHeight = null;
        // answer.style.padding = '0 18px'; // Reduz o padding gradualmente
      }
    });
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}