import { useState } from "react"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default function Accueil() {
    //state 
    const [nom, setnom] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");

    //comportement
    function formulaire() {
        if (nom === "" || email === "" || password === "") {
            setmessage("tout les champs sont obligatoire")
        } else {
            setmessage(`bonjour ${nom},votre email est ${email},et votre mots de passe est ${password}`)
        }
    }



    //render
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <div>
                    <h1>formulaire d'incription</h1>
                    <input type="text" placeholder="nom" value={nom} onChange={(e) => setnom(e.target.value)} className="" />
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="" />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} className="" />
                    <button onClick={formulaire} className="">valider</button>

                </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    )
}