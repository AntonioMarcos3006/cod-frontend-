import "./Main.css";
import Foguete from "../../../Imagens section/foguete-inclinado.png";
import Aplicativos from "../../../Imagens section/aplicativos.png";
import Smartphone from "../../../Imagens section/smartphone.png";

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

        <div class="servicos-grid">
          <div class="card">
            <img src={Aplicativos} alt="Design de interface" />
            <h3>Design de interface</h3>
            <p>Telas claras, pensadas para o usuário.</p>
          </div>

          <div class="card">
            <img src={Smartphone} alt="Responsividade" />
            <h3>Responsividade</h3>
            <p>O mesmo site em qualquer tela.</p>
          </div>

          <div class="card">
            <img src={Foguete} alt="Performance" />
            <h3>Performance</h3>
            <p>Páginas leves que carregam rápido.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
