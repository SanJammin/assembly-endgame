export default function Alphabet(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const alphabetButtons = alphabetArray.map(letter => (
        <button key={letter} onClick={() => props.onClick(letter)}>{letter}</button>
    ));

    return (
        <section className="alphabet-holder">
            {alphabetButtons}
        </section>
    );
}