import "./Main.css";
import Foguete from "../../../Imagens section/foguete-inclinado.png";
import Aplicativos from "../../../Imagens section/aplicativos.png";
import Smartphone from "../../../Imagens section/smartphone.png";
import ServicoCard from "../ServicoCard/ServicoCard";

const servico = [
    { 
        id: 1, 
        titulo: "Design de interface", 
        imagem: Aplicativos, 
        descricao: "Telas claras, pensadas para o usuário"
    },
    { 
        id: 2, 
        titulo: "Responsividade", 
        imagem: Smartphone, 
        descricao: "O mesmo site em qualquer tela"
    },
    { 
        id: 3, 
        titulo: "Performance", 
        imagem: Foguete, 
        descricao: "Páginas leves que carregam rápido"
    }
];

function Main() {
  return (
    <main>
      <section className="section-1">
        <h1 className="Titulo">Criamos sites que funcionam</h1>
        <p className="Descrição">
          Layouts responsivos, rápidos e acessíveis para o seu <br />
          negócio crescer na web.
        </p>

        <div className="botoes">
          <a href="#orcamento" className="btn-orçamento">
            Peça um orçamento
          </a>
          <a href="#portifolio" className="btn-portifolio">
            Ver portifolio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
           {servico.map((servico) => (
            <ServicoCard
              key={servico.id}
              titulo={servico.titulo}
              imagem={servico.imagem}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
