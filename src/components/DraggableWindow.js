import { FaTimes, FaSquare } from "react-icons/fa"
import { useRef, useState } from "react";
import { useDrag } from "../hooks/useDrag"
import { useDispatch, useSelector } from "react-redux";
import { addAppOnTop } from '../store';


function DraggableWindow({ children ,label, onXClick, maxDimensions, windowId, minDimensions }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 600, height: 500 });

    const draggableRef = useRef(null);
    const { position, handleMouseDown } = useDrag({
        ref: draggableRef
    });

    const dispatch = useDispatch()

    const appOnTop = useSelector((state) => {
        return state.appOnTop
      })

    const handleBringOnTop = (label) => {
        dispatch(addAppOnTop(label))
    }

    const handleFullscreen = () => {
        if (!isFullscreen) {
            setDimensions({ width: maxDimensions.width, height: maxDimensions.height });
            setIsFullscreen(true);
        }else{
            setDimensions({ width: 600, height: 500 })
            setIsFullscreen(false);
        }
    }

    return (<div id={windowId} style={{zIndex: appOnTop === label ? 2 : 1}} >
        <div onClick={() => handleBringOnTop(label)}>
            <div 
                className="draggable"
                ref={draggableRef}
                style={{
                    top: isFullscreen? 0: position.y,
                    left: isFullscreen? 0: position.x,
                    width: dimensions.width,
                    height: dimensions.height,
                
                }}
            >
                <div className="draggable-panel window-navbar" onMouseDown={handleMouseDown}>
                    <div className="window-navbar-left">{label}</div>
                    <div className="window-navbar-right">
                        <div onClick={handleFullscreen} className="navbar-icon"><FaSquare size={20} /></div>
                        <div onClick={onXClick} className="navbar-icon"><FaTimes size={20} /></div>
                       
                    </div>
                </div>
                <div className="draggable-content">
                    {children}
                </div>
            </div>
        </div>
    </div>)
}

export default DraggableWindow
