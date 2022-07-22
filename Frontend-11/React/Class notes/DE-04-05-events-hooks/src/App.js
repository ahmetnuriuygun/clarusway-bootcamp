import React from 'react'
import Event from './1-events-hooks_intro/Event'
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./2-classComponents/Counter";
import Hooks from './2-hooks/Hooks';
import Form from './3-form/Form';
import MouseKeyboard from './4-mouse_keyBoard/MouseKeyboard';
const App = () => {
  return (
    <div>
      <Event />
      <Counter />
      <Counter count={10} />
      <Hooks />
      <Form />
      <MouseKeyboard />
    </div>
  );
}

export default App
