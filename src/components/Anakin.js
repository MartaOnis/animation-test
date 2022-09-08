import { useState } from 'react';
import '../styles/Anakin.scss';
import imageAnakin from '../images/Anakin.png';
import { Link } from 'react-router-dom';

const Anakin = () => {
  const [isblue, setIsBlue] = useState(false);
  const handleClickColor = (ev) => {
    setIsBlue(!isblue);
  };
  return (
    <>
      <Link to="/" className="SectionDetail-link">
        Volver
      </Link>
      <section>
        <div
          className={`colorDiv color-${isblue}`}
          onClick={handleClickColor}
        ></div>
        <img src={imageAnakin} className="anakin-img" alt=""></img>
      </section>
    </>
  );
};
export default Anakin;
