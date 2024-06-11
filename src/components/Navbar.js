import { FaCog } from 'react-icons/fa'
import SearchBar from './SearchBar';
import Clock from './Clock';
import { useSelector } from 'react-redux';
import ActiveApps from './ActiveApps';

const Navbar = ({ setView }) => {

    const activeApps = useSelector((state)=>{
        return state.activeApps
    })

    return (
        <div id="navbar" className='nes-container is-rounded is-dark'>
            <div id="navLeft">
                <button onClick={() => setView('desktop')} type="button" className="nes-btn">Desktop</button>
                <SearchBar />
                <ActiveApps activeApps={activeApps} />

            </div>
            <div id="navRight">
                <button onClick={() => setView('settings')} type="button" className="nes-btn"><FaCog size={18} /></button>
                <Clock showSeconds/>
            </div>

        </div>
    );
};

export default Navbar;
