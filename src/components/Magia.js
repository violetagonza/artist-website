import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import image from '../images/magia/portada.png';

function Magia() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='El libro de la magia blanca' />
      <main>
        <p>
          Un moderno manual de hechizos para hacer de tu vida <i>algo mejor</i>.
        </p>
        <p>
          Escrito e ilustrado por Tania Berta Judith, diseño gráfico de{' '}
          <a href='https://www.behance.net/juditmusachs' target='_blank' rel='noopener noreferrer'>
            Judit Musachs
          </a>
          .
        </p>
        <p>Editado por Fulgencio Pimentel.</p>
        <p>
          Disponible en librerías o{' '}
          <a href='https://www.fulgenciopimentel.com/libros/el-libro-de-la-magia-blanca' target='_blank' rel='noopener noreferrer'>
            aquí
          </a>
        </p>
        <h2>Prensa</h2>
        <ul>
          <li>
            <a href='https://liberoamerica.com/2020/04/18/la-magia-es-un-puente-de-purpurina-y-flores-de-colores-hacia-tus-propositosentrevista-a-tania-berta-judith/' target='_blank' rel='noopener noreferrer'>
              1
            </a>
          </li>
          <li>
            <a href='https://www.culturetas.es/magia-blanca-para-brujas-buenas/' target='_blank' rel='noopener noreferrer'>
              2
            </a>
          </li>
          <li>
            <a href='http://www.enplanculto.es/2019/11/20/el-libro-de-la-magia-blanca-de-tania-berta-judith/' target='_blank' rel='noopener noreferrer'>
              3
            </a>
          </li>
          <li>
            <a href='https://www.lacentral.com/blog/tania-berta-judith-166327' target='_blank' rel='noopener noreferrer'>
              4
            </a>
          </li>
          <li>
            <a href='https://www.lavanguardia.com/libros/20191122/471779998444/libro-magia-blanca-tania-berta-judith-hechizos-benevolos.html?fbclid=IwAR2dlyv73S4TWFO88nPw6gsNsRoty3czwl5Ntcvbkx-d9VQiazY5VXMFCho' target='_blank' rel='noopener noreferrer'>
              5
            </a>
          </li>
          <li>
            <a href='https://www.primaverasound.com/es/radio/shows/tardeo' target='_blank' rel='noopener noreferrer'>
              6
            </a>
          </li>
          <li>
            <a href='https://www.ccma.cat/tv3/alacarta/quan-arribin-els-marcians/bruixes/video/5965166/' target='_blank' rel='noopener noreferrer'>
              7
            </a>
          </li>
          <li>
            <a href='http://www.casachiribiri.com/diseno/el-libro-de-la-magia-blanca/' target='_blank' rel='noopener noreferrer'>
              8
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=EI7kPuLaiAw' target='_blank' rel='noopener noreferrer'>
              9
            </a>
          </li>
        </ul>
        <img alt='Portada El libro de la magia blanca' src={image} />
        <article>
          <iframe title='Imágenes del interior del libro' src='https://player.vimeo.com/video/368011194'></iframe>
          <footer>
            <small>Video &copy; Judit Musachs</small>
          </footer>
        </article>
      </main>
    </>
  );
}

export default Magia;
