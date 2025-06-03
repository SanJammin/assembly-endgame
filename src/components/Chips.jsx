import { languages } from "../data/languages";

export default function Chips() {
    
    return (
        <div className="chip-holder">
            {languages.map(chip => (
                <span style={{
                    backgroundColor: chip.backgroundColor,
                    color: chip.color,
                    borderRadius: "2px",
                    padding: "5px"
                }}>{chip.name}</span>
            ))}
        </div>
    );
}