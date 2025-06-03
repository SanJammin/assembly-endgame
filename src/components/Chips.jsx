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
                }}
                    key={chip.name}
                >
                    {chip.name}
                </span>
            ))}
        </div>
    );
}