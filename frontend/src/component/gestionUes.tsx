import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeft} from "lucide-react";

const GestionUes = () => {

/*-------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const navigator = useNavigate();

    //Variable permettant la recuperation de l'ID et de MID de la page
    const {id} = useParams();
    const {mid} = useParams();

    //function de navigation sur les notes de cours
    function Navigate() {
        navigator('/notescours/' + mid)
    }

    //function de navigation sur la page de modification de l'UE
    function Navigate2() {
        navigator('/modifierUEs/' + mid)
    }

    //function de navigation sur la page de liste de taches
    function Navigate3() {
        navigator('/listetaches/' + mid)
    }

    //function de Retour
    function retour(){
        navigator('/listeUEs/' + id)
    }

/*-------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return (
        <div>

            {/*Creation du bouton Retour*/}
            <div className="flex justify-start ml-54">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR(pas Opérationnel)</button>
            </div>

       <div className="ml-54 flex justify-center items-center flex-col mt-20">

           {/*Bouton d'Ajout de devoir/tache*/}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center m-5">
               <div onClick={Navigate3} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">Ajouter les devoirs/tâches</h2>
                   <p>Ajouter les tâches et les devoirs pour cette UE sous forme d'une liste</p>

               </div>
           </div>

           {/*Bouton de Note de cours*/}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center mb-5">
               <div onClick={Navigate} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">Noter le cours</h2>
                   <p>Prendre les notes de cours pour cette UE et enregistrer sous forme d'un PDF</p>

               </div>
           </div>

           {/*Bouton de modification de l'UE */}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center">
               <div onClick={Navigate2} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">Modifier les paramètres de l'UE</h2>
                   <p>Modifier les paramètres de l'UE, notamment le nom et les crédits </p>

               </div>
           </div>
       </div>
        </div>
    )
}

export default GestionUes