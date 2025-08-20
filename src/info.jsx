import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  
} from "@/components/ui/card"

export default function Formulaire() {
  const [formData, setFormData] = useState({
    type: "",
    nom: "",
    telephone: "",
    commentaire: "",
  });

  // Fonction pour gérer les changements d’inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction quand on soumet le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert("Formulaire soumis ✅");
  };

  return (
    <Card>
  <CardHeader>
  
  </CardHeader>
  <CardContent>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          informations sur la ligne 2020
        </h2>

        {/* Liste déroulante */}
        <label className="block mb-2 font-medium text-gray-700">
          Type d'info :
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        >
          <option value="">Select</option>
          <option value="add">Add info</option>
          <option value="arulos">Arulos Info</option>
          <option value="general">Info générale</option>
          <option value="cart">Cart in info</option>
        </select>

        {/* Nom */}
        <label className="block mb-2 font-medium text-gray-700">Nom :</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Entrez votre nom"
          required
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Téléphone */}
        <label className="block mb-2 font-medium text-gray-700">Téléphone :</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Ex: +253 77 00 00 00"
          required
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Commentaire */}
        <label className="block mb-2 font-medium text-gray-700">Commentaire :</label>
        <textarea
          name="commentaire"
          value={formData.commentaire}
          onChange={handleChange}
          rows="3"
          placeholder="Votre commentaire..."
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        ></textarea>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Soumettre
        </button>
      </form>
      </div>
  </CardContent>
 
</Card>
    

  );
}
