import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import LandingPage from './pages/landingPage';
import Abouts from './pages/Abouts';
import MultipleArticles from './pages/multipleArticles';
import Footer from '../src/Components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
    <LandingPage />
    <Abouts />
    <MultipleArticles />
    <Footer />
    </ChakraProvider>
  );
}

export default App;
