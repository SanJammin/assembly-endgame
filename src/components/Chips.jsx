import { languages } from "../data/languages";
import clsx from "clsx";

export default function Chips(props) {
    
    return (
        <div className="chip-holder">
            {languages.map((chip, index) => {

                return (
                    <span style={{
                        backgroundColor: chip.backgroundColor,
                        color: chip.color
                    }}
                        key={chip.name}
                        className={clsx("chip", {lost: index < props.wrongGuessCount})}
                    >
                        {chip.name}
                    </span>
                )
            })}
        </div>
    );
}