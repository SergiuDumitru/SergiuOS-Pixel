function TerminalOutputLine({ color, text, command }) {
    return (
        <div className="terminal-output-line">
            <span style={{ whiteSpace: "normal", color:color }}>{command?"𐌔 "+command: null}</span><br></br>
            <span style={{ whiteSpace: "normal", color:color }}>{text}</span>
        </div>
    );
}
export default TerminalOutputLine