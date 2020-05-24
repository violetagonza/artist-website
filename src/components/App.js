import React from 'react';
import Landing from './Landing';
import Header from './Header';
import Bio from './Bio';
import Magia from './Magia';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/bio' component={Bio} />
          <Route path='/magia' component={Magia} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
