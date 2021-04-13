import React from "react";
import "../../App.css";
import { useState } from "react";

export default function Art() {
  const [language, setLanguage] = useState(true);
  return (
    <>
      <h3 className="art">art</h3>
      <div className="Grid2">
        <h3>
          SARAH ROSSY IS A MYTHICAL SONIC CREATURE OF SORTS, WITH A VOICE THAT
          IS COLOURFULLY CHAMELEONIC YET VULNERABLY HUMAN.{" "}
        </h3>
        {language ? (
          <div>
            <button className="button" onClick={(e) => setLanguage(false)}>
              FR
            </button>
            <p>
              Bouncing between her hometown of Tio’tia:ke (Montréal), New York
              City, and Berlin, she combines influences of jazz, experimental
              music, and interdisciplinary movement practices into her work for
              a truly unique result. As a composer, she has a keen interest in
              experiential processes which traverse through a feminist lens and
              nurture the ecosystems of artistic community. Recent excursions
              include: studying with Meredith Monk, pursuing voice/movement
              research at The World is Sound (Berlin), composing for the
              Montreal Contemporary Music Lab, exploring her ethnic heritage at
              the Arabic Music Retreat, and attending multiple residencies at
              Banff Centre for the Arts. Sarah is a recent (and first Canadian)
              finalist of the Ella Fitzgerald International Voice Competition,
              and her research has been graciously supported by the Social
              Science and Humanities Research Council of Canada, Conseil des
              arts et lettres du Québec, Conseil des arts de Montréal, the
              Canada Council for the Arts, and the Socan Foundation. She holds
              both a B.Mus and M.Mus from McGill University, where she was
              mentored by composers John Hollenbeck and Christine Jensen. In
              2019, she released a debut EP, The Conclusion (Florafone Records),
              and is anticipating the release of a full-length album in 2021.
            </p>
          </div>
        ) : (
          <div>
            <button className="button" onClick={(e) => setLanguage(true)}>
              EN
            </button>
            <br></br>
            <p>
              Naviguant entre sa ville natale de Montréal (Québec, Canada), New
              York et Berlin, Sarah Rossy combine dans son travail des
              influences de jazz, de musique expérimentale et de pratiques de
              mouvement interdisciplinaires, pour un résultat tout à fait
              unique. En tant que compositrice, elle démontre un vif intérêt
              pour les processus expérientiels qui adoptent une lentille
              féministe et nourrissent les écosystèmes de la communauté
              artistique. Elle détient à la fois un Baccalauréat en musique et
              une Maîtrise en musique de l’Université McGill, où elle a été
              encadrée par les compositeurs John Hollenbeck et Christine Jensen.
              Sarah est une récente (et première Canadienne) finaliste du
              Concours international de chant Ella Fitzgerald, et ses recherches
              ont été gracieusement soutenues par le Conseil de recherches en
              sciences humaines du Canada, le Conseil des arts et lettres du
              Québec, le Conseil des arts de Montréal, et la Fondation Socan. En
              2019, elle a sorti un premier EP – The Conclusion (Florafone
              Records), et prévoit la sortie d’un album complet en 2021.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
