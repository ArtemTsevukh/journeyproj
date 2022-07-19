import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function Days() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://live.vamoos.com/api/itineraries/VMD-VL1234"
    );

    setBooks(response.data);
  };

  return (
    <div className="App">
    
      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Список всех локаций
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            
            const info = book.brief.shortInformation.join(", ");

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.headline}</h2>

                <div className="details">
                  <p>{info}</p>
                  <p>{book.brief.day} day</p>
                
                  
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}