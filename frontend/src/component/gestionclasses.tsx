import {ChevronLeft} from "lucide-react";
import {useNavigate, useParams} from "react-router-dom";

const Gestionclasses = () => {

/*---------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const navigator = useNavigate();

    //Variable permettant la recuperation de l'ID de la page
    const {id} = useParams();

    // function de navigation sur la page du calcul des moyennes
    function Navigate() {
        navigator('/calculmoyenne/' + id)
    }

    //function de retour
    function retour(){
        navigator('/listeclasses')
    }

    //function de navigation sur la page de modification de la classe
    function Navigate2() {
        navigator(`/modifierclasses/` + id)
    }

    //function de navigation sur la page de la listeUEs
    function Navigate3() {
        navigator('/listeUEs/' + id)
    }

/*-------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/
    return (
        <div>

            {/*Creation du bouton Retour*/}
            <div className="flex justify-start ml-54">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>


       <div className="ml-54 flex justify-center items-center flex-col mt-20">

           {/*Bouton de visualisation de l'UE*/}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center m-5">
               <div onClick={Navigate3} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">voir les UEs</h2>
                   <p>visualiser les UEs disponibles dans cette classe et intéragir avec</p>

               </div>
           </div>

           {/*Bouton de calcul de moyenne*/}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center mb-5">
               <div onClick={Navigate} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">Calculer sa moyenne</h2>
                   <p>Calculer sa moyenne et sa MGP du semestre et visualiser les matières validées ou non</p>

               </div>
           </div>

           {/*Bouton de modification de la classe*/}
           <div className="flex-col card w-96 bg-base-200 card-md shadow-sm justify-center items-center">
               <div onClick={Navigate2} className="card-body cursor-pointer  hover:bg-base-300 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none">
                   <h2 className="card-title">paramétrer la classe</h2>
                   <p>Modifier les paramètres de la classes, notamment le nom et l'année</p>

               </div>
           </div>
       </div>
        </div>
    )
}

export default Gestionclasses