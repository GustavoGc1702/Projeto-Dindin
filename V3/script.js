const vendaForm = document.getElementById('vendaForm');

vendaForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const valor = document.getElementById('valor').value;
  const quantidade = document.getElementById('quantidade').value;
  const sabor = document.getElementById('sabor').value;
  const pagamento = document.getElementById('pagamento').value;
  const hora = document.getElementById('hora').value;
  const data = document.getElementById('data').value;

  console.log({
    nomeCliente,
    valor,
    quantidade,
    sabor,
    pagamento,
    hora,
    data
  });

  alert('Venda cadastrada com sucesso!');
  vendaForm.reset();
});