export default function Status(props) {
    let status;
    if (props.gameWon) {
            status = <>
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </>
    } else if (props.gameLost) {
            status = <>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly </p>
            </>
    }

    return (
        <section className={`game-status ${props.gameWon ? "won" : 
            props.gameLost ? "lost" : ""}`}>
            {status}
        </section>
    );
}