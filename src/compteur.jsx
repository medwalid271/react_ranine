import { useState } from "react";

// 🧒 Composant enfant pour saisir du texte
function InputChild({ onTextChange }) {
  return (
    <input
      type="text"
      placeholder="Tape quelque chose..."
      onChange={(e) => onTextChange(e.target.value)}
      className="border px-3 py-2 rounded-lg"
    />
  );
}

// Composant enfant pour afficher le texte
function DisplayChild({ text }) {
  return <p className="mt-4 text-lg">Texte : {text}</p>;
}

// 👨‍👩‍👧 Composant parent
export default function Parent() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Exercice Props & Callback</h1>

      {/* Enfant qui modifie le texte */}
      <InputChild onTextChange={setText} />

      {/* Enfant qui affiche le texte */}
      <DisplayChild text={text} />
    </div>
  );
}

