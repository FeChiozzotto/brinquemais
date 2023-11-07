import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
//import "../App.css";

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Sobre a nossa loja</h1>
        </div>
        <div>
          <p className="sobre-p">
          Bem-vindo à BrinqueMais, aqui você encontra os melhores brinquedos com as melhores qualidades de todo o país.
          </p>
          <p className="sobre-p">
          Se você é uma criança ou um pai, não importa, aqui tem tudo que você precisa para ser feliz!          </p>
        </div>
    </div>
    </div>
  );
}
export default Sobre;
