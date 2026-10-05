import "./ServicoCard.css"

function ServicoCard({ imagem, titulo, descricao }) {
    return (
      <div className="card">
            <img className="servico-imagem" src={imagem} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </div>
    );
}

export default ServicoCard;