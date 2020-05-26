import React from 'react';
import Header from './Header';
import image from '../images/bio/dama.jpg';
import { Link } from 'react-router-dom';

function Bio() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left arrow-icon'></i>
      </Link>
      <Header title='Bio' />
      <main>
        <article className='bio'>
          <div>
            <p className='text'>Tania was baptized with three female names, as they used to do. It was in the neighborhood of El Carmel, in Barcelona, in the parish dedicated Saint Theresa of Jesus, the woman that knew how to explain that God "moved among the cooking pots,” a declaration which, even when expressed in devout christian terms, epitomizes the first great lesson of the feminist economy: domestic duties and knowledges dedicated to maintaining life have a fundamental value. In other words: the personal is political.</p>
            <p className='text'>This symbolic relationship serves to weave the threads between Tania Berta Judith’s field of work and artistic experimentation: the restoration of the histories of women, who so often disappear in historiography. Her practice moves from her personal experience and own genealogy to the reinterpretation of history and the role of women and their knowledges in their tailoring of the world.</p>
            <p className='text'>Tania’s work is radically feminist. In it, embroidery becomes a politicized technique that is used to reclaim the knowledges of women, especially those that have been passed on via the maternal line, restoring authority to this practice as a space for the transmission of knowledges.</p>
            <p className='text'>In the face of culture and the written word, crucial technology for the construction of patriarchal power and the normalization of a world explained through androcentrism, Tania Berta Judith stirs the hierarchy of the illustrated knowledges and designs a symbolic world where orality acquires power, intuition becomes method, and the needle embroiders other holy scriptures.</p>
            <footer>
              <p className='text'>Mar Cianuro</p>
            </footer>
          </div>
          <div>
            <img className='bio-img' alt='Retrato de Tania Berta Judith' src={image}></img>
          </div>
        </article>
      </main>
    </>
  );
}

export default Bio;
