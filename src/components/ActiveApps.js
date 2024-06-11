import projects from '../images/icons/projects.png'	
import browser from '../images/icons/browser.png'
import console from '../images/icons/terminal.png'
import { useSelector, useDispatch } from 'react-redux';
import { addAppOnTop } from '../store';


function ActiveApps({activeApps}){
    const dispatch = useDispatch()
    const iconSize = 24;
    const appOnTop = useSelector((state) => {
        
        return state.appOnTop
      })

    const handleActiveClick = (app) => {
        return () => dispatch(addAppOnTop(app))
        
    }
     
    return <div className="active-apps">
        {activeApps.map(app => 
            <div className="active-app" key={app}>
                {app === "Projects" && <img className={appOnTop === "Projects" ? "active" : ""} src={projects} alt="projects" width={iconSize} height={iconSize} onClick={handleActiveClick("Projects")}/>}
                {app === "Browser" && <img className={appOnTop === "Browser" ? "active" : ""} src={browser} alt="browser"  width={iconSize} height={iconSize} onClick={handleActiveClick("Browser")}/>}
                {app === "Console" && <img className={appOnTop === "Console" ? "active" : ""} src={console} alt="console"  width={iconSize} height={iconSize} onClick={handleActiveClick("Console")}/>}
            </div>
        )}
    </div>
}

export default ActiveApps;