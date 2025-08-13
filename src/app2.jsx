import React, { useState } from "react";



export default function App2() {
    const [visible, setVisible] = useState(false);

    const toggleBox = () => {
        setVisible(!visible);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
            {/* Titre animé */}
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeInDown">
                Bienvenue dans l'exercice animé 
            </h1>

            {/* Bouton */}
            <button
                onClick={toggleBox}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
                {visible ? "Cacher le carré" : "Afficher le carré"}
            </button>

            {/* Carré animé */}
            {visible && (
                <div className="mt-8 w-32 h-32 bg-yellow-300 rounded-lg animate-bounceIn"></div>
            )}
        </div>
    );
}

