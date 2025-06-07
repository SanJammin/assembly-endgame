export default function Word(props) {
    const displayWord = props.word.map((letter, index) => {
        const isGuessed = props.guessedLetters.includes(letter)
        if (props.gameLost) {
            return (
                <span key={index} className={isGuessed ? "": "missing-letter"}>{letter}</span>
            )
        } else {
            return (
                <span key={index}>{isGuessed ? letter : ""}</span>
            )
        }
    })

    return (
        <section className="word-holder">
            {displayWord}
        </section>
    )
}