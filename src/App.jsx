
import { Routes, Route, Link } from "react-router-dom";
import Mass from "./mass";
import Formulaire from "./info";
import EnqueteHydraulique from "./enquete_de_satisfaction";


function App() {
  return (
    // <div>
    //   {/* Menu de navigation */}
    //   <nav className="text-black">
    //     <Link to="/accueil">Accueil</Link> | 
    //     <Link to="/about">À propos</Link>
    //   </nav>

    //   {/* Définition des routes */}
    //   <Routes>
    //     <Route path="/accueil" element={<h1>Page d'accueil</h1>} />
    //     <Route path="/about" element={<h1>À propos de nous</h1>} />
    //   </Routes>
    // </div>

    // <Mass/>
    // <Formulaire/>
    <EnqueteHydraulique/>
  
  
  );
}

export default App;

