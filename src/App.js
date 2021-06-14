import React from 'react';
import Accordion from './components/Accordion';

import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Accordion title="Titre 1" content="Contenu du 1" />
        <Accordion title="Titre 2" content="Contenu du 2" />
        <Accordion title="Titre 3" content="Contenu du 3" />
        <Accordion title="Titre 4" content="Contenu du 4" />
      </div>
  );
}}

export default App;
