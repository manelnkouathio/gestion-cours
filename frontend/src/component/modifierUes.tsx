import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeft, SavePlus} from 'lucide-react';
import {useEffect, useState} from "react";
import {getMatieres, updateMatiere} from "../services/MatiereService.ts";


const ModifierUes = () => {

/*---------------------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //variable permettant la navigation sur les differentes pages
    const navigator = useNavigate();

    //Variable permettant la recuperation de l'ID de la page
    const {mid} = useParams();

    //fonction de retour
    function retour(){
        navigator('/gestionUEs/' + mid)
    }

    // Initialisation des variables clé de modification de matiere
    const [name, setName] = useState("");
    const [credit, setCredit] = useState("");

    //Modifier automatiquement les effects de la page
    useEffect(() => {

        if(mid){
            getMatieres(mid).then((response) => {
                setName(response.data.name);
                setCredit(response.data.credit);
            }).catch(error => console.error(error));
        }
    }, [mid])

    //fonction de modification de la matiere
    // @ts-ignore
    function updatesMatiere(e){
        e.preventDefault();

        const matieres = {name, credit}
        console.log(matieres)

        updateMatiere(mid, matieres).then((response) => {
            console.log(response)
            navigator('/listeUEs/' + mid)
        }).catch(error => console.error(error));

    }

/*-------------------------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return (
        <div className="ml-54">

            {/*Bouton Retour*/}
            <div className="flex justify-start">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

            {/*Page Principale*/}
            <div className="flex justify-center items-center h-screen">
                <div className="w-120 p-6 shadow-2xl rounded-md bg-primary-content">

                    {/*Titre de la page*/}
                    <h1 className="text-4xl leading-tight block text-center italic m-2 font-semibold font-mono text-shadow-lg">MODIFIER L'UE </h1>
                    <hr/>

                    {/*Section de modification d'UE*/}
                    <form>
                        <div className="mt-8">
                            <label className="mt-9 text-xl italic">Nom de l'UE </label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full text-base px-2 py-1 " placeholder="Modifier l'UE "/>
                        </div>
                        <div className="mt-5">
                            <label className="mt-5 text-xl italic">Crédit de l'UE : </label>
                            <input type="text" name="credit" value={credit} onChange={(e) => setCredit(e.target.value)} className="border w-full text-base px-2 py-1" placeholder="Modifier le credit"/>
                        </div>
                        <div className="mt-13">
                            <button onClick={updatesMatiere} className="btn btn-primary w-full text-xl font-semibold transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none"><SavePlus />Modifier</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ModifierUes;