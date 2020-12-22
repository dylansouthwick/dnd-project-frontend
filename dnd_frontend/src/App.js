import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import CharacterPage from './pages/CharacterPage.js'
import AddCharacterPage from './pages/AddCharacterPage.js'
import EditCharacterPage from './pages/EditCharacterPage.js'
import SpellListPage from './pages/SpellListPage.js'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/characters/:CharacterID' component={CharacterPage}></Route>
        <Route exact path='/addcharacter' component={AddCharacterPage}></Route>
        <Route exact path='/characters/:CharacterID/edit' component={EditCharacterPage}></Route>
        <Route exact path='/spelllist' component={SpellListPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
