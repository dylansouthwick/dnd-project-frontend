import { Form, Button } from 'react-bootstrap'
import MyDndApi from '../api/MyDndApi.js'
import { Redirect } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AddCharacterPage = (props) => {
  
  const [character, setCharacter] = useState([]);
  const [characterName, setCharacterName] = useState([]);
  const [spells, setSpells] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await MyDndApi.fetchCharacterById(props.match.params.CharacterID)
    setCharacter(response)
    setCharacterName(response.full_name)
    setSpells(response.spells)
    console.log(response.full_name)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const characterObject = {
      full_name: event.target.elements[0].value,
      age: character.age,
      back_story: character.back_story,
      strength: event.target.elements[1].value,
      dexterity: event.target.elements[2].value,
      constitution: event.target.elements[3].value,
      intelligence: event.target.elements[4].value,
      wisdom: event.target.elements[5].value,
      charisma: event.target.elements[6].value,
      equipment: '',
      spells: event.target.elements[7].value,
      race_id: character.race_id,
      class_id: character.class_id,
      user_id: 2,
    }
    const response = await MyDndApi.editCharacter(characterObject, props.match.params.CharacterID)
    setRedirect(true)
  }
  if (redirect){
    return <Redirect to='/' />
  }
  return (
    <div>
      <div>
        <Link to=''>Homepage</Link>
      </div>
      <Link to='/spelllist'>Spell List</Link>
      <h1>Edit Character</h1>

      <Form onSubmit={event => handleSubmit(event)}>
        <Form.Group controlID='full_name'>
          <Form.Label>Character Name</Form.Label>
          <Form.Control onChange={(event) => {setCharacterName(event.target.value)}} value={characterName}/>
        </Form.Group>

        <Form.Group controlID='strength'>
          <Form.Label>Strength</Form.Label>
          <Form.Control value={character.strength}/>
        </Form.Group>

        <Form.Group controlID='dexterity'>
          <Form.Label>Dexterity</Form.Label>
          <Form.Control value={character.dexterity}/>
        </Form.Group>

        <Form.Group controlID='constitution'>
          <Form.Label>Constitution</Form.Label>
          <Form.Control value={character.constitution}/>
        </Form.Group>

        <Form.Group controlID='intelligence'>
          <Form.Label>Intelligence</Form.Label>
          <Form.Control value={character.intelligence}/>
        </Form.Group>

        <Form.Group controlID='wisdom'>
          <Form.Label>Wisdom</Form.Label>
          <Form.Control value={character.wisdom}/>
        </Form.Group>

        <Form.Group controlID='charisma'>
          <Form.Label>Charisma</Form.Label>
          <Form.Control value={character.charisma}/>
        </Form.Group>

        <Form.Group controlID='spells'>
          <Form.Label>Spells</Form.Label>
          <Form.Control as='textarea' rows={5} onChange={(event) => {setSpells(event.target.value)}} value={spells}/>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}



export default AddCharacterPage;