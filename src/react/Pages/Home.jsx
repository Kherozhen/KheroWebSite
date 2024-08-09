
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ImgBanner from '../../images/banner.jpg';

import Card from "../Components/Cards/Card";
import imgCode from "../../images/code.jpg";
import imgBug from "../../images/bug.jpeg";
import imgOpti from "../../images/optimisation.png";

import Projects from "../Components/Projects/Projects";

import Form from "../Components/Form/Form";

function Home() {
  return (
    <main>
      <section id="aboutMe">
        <Banner 
          img={ImgBanner}
          alt="Banière"/>
        <About />
      </section>

      <section>
      <div id="projects">
        <div className="projectsContainer">
          <h2>Projets réalisés</h2>
          <Projects />
        </div>
      </div>
      <div id="missions">
        <h2>Mes missions</h2>
        <p className="introMission">en tant que développeur</p>
        <Card 
          img={imgCode}
          alt="Image d'un code"
          mission="Créer le site internet"
          text=" qui correspond à vos envie est une priorité.
                Grâce à vos maquettes, vos images ou simplement vos souhaits, je ferais en sorte de répondre à 100% à votre demande."
        />
        <Card 
          img={imgBug}
          alt="Image de cherche de bug informatique"
          mission="Corriger les bugs."
          text=" Repérer les problèmes d'un site en le surveillant et le mettre à jour régulièrement permet de lutter contre les bugs et garantir sa sécurité."
        />
        <Card 
          img={imgOpti}
          alt="Image de recherche d'optimisation"
          mission="Optimiser un site internet"
          text=" est la clé pour être visible. Faire son référencement et rester à jour des dernières nouveautés permet une grande facilité du site Web pour les visiteurs."   
        />
        <p className="next">...</p>
      </div>
      </section>

      <section id="contact">
        <div className="contactContainer">
          <h2>Une idée, une envie ?</h2>
          <p>Parlons-en !</p>
          <Form />
        </div>

      </section>
      
    </main>
  );
}

export default Home;
