import { Link } from 'react-router-dom';
import '../styles/Template.scss';

const Template = (props) => {
  return (
    <section className={`sectionTemplate ${props.class}`}>
      <Link to={`${props.link}`} className="character-link">
        <img
          className="sectionTemplate__image"
          src={props.image}
          alt={`Foto de ${props.name}`}
          title={`Foto de ${props.name}`}
        ></img>
        <p className="sectionTemplate__paragraph">Herramientas:</p>
        <div className="sectionTemplate__icons">
          <i className={`fa-brands fa-2x fa-html5 ${props.iconhtml}`}></i>
          <i className={`fa-brands fa-2x fa-css3-alt ${props.iconcss}`}></i>
          <i className={`fa-brands fa-2x fa-js ${props.iconjs}`}></i>
        </div>
      </Link>
    </section>
  );
};
export default Template;
