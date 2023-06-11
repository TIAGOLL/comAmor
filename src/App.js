import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import WorkAssistantPage from './pages/workAssistantPage';
import Footer from './components/footer';
import PageInicial from './pages/pageInicial';
import PageLogin from './pages/pageLogin';
import { useState } from 'react';

function App() {

  //pagina inicial => pagina de login
  const [toPageLogin, setToPageLogin] = useState(false)

  const updatePageLogin = up => {
    setToPageLogin(up)
    setToPageInicial(false)
    setPageWorkAssistant(false)
  }


  //pagina de login => pagina assistente de trabalho
  const [toPageWorkAssistant, setPageWorkAssistant] = useState(false)

  const updatePageWorkAssistant = up => {
    setPageWorkAssistant(up)
    setToPageLogin(false)
    setToPageInicial(false)
  }

  // => pagina inicial
  const [toPageInicial, setToPageInicial] = useState(true)


  if (!!toPageLogin) {
    return (
      <>
        <Header />
        <PageLogin toPageWorkAssistant={updatePageWorkAssistant}/>
        <Footer />
      </>
    );
  }

  else if (!!toPageInicial) {
    return (
      <>
        <Header toPageLogin={updatePageLogin} />
        <PageInicial />
        <Footer />
      </>
    );
  }

  else if (!!toPageWorkAssistant) {
    return (<>
      <Header toPageLogin={updatePageLogin} />
      <WorkAssistantPage />
      <Footer />
    </>)
  }

}

export default App;
