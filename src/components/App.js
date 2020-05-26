import React from 'react';
import Landing from './Landing';
import Bio from './Bio';
import Magia from './Magia';
import Arcana from './List-items/Arcana';
import Picasso from './List-items/Picasso';
import Malta from './List-items/Malta';
import Mexico from './List-items/Mexico';
import Mantra from './List-items/Mantra';
import Loteria from './List-items/Loteria';
import Rosas from './List-items/Rosas';
import Abejas from './List-items/Abejas';
import DosSeisSiete from './List-items/DosSeisSiete';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/bio' component={Bio} />
        <Route path='/magia' component={Magia} />
        <Route path='/arcana' component={Arcana} />
        <Route path='/picasso' component={Picasso} />
        <Route path='/malta' component={Malta} />
        <Route path='/mexico' component={Mexico} />
        <Route path='/mantra' component={Mantra} />
        <Route path='/loteria' component={Loteria} />
        <Route path='/rosas' component={Rosas} />
        <Route path='/abejas' component={Abejas} />
        <Route path='/267' component={DosSeisSiete} />
      </Switch>

      <Footer hidden={props.hidden} />
    </div>
  );
}

export default App;
