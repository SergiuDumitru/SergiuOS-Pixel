import Icon from './Icon';

import { useState, useEffect, createRef } from 'react';
import projects from '../images/icons/projects.png'
import browser from '../images/icons/browser.png'
import console from '../images/icons/terminal.png'
import ProjectsWindow from './ProjectsWindow';
import ConsoleWindow from './ConsoleWindow';
import BrowserWindow from './BrowserWindow';
import { useDispatch, useSelector } from 'react-redux';
import { addActiveApp, removeActiveApp, setBackground } from '../store';

const Desktop = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => {
        
    return state.themeSettings
  })




  const [selectedIcon, setSelectedIcon] = useState("projects");
  const [showProjectsWindow, setShowProjectsWindow] = useState(false);
  const [showConsoleWindow, setShowConsoleWindow] = useState(false);
  const [showBrowserWindow, setShowBrowserWindow] = useState(false);
  const iconWidth = 80;
  const iconHeight = 80;
  const [desktopWidth, setDesktopWidth] = useState(0)
  const [desktopHeight, setDesktopHeight] = useState(0)

  const myRef = createRef()
  useEffect(() => {
    setDesktopHeight(myRef.current.offsetHeight)
    setDesktopWidth(myRef.current.offsetWidth)
  }, [myRef])



  const handleProjectClose = () => {
    setShowProjectsWindow(false)
    dispatch(removeActiveApp("projects"))
  }

  const handleConsoleClose = () => {
    setShowConsoleWindow(false)
    dispatch(removeActiveApp("console"))
  }

  const handleBrowserClose = () => {
    setShowBrowserWindow(false)
    dispatch(removeActiveApp("browser"))
  }



  const handleIconClick = (icon) => () => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  
  };

  const handleDoubleClick = (icon) => () => {
    dispatch(addActiveApp(icon[0].toUpperCase() + icon.slice(1)))

    if (icon === "projects") {
      setShowProjectsWindow(true)

    }
    if (icon === "console") {
      setShowConsoleWindow(true)

    }
    if (icon === "browser") {
      setShowBrowserWindow(true)

    }
  }




  return (
    <div
      ref={myRef}
      id="desktop"
      className="nes-container is-dark"

      style={{
        backgroundImage: `url(${theme.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

      }}>

      <Icon
        icon={projects}
        application="folder"
        label="Projects"
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        onClick={handleIconClick('projects')}
        onDoubleClick={handleDoubleClick('projects')}
        isSelected={selectedIcon === "projects"}
      />

      <Icon
        icon={browser}
        application="browser"
        label="Browser"
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        onClick={handleIconClick('browser')}
        onDoubleClick={handleDoubleClick('browser')}
        isSelected={selectedIcon === "browser"}
      />

      <Icon
        icon={console}
        application="console"
        label="Console"
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        onClick={handleIconClick('console')}
        onDoubleClick={handleDoubleClick('console')}
        isSelected={selectedIcon === "console"}
      />

      {showProjectsWindow && <ProjectsWindow 
      maxDimensions={{ width: desktopWidth, height: desktopHeight }} 
      onXClick={handleProjectClose} 
      label={"Projects"} />}

      {showBrowserWindow && <BrowserWindow 
      maxDimensions={{ width: desktopWidth, height: desktopHeight }} 
      onXClick={handleBrowserClose} 
      label={"Browser"} 
      />}

      {showConsoleWindow && <ConsoleWindow 
      maxDimensions={{ width: desktopWidth, height: desktopHeight }} 
      onXClick={handleConsoleClose} 
      label={"Console"} />}

    </div>
  );
};

export default Desktop;