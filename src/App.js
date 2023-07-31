import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home/Home';
import LoginCadastro from './Pages/LoginCadastro/LoginCadastro';

import Blog from './Pages/Blog/Blog';
import Materia1 from './Pages/Blog/Materias/Materia1';
import Materia2 from './Pages/Blog/Materias/Materia2';
import Materia3 from './Pages/Blog/Materias/Materia3';
import Materia4 from './Pages/Blog/Materias/Materia4';
import Materia5 from './Pages/Blog/Materias/Materia5';
import Materia6 from './Pages/Blog/Materias/Materia6';

import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/PoliticaPrivacidade';
import Contato from './Pages/Contato/Contato';
import Institucional from  './Pages/Institucional/Institucional';
import Faq from './Pages/Faq/Faq';
import Demo from './Pages/Demo/Demo';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/LoginCadastro' element={<LoginCadastro />} />

          {/*Blog com Matérias*/}
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Materia1' element={<Materia1 />} />
          <Route path='/Materia2' element={<Materia2 />} />
          <Route path='/Materia3' element={<Materia3 />} />
          <Route path='/Materia4' element={<Materia4 />} />
          <Route path='/Materia5' element={<Materia5 />} />
          <Route path='/Materia6' element={<Materia6 />} />

          <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Institucional' element={<Institucional />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/Demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
