import { useEffect, useState } from "react";
import { languages } from "../data/languages";
import { getFarewellText } from "../data/utils";
import clsx from "clsx";

export default function Status(props) {
    const [farewellText, setFarewellText] = useState("");

    useEffect(() => {
        if (props.wrongGuessCount > 0 && props.wrongGuessCount <= languages.length) {
            setFarewellText( getFarewellText(languages[props.wrongGuessCount - 1].name));
    } else if (props.wrongGuessCount === 0) {
        setFarewellText("");
    }
    }, [props.wrongGuessCount]);

    let status;
    if (props.gameWon) {
        status = <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
        </>
    } else if (props.gameLost) {
        status = <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
        </>
    } else {
        status = <p>{farewellText}</p>
    }

    return (
        <section 
            className={clsx("game-status", {
                won: props.gameWon,
                lost: props.gameLost,
                goodbye: props.wrongGuessCount > 0 && props.wrongGuessCount <= languages.length
            })}
            aria-live="polite"
            role="status"
        >
            {status}
        </section>
    );
}