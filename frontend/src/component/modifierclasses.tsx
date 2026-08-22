import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeft, SavePlus} from 'lucide-react';
import {useState, useEffect} from "react";
import {getClasses, updateClasses} from "../services/ClassesService.ts";


const Modifierclasses = () => {

/*---------------------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //variable permettant la navigation sur les differentes pages
    const navigator = useNavigate();

    //Variable permettant la recuperation de l'ID de la page
    const {id} = useParams();

    //fonction de retour
    function retour(){
        navigator('/gestionclasses/'  + id)
    }

    // Initialisation des variables clé de modification de Classe
    const [name, setName] = useState("");
    const [date, setDate] = useState("");


    //Modifier automatiquement les effects de la page
    useEffect(() => {

        if(id){
            getClasses(id).then((response) => {
                setName(response.data.name);
                setDate(response.data.date);
            }).catch(error => console.error(error));
        }
    }, [id])

    //fonction de modification de classe
    // @ts-ignore
    function updatesClasses(e){
        e.preventDefault();

        const classes = {name, date}
        console.log(classes)

        updateClasses(id, classes).then((response) => {
            console.log(response.data);
            navigator('/listeclasses')
        }).catch(error => console.error(error));
    }

/*----------------------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

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
                    <h1 className="text-4xl leading-tight block text-center italic m-2 font-semibold font-mono text-shadow-lg">MODIFIER LA CLASSE</h1>
                    <hr/>

                    {/*Section de modification de classe*/}
                    <form>
                        <div className="mt-8">
                            <label className="mt-9 text-xl italic">Nom de la classe </label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full text-base px-2 py-1 " placeholder="Entrer la classe"/>
                        </div>
                        <div className="mt-5">
                            <label className="mt-5 text-xl italic">Année de la classe : </label>
                            <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="border w-full text-base px-2 py-1" placeholder="Entrer l'année"/>
                        </div>
                        <div className="mt-13">
                            <button onClick={updatesClasses} className="btn btn-primary w-full text-xl font-semibold transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none"><SavePlus />Modifier</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Modifierclasses;