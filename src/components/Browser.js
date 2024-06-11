import { FaArrowLeft, FaArrowRight, FaAngleRight } from "react-icons/fa"
import { useState } from 'react';


function Browser() {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentLink, setCurrentLink] = useState("https://www.bing.com/");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [history, setHistory] = useState(["https://www.bing.com/"]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };




    const updateCurrentLink = (newLink) => {
        // Update the current link and reset the search term
        setCurrentLink(newLink);
        setSearchTerm('');
        // Update the history and current index
        const newHistory = history.slice(0, currentIndex + 1); // truncate future history if any
        newHistory.push(newLink);
        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
    };

    const goBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentLink(history[currentIndex - 1]);
        }
    };

    const goForward = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentLink(history[currentIndex + 1]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm !== '' && searchTerm !== null) {
            if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(searchTerm)) {
                updateCurrentLink(searchTerm);
            } else {
                const newLink = "https://www.bing.com/search?q=" + searchTerm;
                updateCurrentLink(newLink);
            }

        }
        setSearchTerm('');
    };

    return (
        <div id="browser">
            <div className="nes-container is-dark is-centered" id="browser-navigation">
                <div className="browser-navigation-left">
                    <button onClick={goBack} type="button" className="nes-btn"><FaArrowLeft size={28} /></button>
                    <button onClick={goForward} type="button" className="nes-btn"><FaArrowRight size={28} /></button>
                </div>
                <div className="browser-navigation-right">
                    <form className="nes-field is-inline" onSubmit={handleSubmit}>
                        <input style={{ width: "100%" }} onSubmit={handleSubmit} value={searchTerm} onChange={handleChange} type="text" className="nes-input is-dark" placeholder={currentLink} />
                        <button type="button" onClick={handleSubmit} className="nes-btn is-primary"><FaAngleRight size={18} /></button>
                    </form>
                </div>
            </div>
            <div id="browser-container">
                <iframe
                    style={{
                        position: "absolute", height: "100%", width: "100%", border: "0",
                        boxSizing: "border-box"
                    }}
                    title="browser"
                    src={currentLink} />

            </div>

        </div>
    )
}

export default Browser