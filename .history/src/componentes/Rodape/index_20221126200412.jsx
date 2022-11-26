import './style.css';

export default function Rodape(props) {

  return(
    <footer className="rodape-modo-claro">
      <img src='assets/logo.png' alt="logomarca"/>
      <p className="paragrafo">
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
      </p>
      <div className="iconesRodape">
        <img src='assets/facebook.png' alt="facebook"/>
        <img src='assets/logo.png' alt="twitter"/>
        <img src='assets/logo.png' alt="linkedin"/>
        <img src='assets/logo.png' alt="dribble"/>
        <img src='assets/logo.png' alt="behance"/>
        <img src='assets/logo.png' alt="google plus"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  )
}