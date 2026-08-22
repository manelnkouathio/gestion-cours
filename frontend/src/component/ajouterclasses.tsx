import {useNavigate} from "react-router-dom";
import {ChevronLeft, CirclePlus} from "lucide-react";
import {useState} from "react";
import { createClasses} from "../services/ClassesService.ts";


const Ajouterclasses = () => {

/*------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const navigator = useNavigate();

    //Bouton retours
    function retour(){
        navigator('/listeclasses')
    }

    // Initialisation des variables clé d'ajout de Classe
    const [name, setName] = useState("");
    const [date, setDate] = useState("");


    //function d'ajout de classe
    // @ts-ignore
    function saveClasses(e){
        e.preventDefault();

        const classes = {name, date}
        console.log(classes)
        navigator('/listeclasses')

        createClasses(classes).then((response) => {
            console.log(response.data)
        })
    }

/*--------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return (
        <div className="ml-54">
            {/*Creation du bouton Retour*/}
            <div className="flex justify-start">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

            {/*Page Principale*/}
            <div className="flex justify-center items-center h-screen mb-12">
                <div className="w-120 p-6 shadow-2xl rounded-md bg-primary-content">

                    {/*Titre de la page*/}
                    <h1 className="text-4xl leading-tight block text-center italic m-2 font-semibold font-mono text-shadow-lg">AJOUTER UNE CLASSE</h1>
                    <hr/>

                    {/*Section d'ajout de Classe*/}
                    <form>
                        <div className="mt-8">
                            <label className="mt-9 text-xl italic">Nom de la classe : </label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full text-base px-2 py-1 " placeholder="Entrer la classe"/>
                        </div>
                        <div className="mt-5">
                            <label className="mt-5 text-xl italic">Année de la classe : </label>
                            <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="border w-full text-base px-2 py-1" placeholder="Entrer l'année"/>
                        </div>
                        <div className="mt-13">
                            <button onClick={saveClasses} className="btn btn-primary w-full text-xl font-semibold transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none"><CirclePlus />Ajouter</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Ajouterclasses;