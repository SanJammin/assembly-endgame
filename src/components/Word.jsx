export default function Word(props) {
    const displayWord = props.word.map((letter, index) => (
        <span key={index}>{letter}</span>
    ))

    return (
        <section className="word-holder">
            {displayWord}
        </section>
    )
}