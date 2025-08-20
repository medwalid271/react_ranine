import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function FormulairePlainte() {
    const [formData, setFormData] = useState({
        date: "",
        localite: "",
        telephone: "",
        cin: "",
        description: "",
        nom: "",
        signature: ""
    });

    // Générer la date actuelle au format YYYY-MM-DD
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setFormData((prev) => ({ ...prev, date: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Plainte envoyée :", formData);
        // Ici tu pourras envoyer formData au backend
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">



            <Card>
                <CardHeader>
                    <CardTitle>Formulaire de Dépôt de Plainte</CardTitle>

                </CardHeader>
                <CardContent className="w-[600px]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Champ Date automatique */}
                        <div>
                            <label className="block font-medium">Date :</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                readOnly
                                className="w-full border p-2 rounded-lg bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Localité / Région :</label>
                            <input
                                type="text"
                                name="localite"
                                value={formData.localite}
                                onChange={handleChange}
                                placeholder="Ex: Djibouti - Balbala"
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Téléphone :</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="+253 77 ..."
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Carte d'identité (optionnel) :</label>
                            <input
                                type="text"
                                name="cin"
                                value={formData.cin}
                                onChange={handleChange}
                                placeholder="N° de la carte d'identité"
                                className="w-full border p-2 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Description de la plainte :</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg"
                                required
                            ></textarea>
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Soumettre la plainte
                        </button>
                    </form>
                </CardContent>

            </Card>


        </div>
    );
}
