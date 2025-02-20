const form = document.getElementById('cadastro');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Enviar dados para o servidor
    fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email,
            telefone
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // Enviar ficha para o número de telefone
        const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`;
        const numeroTelefone = 'SEU_NÚMERO_DE_TELEFONE'; // Substitua por seu número de telefone
        const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
        window.open(url, '_blank');
    })
    .catch((err) => console.error(err));
});
