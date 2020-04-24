import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = (): void => {
    if (theme.title === 'light') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes toggleTheme={toggleTheme} />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
