import { GlobalStyle } from './globalStyle';
import { Home, About, Work, Contact } from './pages/index';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
