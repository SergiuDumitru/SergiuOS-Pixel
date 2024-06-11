import DraggableWindow from "./DraggableWindow";


function ProjectsWindow({label, onXClick, maxDimensions}) {
    
    
    return (
        <DraggableWindow windowId = "projects" maxDimensions={maxDimensions} onXClick={onXClick} label={label}></DraggableWindow>
       
    );
}

export default ProjectsWindow