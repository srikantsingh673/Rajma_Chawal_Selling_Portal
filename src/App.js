import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Form from './Components/Form';
import Result from './Components/Result'

function App() {
  return (
    <div>
      <Navigation />
      <Container fluid="md">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/form' element={<Form />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
