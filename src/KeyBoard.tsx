const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type keyboardProps = {
  activeLetters: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled :boolean
};
export function Keyboard({
  activeLetters,
  inactiveLetter,
  addGuessedLetter,
  disabled = false
}: keyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr)",
        gap: ".5rem",
      }}
    >
      {alphabet.map((val) => {
        const isAcctive = activeLetters.includes(val);
        const inAcctive = !activeLetters.includes(val);
        return (
          <button disabled = {disabled} onClick  = {() => addGuessedLetter(val)} className={`butn   ${isAcctive ? 'active':'inactive'}`}  key={val}>
            {val}
          </button>
        );
      })}
    </div>
  );
}
