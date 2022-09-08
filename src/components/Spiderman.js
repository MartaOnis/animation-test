import '../styles/Spiderman.scss';
import imageSpiderman from '../images/Spiderman.png';
import { Link } from 'react-router-dom';

const Spiderman = () => {
  return (
    <>
      <Link to="/" className="SectionDetail-link">
        Volver
      </Link>
      <section className="section">
        <div className="parallax"></div>

        <div className="spiderman">
          <img src={imageSpiderman} className="spiderman-img" alt=""></img>
        </div>

        <div className="parallax"></div>
      </section>
    </>
  );
};
export default Spiderman;
