import './style.css';

export default function Card(props) {
    return (
      <div id="card" className={props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
        <p className="primeiroParagrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero saepe voluptatum provident, adipisci quidem consequuntur! Iste facilis aliquid iusto, expedita obcaecati corporis laborum qui quasi sequi, modi doloribus soluta id?</p>
        <h4>titulo</h4>
        <p className="segundoParagrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium distinctio molestiae natus doloribus sit aperiam, a in rem voluptatum voluptate, quibusdam nemo magni sequi debitis minima aliquam, iste est?</p>
        <p>paragrafo</p>
    </div>
   );
  }