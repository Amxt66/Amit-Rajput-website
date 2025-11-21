import { PropsWithChildren } from "react";
import "./styles/Terminal.css";

const Terminal = ({ children }: PropsWithChildren) => {
    return (
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-btn red"></span>
                    <span className="terminal-btn yellow"></span>
                    <span className="terminal-btn green"></span>
                </div>
                <div className="terminal-title">amit@ai-node: ~/about</div>
            </div>
            <div className="terminal-body">
                <div className="terminal-command">
                    <span className="prompt">$</span> cat about_me.txt
                </div>
                <div className="terminal-content">{children}</div>
                <div className="terminal-cursor">_</div>
            </div>
        </div>
    );
};

export default Terminal;
