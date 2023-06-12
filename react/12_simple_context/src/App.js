import './App.css';
import { themes,ThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import ThemeButton from './components/ThemeButton';
import Paragraph from './components/Paragraph';
import Headline from './components/Headline';

function App() {

  const [state,setState] = useState({
    theme:themes.dark
  })

  const toggleTheme = () => {
    if(state.theme === themes.dark) {
      setState({
        theme:themes.light
      })
    } else {
      setState({
        theme:themes.dark
      })
    }
  }
  return (
    <ThemeContext.Provider value={state.theme}>
    <div className="App">
     <Headline>
      Tämä on headline
     </Headline>
     <Paragraph>
      Jeejeejeejeejejeeejeee
     </Paragraph>
     <ThemeButton toggleTheme={toggleTheme}></ThemeButton>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
