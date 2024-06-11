import { FaGoogle } from 'react-icons/fa'
import { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm !== '' && searchTerm !== null) {
            window.open(`https://google.com/search?q=${searchTerm}`, '_blank');
        }

        setSearchTerm('');
    };


    return (
        <form id="googleSearch" className="nes-field is-inline" onSubmit={handleSubmit}>
            <label ><FaGoogle size={18} /></label>
            <input value={searchTerm} onChange={handleChange} type="text" id="googleInputField" className="nes-input is-dark" placeholder="Search on Google..." />
            <button type="button" onClick={handleSubmit} className="nes-btn is-primary">Search</button>
        </form>
    )
}

export default SearchBar;