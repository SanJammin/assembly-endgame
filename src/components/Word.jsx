export default function Word(props) {
    const displayWord = props.word.map(letter => (
        <span>{letter}</span>
    ))

    return (
        <section className="word-holder">
            {displayWord}
        </section>
    )
}