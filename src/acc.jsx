import { useState } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Button
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import react-tostify
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


export default function Accueil() {
    //state 
    const [nom, setnom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");


    //comportement
    function formulaire() {
        if (nom === "" || email === "" || password === "") {
            toast.error("tout les champs sont obligatoire");
        } else {
            toast.success(`bonjour ${nom},votre email est ${email},et votre mots de passe est ${password}`)
        }
    }



    //render
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>formulaire d'incription</CardTitle>
                    <ToastContainer />
                </CardHeader>
                <CardContent>

                    <div className="flex flex-col w-[300px] gap-8 ">
                        <Input type="text" placeholder="nom" value={nom} onChange={(e) => setnom(e.target.value)}  />
                        <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                        <Button onClick={formulaire} className="bg-amber-400">valider</Button>

                    </div>
                </CardContent>

            </Card>
        </div>

    )
}