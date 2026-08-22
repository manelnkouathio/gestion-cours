import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeft, CirclePlus} from "lucide-react";
import {useState} from "react";
import {createTache} from "../services/TacheService.ts";

const AjouterTaches = () => {

/*------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const navigator = useNavigate();

    //Variable permettant la recuperation de l'ID de la page
    const {mid} = useParams();

    //function du Bouton Retour
    function retour(){
        navigator('/listetaches/' + mid)
    }

    // Initialisation des variables clé d'ajout de Tache
    const [name, setName] = useState("");
    const [priority, setPriority] = useState("");


    //function d'ajout de Tache
    // @ts-ignore
    function saveTache(e){
        e.preventDefault();

        const taches = {name, priority, matiereId: mid}
        console.log(taches)
        navigator('/listetaches/' + mid)

        createTache(taches).then((response) => {
            console.log(response.data)
        })
    }

/*--------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    // @ts-ignore
    return (
        <div className="ml-54">
            {/*Creation du bouton Retour*/}
            <div className="flex justify-start">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

            {/*Page Principale*/}
            <div className="flex justify-center items-center h-screen">
                <div className="w-120 p-6 shadow-2xl rounded-md bg-primary-content">

                    {/*Titre de la page*/}
                    <h1 className="text-4xl leading-tight block text-center italic m-2 font-semibold font-mono text-shadow-lg">AJOUTER UNE TACHE/DEVOIR</h1>
                    <hr/>

                    {/*Section d'ajout de Tache*/}
                    <form>
                        <div className="mt-8">
                            <label className="mt-9 text-xl italic">Nom de la tache/devoir : </label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full text-base px-2 py-1 " placeholder="Entrer le nom de la tache/matiere"/>
                        </div>
                        <div className="mt-5">
                            <label className="mt-5 text-xl italic">Priorité de la tache/devoir : </label>
                            <input type="text" name="date" value={priority} onChange={(e) => setPriority(e.target.value)} className="border w-full text-base px-2 py-1" placeholder="Priorité(Important-Moyen-Bas)"/>
                        </div>
                        <div className="mt-13">
                            <button onClick={saveTache} className="btn btn-primary w-full text-xl font-semibold transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none"><CirclePlus />Ajouter</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AjouterTaches;