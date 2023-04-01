import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./KeyBoard";

function App() {
  const [wordsToGuess, setwordsToGuess] = useState(() => {
    return words.data[Math.floor(Math.random() * words.data.length)].name;
  });

  const [guessedLetters, setguessedLetter] = useState<string[]>([]);
  const incorrectLettrs = guessedLetters.filter(
    (letter) => !wordsToGuess.includes(letter)
  );
  const isLoser =  incorrectLettrs.length > 6;
  const isWinner = wordsToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setguessedLetter((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      const regex = /[A-Z]/g;
      if (key.match(regex)) return;
      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);


  const addGuessedLetter = function(key){
    addGuessedLetters(key);
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {isWinner && "Winner Refresh to try again"}
      {isLoser && "Sorry Next time"}
      </div>
      <HangmanDrawing numberofGuesses={incorrectLettrs.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordsToGuess={wordsToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard 
          activeLetters = {guessedLetters.filter(letter =>wordsToGuess.includes(letter))}
          inactiveLetter = {incorrectLettrs}
          addGuessedLetter = {addGuessedLetter}
          disabled = {isLoser} 
        />
      </div>
    </div>
  );
}

export default App;
