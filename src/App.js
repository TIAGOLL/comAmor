import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import WorkAssistantPage from './pages/workAssistantPage';
import Footer from './components/footer';
import PageInicial from './pages/pageInicial';
import PageLogin from './pages/pageLogin';

function App() {

    return (
      <>
        <Header />
          <PageLogin />
        <Footer />
      </>
    );

}



export default App;
