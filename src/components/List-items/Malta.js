import React from 'react';
import Header from '../Header';
import woman1 from '../../images/malta/woman_awake_1.png';
import woman2 from '../../images/malta/woman_awake_2.png';
import woman3 from '../../images/malta/woman_awake_3.png';
import named1 from '../../images/malta/named_1.png';
import named2 from '../../images/malta/named_2.png';
import named3 from '../../images/malta/named_3.png';
import dosSeisSiete1 from '../../images/malta/267_1.png';
import dosSeisSiete2 from '../../images/malta/267_2.png';
import { Link } from 'react-router-dom';

function Malta() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Constellation Malta' />
      <main>
        <article>
          <small className='initial-text'>12/10 — 09/12 2018</small>
          <p className='initial-text'>Curator Rosa Martínez.</p>
          <p className='initial-text'>In various heritatge sites of Malta</p>

          <ul className='names-list'>
            <li className='names-list__item-first'>With Austin Camilleri,</li>
            <li className='names-list__item'>Chiharu Shiota,</li>
            <li className='names-list__item'>Eulalia Valldosera,</li>
            <li className='names-list__item'>Kjungjin Cho,</li>
            <li className='names-list__item'>Saskia Calderón,</li>
            <li className='names-list__item'>Yoshitomo Nara,</li>
            <li className='names-list__item'>and Marina Abramovic.</li>
          </ul>
          <a className='link' href='https://www.timesofmalta.com/articles/view/20181113/life-features/creating-new-constellations-of-meaning.694179?fbclid=IwAR1lMIJh0qbLvg1KqG5QOCfJMuZiM0lAGYDhn4kiGwU0w26a6lC87YWw_aY' target='_blank' rel='noopener noreferrer'>
            Press release
          </a>
          <p className='text'>The project Constellation Malta proposes a series of artistic interventions throughout the geography of the Maltese archipelago with the desire of creating fruitful dialogues between historical heritage, popular culture and contemporary art. I participated with three pieces:</p>
          <section>
            <h4 className='text-title'>Women Awake</h4>
            <p className='text'>Women Awake is the embroidered representation of Hipogeo Hal Saflieni, which is one of the oldest temples in Europe as well as the only subterranean one. It is a labyrinth of decorated chambres with large coils of ochre, which, with intermittent light, give the effect of the movement of dancing spirals. It was in this temple that archeologists discovered a figurine known as the Sleeping Lady, a woman in a prehistoric cot. In my own representation, in the corresponding location where the Sleeping Lady was discovered, I embroidered a shape with 24 carat golden thread: a small gem of light to wake this woman (as well the rest of us).</p>
            <p className='text'>In the National Archeological Museum of Malta in Constellation Malta, the piece was placed directly in front of the Sleeping Lady.</p>
            <p className='text'>163x188 cm</p>
            <img className='image' src={woman1} alt='' />
            <img className='image' src={woman2} alt='' />
            <img className='image' src={woman3} alt='' />
          </section>

          <section>
            <h4 className='text-title'>Named</h4>
            <p className='text'>The Neolithic Maltese peoples sculpted the majority of their anthropomorphic figures without sexual features. This is a new prehistoric paradigm that shows us new ways to understand gender in the past. My eight pieces from Named are embroidered representations of selection of these figures in which I have embroidered non-binary names on the inverse side of the fabric. With this my aim is to remark on the illegibility of the past and the ways in which we create subjective constructs about it according to our beliefs.</p>
            <p className='text'>In Constellation Malta these items were placed within glass cases in the National Archeological Museum, being exhibited alongside their original pieces.</p>
            <p className='text'>15x11cm each one</p>
            <img className='image' src={named1} alt='' />
            <img className='image' src={named2} alt='' />
            <img className='image' src={named3} alt='' />
          </section>

          <section>
            <h4 className='text-title'>267</h4>
            <p className='text'>This piece was exhibited in the Ta'Kola Windmill Museum, positioned on top of a bed and beneath a hanging cradle, as if to look after it.</p>
            <p className='text'>208x228 cm</p>
            <img className='image' src={dosSeisSiete1} alt='' />
            <img className='image' src={dosSeisSiete2} alt='' />
          </section>
        </article>
        <a className='link' href='https://creation-designs.com/gracemillennium/winter00/html/berezan.htm' target='_blank' rel='noopener noreferrer'>
          Jennifer Berezan and the Hypogeum at Hal Saflieni of Malta
        </a>
      </main>
    </>
  );
}

export default Malta;
