import React from 'react'
import ButtonSSS from './styles/ButonSSS'
import ContainerSSS from './styles/ContainerSSS'

import HeaderSSS, { ImageSSS, LogoSSS, NavSSS } from './styles/HeaderSSS'

const Header = () => {
  return (
    <HeaderSSS>
      <ContainerSSS>
        <NavSSS>
          <LogoSSS src="./images/logo.png"></LogoSSS>
          <div>
            <ButtonSSS colorMehmet="#A62440">Apply Courses</ButtonSSS>
            <ButtonSSS bgRecep="#A62440">Talk to Adviser</ButtonSSS>
          </div>
        </NavSSS>
        <NavSSS>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Clarusway is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <ButtonSSS bgRecep="#A62440">Start Your New Carier</ButtonSSS>
          </div>
          <ImageSSS src="./images/hero.jpg"></ImageSSS>
        </NavSSS>
      </ContainerSSS>
    </HeaderSSS>
  );
}

export default Header