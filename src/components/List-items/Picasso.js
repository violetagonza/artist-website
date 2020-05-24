import React from 'react';
import Header from '../Header';
import picasso1 from '../../images/picasso/minotauro_1.jpg';
import picasso2 from '../../images/picasso/minotauro_2.png';
import picasso3 from '../../images/picasso/minotauro_3.jpg';
import picasso4 from '../../images/picasso/minotauro_4.png';
import picasso5 from '../../images/picasso/minotauro_5.png';
import { Link } from 'react-router-dom';

function Picasso() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='In the name of the father' />
      <main>
        <article>
          <small>07/06 — 24/09 2019</small>
          <p>Curator Rosa Martínez</p>
          <p>In Museu Picasso, Barcelona</p>
          <p>with</p>

          <ul>
            <li> Cristina Lucas,</li>
            <li>Daniel García-Andújar,</li>
            <li>Eulalia Valldosera,</li>
            <li>Miquel Barceló,</li>
            <li>Pilar Albarracín,</li>
            <li>Rogelio López Cuenca and Elo Vega,</li>
            <li>Santiago Sierra</li>
            <li>Nacho Simal,</li>
            <li>and the family of the cantaor Enrique Morente</li>
          </ul>
          <h3>Press release</h3>
          <ul>
            <li>
              <a href='https://www.ilgiornaledellarte.com/articoli/nel-nome-di-pap-pablo-al-museo-picasso/131298.html?fbclid=IwAR2UhBQqAzY6d6H72ocul71H7NFyKWnnXMJkCijjjv6lWWdNg_Z9uZPzIfE' target='_blank' rel='noopener noreferrer'>
                1
              </a>
            </li>
            <li>
              <a href='https://elpais.com/ccaa/2019/06/06/catalunya/1559848858_472393.html' target='_blank' rel='noopener noreferrer'>
                2
              </a>
            </li>
            <li>
              <a href='https://www.lavanguardia.com/cultura/20190607/462713236955/picasso-exposicion-museo-legado-estetico-ideologico.html' target='_blank' rel='noopener noreferrer'>
                3
              </a>
            </li>
            <li>
              <a href='https://www.ara.cat/cultura/Honrar-Pablo-Picasso-questionar-ne-XXI_0_2249775001.html' target='_blank' rel='noopener noreferrer'>
                4
              </a>
            </li>
            <li>
              <a href='https://www.miradorarts.com/in-the-name-of-picasso/' target='_blank' rel='noopener noreferrer'>
                5
              </a>
            </li>
            <li>
              <a href='https://beteve.cat/artic/picasso-en-el-nom-del-pare/' target='_blank' rel='noopener noreferrer'>
                6
              </a>
            </li>
            <li>
              <a href='https://www.artribune.com/turismo/2019/07/pablo-picasso-barcellona-intervista-rosa-martinez/?utm_source=Newsletter%20Artribune&utm_campaign=73ecef9277-&utm_medium=email&utm_term=0_dc515150dd-73ecef9277-153978309&ct=t%28%29&goal=0_dc515150dd-73ecef9277-153978309' target='_blank' rel='noopener noreferrer'>
                7
              </a>
            </li>
            <li>
              <a href='https://www.elperiodico.com/es/onbarcelona/mirar/20190731/exposicion-nombre-del-padre-pablo-picasso-7575999?fbclid=IwAR3f2iN5wEMWUTAXejamNY6A0Z180T3d9xoyJxGhcjD_sYOlFuQ9JqNaHNA' target='_blank' rel='noopener noreferrer'>
                8
              </a>
            </li>
          </ul>
          <p>The exhibition In the Name of the Father explores the artistic and vital legacy of Pablo Picasso from different perspectives but always as an inescapable reference and included in the line of research of the relationship of current contemporary artists with the work and the figure of Pablo Picasso. There will be works by various artists who highlight their connection with Picasso. This exhibition aims to analyse and celebrate the survival of Picasso in today’s art. I participated with:</p>
          <p>
            This piece was placed in one of the porticoes of the building, allowing the reverse to be seen from the street, thus getting the figure of the{' '}
            <a href='https://www.instagram.com/p/By-ApaWoII4/' target='_blank' rel='noopener noreferrer'>
              minotaur
            </a>{' '}
            to go outside and be confused with the people.
          </p>
          <img src={picasso1} alt='' />
          <img src={picasso2} alt='' />
          <img src={picasso3} alt='' />
          <img src={picasso4} alt='' />
          <img src={picasso5} alt='' />
        </article>
      </main>
    </>
  );
}

export default Picasso;
