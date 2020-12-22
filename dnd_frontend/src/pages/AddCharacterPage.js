import { Form, Button } from 'react-bootstrap'
import MyDndApi from '../api/MyDndApi.js'
import { Redirect } from 'react-router'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const AddCharacterPage = () => {
  
  const [characterName, setCharacterName] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const raceIds = {
    'Orc':1,
    'Gnome':2,
    'Human':3,
    'Dwarf':4,
    'Elf':5,
  }

  const classIds = {
    'Barbarian':1,
    'Wizard':2,
    'Ranger':3,
    'Paladin':4,
    'Rogue':5,
  }

  const generateName = async () => {
    const response = await fetch('https://uzby.com/api.php?min=4&max=12')
    // let response = await fetch('https://uzby.com/api.php?min=4&max=12', {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: "POST",
    //   body: JSON.stringify(characterObject)
    //   })
    const data = await response.json()
    console.log(data)
  } 


  const handleSubmit = async (event) => {
    event.preventDefault()
    const characterObject = {
      full_name: event.target.elements[0].value,
      age: event.target.elements[1].value,
      strength: event.target.elements[2].value,
      dexterity: event.target.elements[3].value,
      constitution: event.target.elements[4].value,
      intelligence: event.target.elements[5].value,
      wisdom: event.target.elements[6].value,
      charisma: event.target.elements[7].value,
      back_story: event.target.elements[8].value,
      spells: event.target.elements[9].value,
      race_id: raceIds[event.target.elements[10].value],
      class_id: classIds[event.target.elements[11].value],
      equipment: '',
      user_id: 2,
    }
    const response = await MyDndApi.addCharacter(characterObject)
    setRedirect(true)
  }

  if (redirect){
    return <Redirect to='' />
  }

  return (
    <div>
      <div>
      <Link to=''>Homepage</Link>
      </div>

      <Link to='/spelllist'>Spell List</Link>
      <h1>Create Character</h1>

      <button onClick={generateName}>  
        Generate Name
      </button>

      <Form onSubmit={event => handleSubmit(event)}>
        <Form.Group>
          <Form.Label>Character Name</Form.Label>
          <Form.Control onChange={(event) => {setCharacterName(event.target.value)}} value={characterName}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Strength</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Dexterity</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Constitution</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Intelligence</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Wisdom</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Charisma</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Back Story</Form.Label>
          <Form.Control as='textarea' rows={5} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Spells</Form.Label>
          <Form.Control as='textarea' rows={5}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Race</Form.Label>
          <Form.Control as='select'>
            <option>Orc</option>
            <option>Gnome</option>
            <option>Human</option>
            <option>Dwarf</option>
            <option>Elf</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Class</Form.Label>
          <Form.Control as='select'>
            <option>Barbarian</option>
            <option>Wizard</option>
            <option>Ranger</option>
            <option>Paladin</option>
            <option>Rogue</option>
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddCharacterPage;