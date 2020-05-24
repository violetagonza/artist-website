import React from 'react';
import Header from '../Header';
import arcana1 from '../../images/arcana/arcana_1.png';
import arcana2 from '../../images/arcana/arcana_2.png';
import arcana3 from '../../images/arcana/gif-arcana.gif';
import { Link } from 'react-router-dom';

function Arcana() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Arcana, the secrets of Tarot' />
      <main>
        <article>
          <small>16/11 — 15/02 2020</small>
          <p>Curator Laura González Palacios</p>
          <p>In Chiquita Room, Barcelona</p>
          <p>with</p>
          <ul>
            <li>Beatriz Sánchez,</li>
            <li>Marcel Rubio Juliana,</li>
            <li>Laura Lasheras (Lusesita),</li>
            <li>Susana Blasco,</li>
            <li>Sergio Mora,</li>
            <li>Ariadna Guiteras,</li>
            <li>Iñaki Landa,</li>
            <li>Nacho Simal,</li>
            <li>Laia Arqueros Claramunt,</li>
            <li>Eulàlia Valldosera,</li>
            <li>Fito Conesa,</li>
            <li>Sara Agudo Millán,</li>
            <li>Yannick Sanches,</li>
            <li>Sonia Pulido,</li>
            <li>Candela Torres,</li>
            <li>Núria Gómez Gabriel,</li>
            <li>Aldo Urbano,</li>
            <li>colectivo Larre</li>
            <li>Núria Corretgé,</li>
            <li> Eva Vázquez Abraham,</li>
            <li> Caterina Almirall</li>
          </ul>
          <p>This collective exhibition displays works from 22 artists, each of whom was dealt one tarot card and thereafter invited to reimagine the archetypal values derived from these Major Arcana and reappropriate the symbology through their own artistic language.</p>
          <p>I am participating by refashioning the Emperor Card, symbolizing power and paternal authority, through an installation that seeks to exorcise the patriarchal father figure, the inspiration for which comes from the Death of Minos from Greek mythology:</p>
          <blockquote>And Minos pursued Daedalus, and in every country that he searched he carried a spiral shell and promised to give a great reward to him who should pass a thread through the shell, believing that by that means he should discover Daedalus. And having come to Camicus in Sicily, to the court of Cocalus, with whom Daedalus was concealed, he showed the spiral shell. Cocalus took it, and promised to thread it, and gave it to Daedalus; and Daedalus fastened a thread to an ant, and, having bored a hole in the spiral shell, allowed the ant to pass through it. But when Minos found the thread passed through the shell, he perceived that Daedalus was with Cocalus, and at once demanded his surrender. Cocalus promised to surrender him, and made an entertainment for Minos; but after his bath Minos was undone by the daughters of Cocalus; some say, however, that he died through being drenched with boiling water.</blockquote>
          <footer>Bibliotheca (Pseudo-Apollodorus): Epitome I, 14-15.</footer>
          <p>67,7x85x87cm</p>
        </article>
        <img alt='' src={arcana1}></img>
        <img alt='' src={arcana2}></img>
        <img alt='' src={arcana3}></img>
      </main>
    </>
  );
}

export default Arcana;
