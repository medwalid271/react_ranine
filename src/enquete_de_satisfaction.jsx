import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// ✅ Schéma Zod avec 19 réponses obligatoires
const schema = z.object({
  question1: z.string().min(1, "Réponse obligatoire"),
  question2: z.string().min(1, "Réponse obligatoire"),
  question3: z.string().min(1, "Réponse obligatoire"),
  question4: z.string().min(1, "Réponse obligatoire"),
  question5: z.string().min(1, "Réponse obligatoire"),
  question6: z.string().min(1, "Réponse obligatoire"),
  question7: z.string().min(1, "Réponse obligatoire"),
  question8: z.string().min(1, "Réponse obligatoire"),
  question9: z.string().min(1, "Réponse obligatoire"),
  question10: z.string().min(1, "Réponse obligatoire"),
  question11: z.string().min(1, "Réponse obligatoire"),
  question12: z.string().min(1, "Réponse obligatoire"),
  question13: z.string().min(1, "Réponse obligatoire"),
  question14: z.string().min(1, "Réponse obligatoire"),
  question15: z.string().min(1, "Réponse obligatoire"),
  question16: z.string().min(1, "Réponse obligatoire"),
  question17: z.string().min(1, "Réponse obligatoire"),
  question18: z.string().min(1, "Réponse obligatoire"),
  question19: z.string().min(1, "Réponse obligatoire"),
});

// ✅ Liste des 19 questions
const questions = [
  "1. Utilisez-vous régulièrement cet ouvrage hydraulique (puits, forage, etc.) pour vos besoins en eau ?",
  "2. À quelle distance se trouve l’ouvrage de votre domicile ?",
  "3. Combien de fois par jour vous rendez-vous à l’ouvrage ?",
  "4. Avez-vous rencontré des problèmes techniques ou pannes sur l’ouvrage ?",
  "5. Depuis l’installation de l’ouvrage, votre accès à l’eau s’est-il amélioré ?",
  "6. Êtes-vous satisfait(e) de la localisation de l’ouvrage ?",
  "7. Quel est votre niveau de satisfaction général vis-à-vis de l’ouvrage ?",
  "8. Avez-vous déjà formulé une plainte ou une demande d’amélioration concernant l’ouvrage ?",
  "9. Les intrants ont-ils bien été reçus dans votre localité ?",
  "10. Avez-vous observé des retards ou des difficultés pendant la distribution ? (Si oui, quelles en étaient les causes ?)",
  "11. Est-ce que tous les ménages bénéficiaires identifiés ont bien reçu les intrants ? (Y a-t-il eu des exclusions, des doublons ou des absents ?)",
  "12. Avez-vous reçu des plaintes ou des préoccupations de la part des bénéficiaires ?",
  "13. Comment les plaintes ou préoccupations sont-elles traitées dans votre localité ?",
  "14. Selon vous, la qualité des intrants distribués était-elle satisfaisante ?",
  "15. Comment les bénéficiaires ont-ils été informés de la distribution ?",
  "16. Y a-t-il eu des cas de favoritisme, de détournement ou de mauvaise gestion signalés ?",
  "17. Que recommandez-vous pour améliorer les prochaines distributions dans votre localité ?",
  "18. Avez-vous des suggestions pour améliorer le mécanisme de gestion des plaintes ?",
  "19. Quel est le niveau de satisfaction général des bénéficiaires que vous avez pu observer ou entendre ?",
];

export default function EnqueteHydraulique() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Réponses :", data);
    alert("✅ Merci pour votre participation !");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 max-w-3xl mx-auto space-y-6 bg-gray-50 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Enquête de satisfaction - Ouvrages hydrauliques
      </h2>

      {questions.map((q, index) => {
        const name = `question${index + 1}`;
        return (
          <div key={index}>
            <label className="block font-medium mb-1">{q}</label>
            <textarea
              {...register(name)}
              className="border p-2 w-full rounded min-h-[60px]"
              placeholder="Votre réponse..."
            />
            {errors[name] && (
              <p className="text-red-500">{errors[name]?.message}</p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Envoyer
      </button>
    </form>
  );
}
