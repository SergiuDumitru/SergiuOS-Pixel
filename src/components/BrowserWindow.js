import DraggableWindow from "./DraggableWindow";
import Browser from "./Browser";


function BrowserWindow({label, onXClick, consoleZIndex, maxDimensions}) {
    const minDimensions = {
        width: 600,
        height: 500
    }
    
    return (
        <DraggableWindow 
        windowId={label} 
        maxDimensions={maxDimensions} 
        minDimensions={minDimensions}  
        zIndex={consoleZIndex} 
        onXClick={onXClick} 
        label={label}>
            <Browser />
        </DraggableWindow>
    );
}

export default BrowserWindow