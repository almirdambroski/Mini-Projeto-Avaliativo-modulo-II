export function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        gap: '16px'
      }}
    >
      <div>
        <strong>{produto.nome}</strong>
        <p>
          Qtd: {produto.quantidade} x R$ {produto.precoUnitario.toFixed(2)}
        </p>
      </div>{" "}
      {/* Ou o conteúdo do elemento filho aqui */}
      <div>
        <strong>R$ {subtotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}
