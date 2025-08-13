import React, { useState } from "react";

export default function  Carte() {


    const [couleur, setCouleur] = useState("bg-white");

    const changerCouleur = () => {
        const couleurs = ["bg-white", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
        const indexAleatoire = Math.floor(Math.random() * couleurs.length);
        setCouleur(couleurs[indexAleatoire]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                className={`shadow-lg rounded-lg p-6 max-w-sm w-full transition-all duration-300 ${couleur}`}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Carte Interactive</h2>
                <p className="text-gray-600 mb-4">
                    Clique sur le bouton pour changer la couleur de la carte.
                </p>
                <button
                    onClick={changerCouleur}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Changer couleur
                </button>
            </div>
        </div>
    )
}

