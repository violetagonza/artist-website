import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import image from '../images/magia/portada.png';

function Magia() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='El libro de la magia blanca' />
      <main>
        <p className='text'>
          A modern spell manual to make your life <i>something better</i>.
        </p>
        <p className='text'>
          Written and illustrated by Tania Berta Judith,
          <br />
          graphic design by{' '}
          <a className='link' href='https://www.behance.net/juditmusachs' target='_blank' rel='noopener noreferrer'>
            Judit Musachs
          </a>
          <span className='hidden'>,</span>
          <br />
          edited by Fulgencio Pimentel.
        </p>
        <p className='magia-text'>
          Available in bookstores or{' '}
          <a className='link' href='https://www.fulgenciopimentel.com/libros/el-libro-de-la-magia-blanca' target='_blank' rel='noopener noreferrer'>
            here
          </a>
          .
        </p>
        <p className='text'>Coming soon in English.</p>
        <div className='press'>
          <h2 className='text-title'>Press release</h2>
          <ul className='press-list'>
            <li className='press-list__item'>
              <a className='link' href='https://liberoamerica.com/2020/04/18/la-magia-es-un-puente-de-purpurina-y-flores-de-colores-hacia-tus-propositosentrevista-a-tania-berta-judith/' target='_blank' rel='noopener noreferrer'>
                1 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='https://www.culturetas.es/magia-blanca-para-brujas-buenas/' target='_blank' rel='noopener noreferrer'>
                2 -
              </a>
            </li>
            <li className='press-list__item'>
              {' '}
              <a className='link' href='http://www.enplanculto.es/2019/11/20/el-libro-de-la-magia-blanca-de-tania-berta-judith/' target='_blank' rel='noopener noreferrer'>
                3 -
              </a>
            </li>
            <li className='press-list__item'>
              {' '}
              <a className='link' href='https://www.lacentral.com/blog/tania-berta-judith-166327' target='_blank' rel='noopener noreferrer'>
                4 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='https://www.lavanguardia.com/libros/20191122/471779998444/libro-magia-blanca-tania-berta-judith-hechizos-benevolos.html?fbclid=IwAR2dlyv73S4TWFO88nPw6gsNsRoty3czwl5Ntcvbkx-d9VQiazY5VXMFCho' target='_blank' rel='noopener noreferrer'>
                5 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='https://www.primaverasound.com/es/radio/shows/tardeo' target='_blank' rel='noopener noreferrer'>
                6 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='https://www.ccma.cat/tv3/alacarta/quan-arribin-els-marcians/bruixes/video/5965166/' target='_blank' rel='noopener noreferrer'>
                7 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='http://www.casachiribiri.com/diseno/el-libro-de-la-magia-blanca/' target='_blank' rel='noopener noreferrer'>
                8 -
              </a>
            </li>
            <li className='press-list__item'>
              <a className='link' href='https://www.youtube.com/watch?v=EI7kPuLaiAw' target='_blank' rel='noopener noreferrer'>
                9
              </a>
            </li>
          </ul>
        </div>
        <img className='image' alt='Portada El libro de la magia blanca' src={image} />
        <article>
          <iframe className='video image' allow='autoplay' allowFullScreen title='Imágenes del interior del libro' src='https://player.vimeo.com/video/368011194'></iframe>
          <footer>
            <small>Video &copy; Judit Musachs</small>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Magia;
