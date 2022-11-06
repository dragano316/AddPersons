import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import AddPerson from './AddPerson';
import PersonCards from './PersonCards';

function App() {
  const [persons, setPersons] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchFirstName, setSearchFirstName] = useState('');

  const addPersonHandler = (person) => {
    setPersons([...persons, person]);
    setTempData([...persons,  person]);
  }

  const searchUsingFirstName = (e) => {
    setSearchFirstName(e.target.value);
  }

  const handleSearch = () => {
    const filteredResults = tempData.filter((person) => person.firstName.includes(searchFirstName));
    setPersons(filteredResults);
  }

  const sortUsingFirstName = () => {
    const sortByName = [...persons];
    const sortedPersons = sortByName.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
    setPersons(sortedPersons);
  }

  const goBackHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const goNextHandler = () => {
    if (page * 5 < persons.length) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Search using firstname" onChange={searchUsingFirstName}/>
      <button type="submit" onClick={handleSearch}>Search</button>
      <button type="submit" onClick={sortUsingFirstName}>Sort using first name</button>
      <div className="appContainer">
      <PersonCards persons={persons} page={page}/>
      <AddPerson addPersonHandler={addPersonHandler}/>
      </div>
  <button onClick={goBackHandler}>back</button>
      <button onClick={goNextHandler}>next</button>
    </div>
  );
}

export default App;
