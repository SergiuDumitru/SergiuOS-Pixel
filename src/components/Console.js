import { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import TerminalOutputLine from './TerminalOutputLine';
import 'ldrs/ring'
import { mirage } from 'ldrs';


function Console() {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>"Type 'help' for a list of commands"</TerminalOutput>
    ]);

    const [isLoading, setIsLoading] = useState(false);

    mirage.register()

    const url = "https://official-joke-api.appspot.com/random_joke";

    const loadNewJoke = async () => {
        setIsLoading(true);
        const request = await fetch(url).then((response) => response.json());

        setTerminalLineData((oldArray) => [...oldArray, <TerminalOutputLine command="joke" color={"green"} text={request.setup} />, <TerminalOutputLine color={"lightGreen"} text={request.punchline} />]);
        setIsLoading(false);
    };

    const handleConsoleCommand = (command) => {
        console.log(command)
        switch (command) {
            case "help":
                setTerminalLineData(oldArray => [...oldArray, <TerminalOutputLine command="help" text="Available commands: help, reboot, joke, clear"/>])
                break;
            case "reboot":
                setIsLoading(true);
                setTerminalLineData(oldArray => [...oldArray, <TerminalOutputLine command="reboot" color="red" text="Rebooting..."/>]);
                window.location.reload();
                break;
            case "clear":
                setTerminalLineData([]);
                break;
            case "joke":

                loadNewJoke();
                break;
            default:
                setTerminalLineData(oldArray => [...oldArray, <TerminalOutputLine command={command} color={"red"} text="Command not found"/>]);
                break;
        }
    };
    return (
        <div id="console" className="container">
            <Terminal prompt='𐌔' colorMode={ColorMode.Dark} onInput={handleConsoleCommand}>
                {terminalLineData}{isLoading && <l-mirage
                    size="60"
                    speed="2.5"
                    color="white"
                ></l-mirage>}
            </Terminal>
        </div>
    );
}
export default Console;
