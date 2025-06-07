import clsx from "clsx";

export default function Alphabet(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");

    const alphabetButtons = alphabetArray.map(letter => {
        const isGuessed = props.guessedLetters.includes(letter);
        const isCorrect = isGuessed && props.word.includes(letter);
        const isWrong = isGuessed && !props.word.includes(letter);

        return (
        <button 
            key={letter} 
            onClick={() => props.onClick(letter)}
            className={clsx("key", {correct: isCorrect, wrong: isWrong})}
            disabled={props.gameOver}
            aria-disabled={isGuessed}
            aria-label={`Letter ${letter}`}
        >
            {letter}
        </button>
    )}
    );

    return (
        <section className="alphabet-holder">
            {alphabetButtons}
        </section>
    );
}