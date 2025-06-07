export default function Word(props) {
    const displayWord = props.word.map((letter, index) => {
        const isGuessed = props.guessedLetters.includes(letter)
        return (
            <span key={index}>{isGuessed ? letter : ""}</span>
        )
    })

    return (
        <section className="word-holder">
            {displayWord}
        </section>
    )
}