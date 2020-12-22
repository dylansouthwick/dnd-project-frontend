import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SpellListPage = (props) => {

const [spells, setSpells] = useState([]);

useEffect(() => {
  spellList()
},[])


const spellList = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/spells')
  const data = await response.json()
  setSpells(data.results)
}

  return (
    <div>
      <Link to=''>Homepage</Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Spells</th>
          </tr>
        </thead>
        <tbody>
          {spells.map((spell, index) => (
            <tr>
              <td>{spell.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  </div> 
  )
}

export default SpellListPage