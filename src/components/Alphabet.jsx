export default function Alphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const alphabetButtons = alphabetArray.map(letter => (
        <button>{letter}</button>
    ));

    return (
        <section className="alphabet-holder">
            {alphabetButtons}
        </section>
    );
}