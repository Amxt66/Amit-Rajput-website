import { useState, useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface HackerTextProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "span" | "p";
    trigger?: boolean;
}

const HackerText = ({ text, className = "", tag: Tag = "span", trigger = true }: HackerTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<any>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((_, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        if (trigger) {
            scramble();
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [trigger]);

    return (
        <Tag className={className} onMouseEnter={scramble} style={{ cursor: "default" }}>
            {displayText}
        </Tag>
    );
};

export default HackerText;
