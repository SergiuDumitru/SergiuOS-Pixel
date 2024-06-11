import DraggableWindow from "./DraggableWindow";
import Console from "./Console";

function ConsoleWindow({label, onXClick, consoleZIndex, maxDimensions, zIndex}) {

    
    return (
        <DraggableWindow maxDimensions={maxDimensions} zIndex={consoleZIndex} onXClick={onXClick} label={label}>
            <Console />
        </DraggableWindow>
    );
}

export default ConsoleWindow