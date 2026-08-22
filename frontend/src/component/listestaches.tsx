import {ChevronLeft, CirclePlus, Trash2} from 'lucide-react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {deleteTache, getTachesByMatiere} from "../services/TacheService.ts";


const ListeTaches = () => {

/*----------------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const {mid} = useParams();

    //Donnée sur les classes modifiables
    const [taches, setTaches] = useState([])

    //Modifier automatique les effects de la page
    useEffect(() => {
        getTaches()
    }, [])

    //fonction pour recuperer automatiquement toutes les taches
    function getTaches(){
        getTachesByMatiere(mid).then((response) => {
            setTaches(response.data)
        }).catch(error => {
            console.error(error)
        });

    }

    //fonction de suppresion des Taches
    function removeTaches(tid : any){
        console.log(tid);

        deleteTache(tid).then(() => {
            getTaches()
            navigator('/listetaches/' + mid)
        }).catch(error => {
            console.error(error);
        })
    }

    //variable permettant la navigation sur les differentes pages
    const navigator = useNavigate();

    //fonction de navigation sur ajouter les taches
    function Navigate() {
        navigator('/ajoutertaches/' + mid)
    }

    //fonction de retour
    function retour(){
        navigator('/gestionUEs/' + mid)
    }

/*------------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return(
        <div>

            {/*Bouton Retour*/}
            <div className="flex justify-start ml-54">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

            <div className="ml-54 mt-13">

                {/*Titre de la page*/}
                <h1 className=" flex text-4xl justify-center m-10 underline font-mono font-bold mb-20">GERER VOS <span className="text-accent"> Taches/Devoirs</span></h1>

                <h2 className=" flex mr-35 text-3xl text-primary mb-3 justify-evenly italic"> Listes de vos Taches/Devoirs <button onClick={Navigate} className="shadow-lg flex btn btn-primary transform transition hover:-translate-x-1 motion-reduce:transition-none motion-safe:hover:transform-none"><CirclePlus />
                    Ajouter</button></h2>

                {/*Table de gestion des taches*/}
                <table className="w-2/3 justify-center ml-55 table table-striped table-bordered ">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Taches/Devoirs</th>
                        <th>Priorité</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*Differentes taches */}
                    {
                        taches.map(({priority, tid, name}) =>

                            <tr key={tid}  className="cursor-pointer text-lg  ">
                                <td>{tid}</td>
                                <td>{name}</td>
                                <td>{priority}</td>
                                <td><button className="btn btn-error w-20 h-10 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"  onClick={() => removeTaches(tid) } ><Trash2 /></button></td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ListeTaches;