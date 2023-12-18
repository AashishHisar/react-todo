import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import Listing from './components/Example';
import ForButton from './components/ForButton.js';
import React from 'react';
import StateComponent from './components/StateComponent.js';
import InputTestComponent from './components/InputTestComponent.js';
import MixStateComponent from './components/MixStateComponent.js';
import FormComponent from './components/FormComponent.js';
import useEffectComponent from './components/useEffectComponent.js';
import TodoComponent from './components/TodoComponent.js';

function App() {
  return (
    <div className="container">
      { 
        <React.Fragment>
       
        {/* <h2>For useState Component</h2>
        <StateComponent />
        <hr></hr>
        <h2>For Input file Component</h2>
        <InputTestComponent />
        <hr></hr>
        <h2>For Mix Component</h2>
        <MixStateComponent/>
        <h2>Form Component example</h2>
        <FormComponent/>
        <h2>useEffect Component example</h2>
        <useEffectComponent />
        <h2>For Listing components</h2>
        <Listing />
        <hr></hr>
        <h2>For Button components</h2>
        <ForButton />  */}
        <TodoComponent />
      </React.Fragment>
      }
    </div>

  );
}

export default App;
