import MyDndApi from '../api/MyDndApi.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'



const CharacterPage = (props) => {

  const [character, setCharacter] = useState([]);
  const [race, setRace] = useState([]);
  const [role, setRole] = useState([]);
  const [redirect, setRedirect] = useState(false);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const characterResponse = await MyDndApi.fetchCharacterById(props.match.params.CharacterID);
    setCharacter(characterResponse);
    const raceResponse = await MyDndApi.fetchRace(characterResponse.race_id);
    setRace(raceResponse.title);
    const classResponse = await MyDndApi.fetchClass(characterResponse.class_id);
    setRole(classResponse.title);
  };

  const deleteCharacter = async () => {
    const response = await MyDndApi.deleteCharacter(character.id);
    setRedirect(true);
  };

  if (redirect){
    return <Redirect to='' />
  };

  return (
    <div>
      <h1>{character.full_name}</h1>
      <h2>{race} {role}</h2>
      <h4>Strength: {character.strength}</h4>
      <h4>Dexterity: {character.dexterity}</h4>
      <h4>Constitution: {character.constitution}</h4>
      <h4>Intelligence: {character.intelligence}</h4>
      <h4>Wisdom: {character.wisdom}</h4>
      <h4>Charisma: {character.charisma}</h4>
      <p>
        Back Story:   {character.back_story}
      </p>
      <p>
        Spells:   {character.spells}
      </p>
      <div>
      <Link to={ `/characters/${character.id}/edit`}>Edit Character</Link>
      </div>
      <div>
      <button onClick={deleteCharacter} type='delete'>Delete Character</button>
      </div>
      <Link to=''>Homepage</Link>
    </div>
  )
}


export default CharacterPage;
