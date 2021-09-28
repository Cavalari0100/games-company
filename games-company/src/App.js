import './App.css';
import MainNavBar from './componentes/MainMenu/MainNavBar';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './componentes/paginas/firstPage';
function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={FirstPage}/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
