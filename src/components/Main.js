import Template from './Template';
import '../styles/Main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Template link="spiderman" />
        <Template link="anakin" />
      </div>
    </main>
  );
};
export default Main;
