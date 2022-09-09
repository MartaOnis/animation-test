import { Link } from 'react-router-dom';
import '../styles/Template.scss';
const Template = (props) => {
  return (
    <section className="sectionTemplate">
      <Link to={`${props.link}`} className="character-link">
        {/* <img
        className=""
        src={props.changeImage(props.image)}
        alt={`Foto de ${props.name}`}
        title={`Foto de ${props.name}`}
      ></img> */}
        <div>
          <p>Recursos:</p>
        </div>
      </Link>
    </section>
  );
};
export default Template;
