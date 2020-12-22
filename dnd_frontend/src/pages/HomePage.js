import MyDndApi from '../api/MyDndApi.js'
import CharacterList from '../components/CharacterList/CharacterList.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadData();
  }, [])
  
  const loadData = async () => {
    const response = await MyDndApi.fetchCharacters()
    setCharacters(response)
  }

  return (
    <div>
      <h1>HomePage</h1>
      <CharacterList characters={characters}/>
      <Link to='/addcharacter'>Create a new character</Link>
    </div>
  )
}


export default HomePage;