import { Link } from 'react-router-dom';




const CharacterList = (props) => {
  
  const {characters} = props;

  return (
    <div>
      {characters.map((character, index) => (
        <div key={character.id}>
          <Link to={`/characters/${character.id}`}>{character.full_name}</Link>
        </div>
      ))}
    </div>
  );
}




export default CharacterList
