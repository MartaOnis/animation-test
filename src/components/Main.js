import Template from './Template';
import '../styles/Main.scss';
import templateSpiderman from '../images/SpidermanTemplate.png';
import templateAnakin from '../images/AnakinTemplate.png';

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">El arte de marta</h2>
      <p className="main__paragraph">
        App para mostrar ilustraciones animadas{' '}
      </p>
      <div className="main__container">
        <Template
          link="spiderman"
          class="class2"
          image={templateSpiderman}
          name="spiderman"
          iconhtml="classhtml"
          iconcss="classcss"
          iconjs="hidden"
        />
        <Template
          link="anakin"
          class="class3"
          image={templateAnakin}
          name="anakin"
          iconhtml="classhtml"
          iconcss="classcss"
          iconjs="classjs"
        />
      </div>
    </main>
  );
};
export default Main;
