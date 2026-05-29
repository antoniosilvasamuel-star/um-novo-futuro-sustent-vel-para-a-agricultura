document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Rolagem suave para o botão "Conhecer Mais"
    const btnConhecer = document.getElementById('btn-conhecer');
    const secaoPilares = document.getElementById('pilares');

    btnConhecer.addEventListener('click', () => {
        secaoPilares.scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Interceptação e simulação do formulário de contato
    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar

        // Captura os dados digitados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Aqui você integraria com uma API real. Por enquanto, criamos um feedback visual:
        alert(`Obrigado pelo interesse, ${nome}! Entraremos em contato através do e-mail: ${email} em breve.`);
        
        // Limpa o formulário
        formContato.reset();
    });
});
