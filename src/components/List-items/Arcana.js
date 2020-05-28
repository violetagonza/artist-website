import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import arcana1 from '../../images/arcana/arcana_1.png';
import arcana2 from '../../images/arcana/arcana_2.png';
import arcana3 from '../../images/arcana/gif-arcana.gif';
import { Link } from 'react-router-dom';

function Arcana() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='The Emperor' />
      <main>
        <article>
          <p className='initial-text'>
            It was part of <br /> «Arcana, the secrets of Tarot»
          </p>
          <small className='initial-text'>16/11 — 15/02 2020</small>
          <p className='initial-text'>Curator Laura González Palacios,</p>
          <p className='initial-text'>in Chiquita Room, Barcelona,</p>
          <ul className='names-list'>
            <li className='names-list__item-first'>with Beatriz Sánchez,</li>
            <li className='names-list__item'>Marcel Rubio Juliana,</li>
            <li className='names-list__item'>Laura Lasheras (Lusesita),</li>
            <li className='names-list__item'>Susana Blasco,</li>
            <li className='names-list__item'>Sergio Mora,</li>
            <li className='names-list__item'>Ariadna Guiteras,</li>
            <li className='names-list__item'>Iñaki Landa,</li>
            <li className='names-list__item'>Nacho Simal,</li>
            <li className='names-list__item'>Laia Arqueros Claramunt,</li>
            <li className='names-list__item'>Eulàlia Valldosera,</li>
            <li className='names-list__item'>Fito Conesa,</li>
            <li className='names-list__item'>Sara Agudo Millán,</li>
            <li className='names-list__item'>Yannick Sanches,</li>
            <li className='names-list__item'>Sonia Pulido,</li>
            <li className='names-list__item'>Candela Torres,</li>
            <li className='names-list__item'>Núria Gómez Gabriel,</li>
            <li className='names-list__item'>Aldo Urbano,</li>
            <li className='names-list__item'>colectivo Larre</li>
            <li className='names-list__item'>Núria Corretgé,</li>
            <li className='names-list__item'>Eva Vázquez Abraham,</li>
            <li className='names-list__item'>Caterina Almirall.</li>
          </ul>
          <p className='text'>This collective exhibition displays works from 22 artists, each of whom was dealt one tarot card and thereafter invited to reimagine the archetypal values derived from these Major Arcana and reappropriate the symbology through their own artistic language.</p>
          <p className='text'>I am participating by refashioning the Emperor card, symbolizing power and paternal authority, through an installation that seeks to exorcise the patriarchal father figure, the inspiration for which comes from the Death of Minos from Greek mythology:</p>
          <blockquote className='text quote'>And Minos pursued Daedalus, and in every country that he searched he carried a spiral shell and promised to give a great reward to him who should pass a thread through the shell, believing that by that means he should discover Daedalus. And having come to Camicus in Sicily, to the court of Cocalus, with whom Daedalus was concealed, he showed the spiral shell. Cocalus took it, and promised to thread it, and gave it to Daedalus; and Daedalus fastened a thread to an ant, and, having bored a hole in the spiral shell, allowed the ant to pass through it. But when Minos found the thread passed through the shell, he perceived that Daedalus was with Cocalus, and at once demanded his surrender. Cocalus promised to surrender him, and made an entertainment for Minos; but after his bath Minos was undone by the daughters of Cocalus; some say, however, that he died through being drenched with boiling water.</blockquote>
          <footer className='text'>Bibliotheca (Pseudo-Apollodorus): Epitome I, 14-15.</footer>
          <p className='text'>67,7x85x87cm</p>
        </article>
        <img className='image' alt='' src={arcana1}></img>
        <img className='image' alt='' src={arcana2}></img>
        <img className='image' alt='' src={arcana3}></img>
      </main>
      <Footer />
    </>
  );
}

export default Arcana;
