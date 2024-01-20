
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';

import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import Pagenotfound from './Components/Pagenotfound';
function App() {
  return (
    <div className="App">
   <Header/>
   
   
<Routes>
  {/* localhost 3000 */}
  <Route path='/' element={<Admin/>}/>
  {/* localhost:3000/add */}
  <Route path='/add' element={<Add/>} />
  {/* localhost:3000/view */}
  <Route path='/view/:id' element={<View/>}/>
  {/* localhost:3000/edit */}
  <Route path='/edit/:id' element={<Edit/>} />
  {/* pagenotfound */}
  <Route path='*' element={<Pagenotfound/>}/>
</Routes>
   
   <Footer/>

    </div>
  );
}

export default App;
