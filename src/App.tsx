import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import Header from './components/template/header';

function App() {

  const [ theme, setTheme ] = useState(light)

  function switchTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (

    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <Header switchTheme={switchTheme} />

    </ThemeProvider>
  );

}

export default App;
