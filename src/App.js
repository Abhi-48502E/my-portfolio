import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Anim from './Components/Anim/Anim';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Anim/>
    </div>
  );
}
export default App;
