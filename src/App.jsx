import { useState } from 'react'
import data from './constant';
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const filteredData = data.filter((obj) =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase()) && obj.rating >= minRating
  );


  return (
    <div className='main-container'>
      <input
        type="text"
        placeholder="Search by restaurant name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />

      <label>
        Minimum Rating:
        <input
          type="number"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(parseFloat(e.target.value))}
        />
      </label>


      {
        filteredData.map((obj) => (
          <div className='res-container' key={obj._id.$oid}>
            <div className='res-div'>
              <h1 style={{ color:"#a3965f"}}>Name:- {obj.name}</h1>
              <h2>Address:-{obj.address}</h2>
              <p>Type of Food:-{obj.type_of_food}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
