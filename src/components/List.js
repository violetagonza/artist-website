import React from 'react';
import { Link } from 'react-router-dom';
function List() {
  return (
    <ul>
      <li>
        <Link to='/arcana'>Arcana, the secrets of Tarot. Chiquita Room, Barcelona</Link>
      </li>
      <li>
        <Link to='/picasso'> In the name of father. Museu Picasso de Barcelona</Link>
      </li>
      <li>
        <Link to='/malta'>Constellation Malta. National Archeological Museum of Malta</Link>
      </li>
      <li>
        <Link to='/mexico'> Mujeres tortilla. Casa Rosa, Oaxaca de Juárez (México) </Link>
      </li>
      <li>
        <Link to='/mantra'> Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente</Link>
      </li>
      <li>
        <Link to='/loteria'>Loteria de la mama 23046/32046</Link>
      </li>
      <li>
        <Link to='/rosas'>3 Rosas</Link>
      </li>
      <li>
        <Link to='/abejas'>7 abejas</Link>
      </li>
      <li>
        <Link to='/267'>267</Link>
      </li>
    </ul>
  );
}

export default List;
