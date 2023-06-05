import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Login from './pages/login';
import Footer from './components/footer';
import PageInicial from './pages/pageInicial';

function App() {

    return (
      <>
        <Header />
          <PageInicial />
        <Footer />
      </>
    );

}



export default App;
