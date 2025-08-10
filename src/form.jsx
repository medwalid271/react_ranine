
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [nom, setNom] = useState("");

  const direBonjour = () => {
    if (nom.trim() === "") {
      toast.error("Veuillez entrer votre nom !");
    } else {
      toast.success(`Bonjour, ${nom} !`);
      setNom("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Exercices React + Tailwind + Toastify
      </h1>

      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrez votre nom"
        className="border rounded-lg px-4 py-2 w-64 text-center mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={direBonjour}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Dire Bonjour
      </button>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}
