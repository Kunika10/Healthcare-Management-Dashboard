import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';


const Sidenav = (props) => {
  // const [query, setQuery] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const data = [props.username];
  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);

  //   if (value.trim() === "") {
  //     setSuggestions([]);
  //   } else {
  //     const filteredSuggestions = data.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setSuggestions(filteredSuggestions);
  //   }
  // };

  // const handleSuggestionClick = (suggestion) => {
  //   setQuery(suggestion);
  //   setSuggestions([]);
  //   setIsModalOpen(false);
  // };


  return (
    <>
      <div className='sidenav'>
      {/* {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )} */}
      <Container fluid>
      
      <div className='sidenav'>
      
      {/* {posts.map(post=><p>{post.name}</p>)} */}
      <div className='nav-name'>
      <div className='nav-img'>
      <img src={props.image}/>
      <h5>{props.user}</h5>
      </div>

        <div className='nav-details'>
        <p>{props.gender} <span>{props.age}</span></p>
        </div>
      </div>
      </div>
      

        </Container>
    </div>
    </>
    
        
  )
  };
  export default Sidenav;
