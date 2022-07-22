import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import ContainerSSS from "./components/styles/ContainerSSS"
const App = () => {
  return (
    <div>
      <Header />
      <ContainerSSS>
        <Card />
      </ContainerSSS>
    </div>
  );
}

export default App
