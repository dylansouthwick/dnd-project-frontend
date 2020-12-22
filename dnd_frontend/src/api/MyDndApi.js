const BASE_URL = 'http://localhost:8000/'

const fetchCharacterById = async (characterID) => {
  const response = await fetch(`${BASE_URL}characters/${characterID}`);
  const data = await response.json();
  return data;
};

const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}characters`);
  const data = response.json();
  return data;
};

const addCharacter = async (characterObject) => {
  try{
    let response = await fetch(`${BASE_URL}characters/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(characterObject)
    })
    let data = response.json();
    if (data.error){
      return {message: 'error'}
    }
    else {
      return {message: 'success'}
    }
  } catch (error) {
    console.error(error)
  }
};

const editCharacter = async (characterObject, characterID) => {
  try{
    let response = await fetch(`${BASE_URL}characters/${characterID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(characterObject)
    })
    let data = response.json();
    if (data.error){
      return {message: 'error'}
    }
    else {
      return {message: 'success'}
    }
  } catch (error) {
    console.error(error)
  }
};

const deleteCharacter = async (characterID) => {
  try{
    let response = await fetch(`${BASE_URL}characters/${characterID}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify(characterID)
    })
  } catch (error) {
    console.error(error)
  }
}

const fetchRace = async (raceID) => {
  const response = await fetch(`${BASE_URL}races/${raceID}`);
  const data = response.json();
  return data;
}

const fetchClass = async (classID) => {
  const response = await fetch(`${BASE_URL}classes/${classID}`);
  const data = response.json();
  return data;
}

export default {
  addCharacter,
  fetchCharacters,
  fetchCharacterById,
  editCharacter,
  deleteCharacter,
  fetchRace,
  fetchClass,
};